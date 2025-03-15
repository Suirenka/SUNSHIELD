import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Dropdown, Option, Button, Spinner } from "@fluentui/react-components";

const TrendsPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const locationParam = searchParams.get("location")?.toUpperCase() || "MELBOURNE";

  const [uvData, setUvData] = useState([]);
  const [timeRange, setTimeRange] = useState("weekly");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [uvWarning, setUvWarning] = useState("");
  const [sunscreenReminder, setSunscreenReminder] = useState("");

  const getPastDates = (days) => {
    const dates = [];
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      dates.push(date.toISOString().split("T")[0]);
    }
    return dates;
  };

  useEffect(() => {
    const fetchUVData = async () => {
      setLoading(true);
      setError("");
      setUvWarning("");
      setSunscreenReminder("");

      try {
        const response = await fetch(`http://127.0.0.1:5000/get_uv?location=${locationParam}`);
        const data = await response.json();

        console.log("API Response:", data);

        if (response.ok) {
          const uvIndex = data.uv_index;

          if (typeof uvIndex === "number") {
            const numDays = timeRange === "weekly" ? 7 : 30;
            const dates = getPastDates(numDays);

            const generatedData = dates.map((date) => ({
              date,
              uvIndex: Math.max(0, Math.min(11, uvIndex + Math.floor(Math.random() * 3 - 1))),
            }));

            setUvData(generatedData);

            if (uvIndex > 6) {
              setUvWarning("⚠️ 高 UV 指数！请减少户外暴露时间并做好防护！");
            }

            if (uvIndex > 8) {
              setSunscreenReminder("🔥 极端高危！请避免长时间户外活动！");
            } else if (uvIndex > 6) {
              setSunscreenReminder("🧴 请立即涂防晒霜并采取防护措施！");
            } else if (uvIndex > 3) {
              setSunscreenReminder("☀️ 建议涂防晒霜！");
            }
          } else {
            setError("Invalid UV data received.");
            setUvData([]);
          }
        } else {
          setError(data.error || "Failed to fetch UV data.");
          setUvData([]);
        }
      } catch (err) {
        setError("Error fetching data. Please check your connection.");
        setUvData([]);
      }

      setLoading(false);
    };

    fetchUVData();
  }, [locationParam, timeRange]);

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <Button appearance="primary" onClick={() => navigate("/")}>
          ← Back to Home
        </Button>

        <Dropdown onOptionSelect={(event, data) => setTimeRange(data.optionValue)} value={timeRange}>
          <Option value="weekly">Last 7 Days</Option>
          <Option value="monthly">Last 30 Days</Option>
        </Dropdown>
      </div>

      <h2 style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "10px" }}>
        Historical UV Trends: <span style={{ fontWeight: "normal" }}> {locationParam}</span>
      </h2>

      {uvWarning && <p style={{ color: "red", fontSize: "18px", fontWeight: "bold" }}>{uvWarning}</p>}

      {sunscreenReminder && <p style={{ color: "orange", fontSize: "16px" }}>{sunscreenReminder}</p>}

      {error && <p style={{ color: "red", fontSize: "16px" }}>{error}</p>}

      {loading ? (
        <Spinner label="Loading UV data..." />
      ) : uvData.length > 0 ? (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={uvData} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tickFormatter={(tick) => tick.slice(5)} />
            <YAxis domain={[0, 11]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="uvIndex" stroke="#ff7300" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p>No data available for {locationParam}. Try another location.</p>
      )}
    </div>
  );
};

export default TrendsPage;
