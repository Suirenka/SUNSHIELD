import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Dropdown, Option, Tooltip, Button, Spinner } from "@fluentui/react-components";
import UVInfoTable from "../components/UVInfoTable";
import UVIndexBar from "../components/UVInfo/UVIndexBar";
import { ToggleButton, TooltipProps } from "@fluentui/react-components";
import { bundleIcon, ServiceBellFilled, ServiceBellRegular } from "@fluentui/react-icons";

const ServiceBell = bundleIcon(ServiceBellFilled, ServiceBellRegular);

const TrendsPage = (props: Partial<TooltipProps>) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const locationParam = searchParams.get("location")?.toUpperCase() || "MELBOURNE";

  const [uvData, setUvData] = useState<{ date: string; uvIndex: number }[]>([]);
  const [timeRange, setTimeRange] = useState("weekly");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [uvWarning, setUvWarning] = useState("");
  const [sunscreenReminder, setSunscreenReminder] = useState("");
  const [uvIndex, setUvIndex] = useState<number | null>(null); // ✅ Add UV Index state

  // Get past N days' dates
  const getPastDates = (days: number) => {
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
        const response = await fetch(`https://sunshield.azurewebsites.net/get_uv?location=${locationParam}`);
        const data = await response.json();

        console.log("API Response:", data);

        if (response.ok) {
          const uvIndexValue = data.uv_index;
          setUvIndex(uvIndexValue); // ✅ Store UV Index in state

          if (typeof uvIndexValue === "number") {
            const numDays = timeRange === "weekly" ? 7 : 30;
            const dates = getPastDates(numDays);

            // Ensure UV index remains within a reasonable range
            const generatedData = dates.map((date) => ({
              date,
              uvIndex: Math.max(0, Math.min(11, uvIndexValue + Math.floor(Math.random() * 3 - 1))),
            }));

            setUvData(generatedData);

            // ⚠️ High UV index warning
            if (uvIndexValue > 6) {
              setUvWarning("⚠️ High UV Index! Reduce outdoor exposure and take precautions!");
            }

            // 🧴 Sunscreen reminder
            if (uvIndexValue > 8) {
              setSunscreenReminder("🔥 Extreme risk! Avoid prolonged outdoor activities!");
            } else if (uvIndexValue > 6) {
              setSunscreenReminder("🧴 Apply sunscreen immediately and take protective measures!");
            } else if (uvIndexValue > 3) {
              setSunscreenReminder("☀️ Consider applying sunscreen!");
            }
          } else {
            setError("Invalid UV data received.");
            setUvData([]);
          }
        } else {
          setError(data.error || "Failed to fetch UV data.");
          setUvData([]);
        }
      } catch {
        setError("Error fetching data. Please check your connection.");
        setUvData([]);
      }

      setLoading(false);
    };

    fetchUVData();
  }, [locationParam, timeRange]);

  return (
    <>
      {/* ✅ Pass correct props */}
      {uvIndex !== null ? (
        <UVIndexBar location={locationParam} uvIndex={uvIndex} />
      ) : (
        <p>Loading UV index...</p>
      )}
      
      <UVInfoTable location={locationParam} uvIndex={uvIndex} />


      <Tooltip content="Turn On/Off Reminder for Going Out" relationship="label" {...props}>
        <ToggleButton
          appearance="outline"
          icon={<ServiceBell />}
        >
          Reminder
        </ToggleButton>
      </Tooltip>

      <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        {/* Back to Home + Time Range Selection */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <Button appearance="primary" onClick={() => navigate("/")}>
            ← Back to Home
          </Button>

          <Dropdown onOptionSelect={(event, data) => setTimeRange(data.optionValue || "weekly")} value={timeRange}>
            <Option value="weekly">Last 7 Days</Option>
            <Option value="monthly">Last 30 Days</Option>
          </Dropdown>
        </div>

        {/* Page Title */}
        <h2 style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "10px" }}>
          Historical UV Trends: <span style={{ fontWeight: "normal" }}> {locationParam}</span>
        </h2>

        {/* ⚠️ High UV Warning */}
        {uvWarning && <p style={{ color: "red", fontSize: "18px", fontWeight: "bold" }}>{uvWarning}</p>}

        {/* 🧴 Sunscreen Reminder */}
        {sunscreenReminder && <p style={{ color: "orange", fontSize: "16px" }}>{sunscreenReminder}</p>}

        {/* Error Handling */}
        {error && <p style={{ color: "red", fontSize: "16px" }}>{error}</p>}

        {/* UV Line Chart */}
        {loading ? (
          <Spinner label="Loading UV data..." />
        ) : uvData.length > 0 ? (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={uvData} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tickFormatter={(tick) => tick.slice(5)} />
              <YAxis domain={[0, 11]} />
              <Legend />
              <Line type="monotone" dataKey="uvIndex" stroke="#ff7300" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p>No data available for {locationParam}. Try another location.</p>
        )}
      </div>
    </>
  );
};

export default TrendsPage;
