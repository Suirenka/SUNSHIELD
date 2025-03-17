from flask import (
    Flask,
    redirect,
    render_template,
    request,
    jsonify,
    send_from_directory,
    url_for,
)
import pandas as pd
import requests
import os
from flask_cors import CORS

app = Flask(__name__, static_folder="build/static", template_folder="build")
CORS(app)

BASE_DIR = "./build"
POSTCODES_FILE = os.path.join(BASE_DIR, "australian_postcodes.xlsx")

try:
    postcodes_dt = pd.read_excel(POSTCODES_FILE)
except FileNotFoundError:
    print(f"Error: File not found at {POSTCODES_FILE}")
    postcodes_dt = None
except Exception as e:
    print(f"Error loading file: {e}")
    postcodes_dt = None

# Tomorrow.io API Key
API_KEY = "osNpUetlOzNcdtk4tHOgBjS0jlunnDXk"
BASE_URL = "https://api.tomorrow.io/v4/weather/realtime"


def get_latlong(place):
    if postcodes_dt is None:
        return "Error: Postcodes dataset not loaded"
    try:
        data = postcodes_dt[postcodes_dt["Locality"].str.lower() == place.lower()]
        if data.empty:
            return "Error: Location not found"
        lat = data["Lat"].values[0]
        lon = data["Long"].values[0]
        return lat, lon
    except KeyError as e:
        return f"Error: Column {e} not found in dataset"


import time

UV_CACHE = {}


def get_uv_index(lat, lon):
    cache_key = f"{lat},{lon}"
    current_time = time.time()

    if cache_key in UV_CACHE:
        cached_data = UV_CACHE[cache_key]
        if current_time - cached_data["timestamp"] < 600:
            return cached_data["uv_index"]

    params = {"location": f"{lat},{lon}", "apikey": API_KEY, "fields": "uvIndex"}
    try:
        response = requests.get(BASE_URL, params=params)
        data = response.json()
        if response.status_code == 200 and "data" in data:
            uv_index = data["data"]["values"]["uvIndex"]
            UV_CACHE[cache_key] = {"uv_index": uv_index, "timestamp": current_time}
            return uv_index
        else:
            return "Error: Failed to fetch UV data"
    except Exception as e:
        return f"An error occurred: {e}"


@app.route("/")
def index():
    print("Request for index page received")
    return render_template("index.html")


from flask import send_from_directory


# Serve manifest.json from the build folder
@app.route("/manifest.json")
def manifest():
    return send_from_directory(app.template_folder, "manifest.json")


# Serve australian_postcodes.xlsx from the build folder
@app.route("/australian_postcodes.xlsx")
def postcodes_file():
    return send_from_directory("build", "australian_postcodes.xlsx")


@app.route("/favicon.ico")
def favicon():
    return send_from_directory(
        os.path.join(app.root_path, "static"),
        "sunny_icon.svg",
        mimetype="image/vnd.microsoft.icon",
    )


@app.route("/get_uv", methods=["GET"])
def get_uv():
    print("Request for get uv received")
    location = request.args.get("location")
    if not location:
        return jsonify({"error": "Missing 'location' parameter"}), 400

    latlong = get_latlong(location)
    if isinstance(latlong, str) and "Error" in latlong:
        return jsonify({"error": latlong}), 404

    uv_index = get_uv_index(latlong[0], latlong[1])
    return jsonify({"location": location, "uv_index": uv_index})


if __name__ == "__main__":
    app.run(debug=True)
