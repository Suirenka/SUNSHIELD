import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Dropdown, Option, Button } from "@fluentui/react-components";

const mockUVData = {
  MELBOURNE: {
    weekly: [
      { date: "2025-03-01", uvIndex: 3 },
      { date: "2025-03-02", uvIndex: 5 },
      { date: "2025-03-03", uvIndex: 6 },
      { date: "2025-03-04", uvIndex: 8 },
      { date: "2025-03-05", uvIndex: 7 },
      { date: "2025-03-06", uvIndex: 9 },
      { date: "2025-03-07", uvIndex: 10 },
    ],
    monthly: [
      { date: "2025-02-01", uvIndex: 2 },
      { date: "2025-02-08", uvIndex: 4 },
      { date: "2025-02-15", uvIndex: 7 },
      { date: "2025-02-22", uvIndex: 8 },
      { date: "2025-03-01", uvIndex: 10 },
    ],
  },
  SYDNEY: {
    weekly: [
      { date: "2025-03-01", uvIndex: 4 },
      { date: "2025-03-02", uvIndex: 6 },
      { date: "2025-03-03", uvIndex: 7 },
      { date: "2025-03-04", uvIndex: 9 },
      { date: "2025-03-05", uvIndex: 8 },
      { date: "2025-03-06", uvIndex: 10 },
      { date: "2025-03-07", uvIndex: 11 },
    ],
    monthly: [
      { date: "2025-02-01", uvIndex: 3 },
      { date: "2025-02-08", uvIndex: 5 },
      { date: "2025-02-15", uvIndex: 6 },
      { date: "2025-02-22", uvIndex: 8 },
      { date: "2025-03-01", uvIndex: 9 },
    ],
  },
};

const TrendsPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const locationParam = searchParams.get("location")?.toUpperCase() || "MELBOURNE";
  const [uvData, setUvData] = useState([]);
  const [timeRange, setTimeRange] = useState("weekly");

  useEffect(() => {
    if (mockUVData.hasOwnProperty(locationParam)) {
      setUvData(mockUVData[locationParam][timeRange]);
    } else {
      setUvData([]);
    }
  }, [locationParam, timeRange]);

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
      {/* Back to Home + Dropdown Selection */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <Button appearance="primary" onClick={() => navigate("/")}>
          ← Back to Home
        </Button>

        <Dropdown onOptionSelect={(event, data) => setTimeRange(data.optionValue)} value={timeRange}>
          <Option value="weekly">Last 7 Days</Option>
          <Option value="monthly">Last 30 Days</Option>
        </Dropdown>
      </div>

      {/* Page Title */}
      <h2 style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "10px" }}>
        Historical UV Trends: <span style={{ fontWeight: "normal" }}> {locationParam}</span>
      </h2>

      {/* UV Line Chart */}
      {uvData.length > 0 ? (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={uvData} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
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
