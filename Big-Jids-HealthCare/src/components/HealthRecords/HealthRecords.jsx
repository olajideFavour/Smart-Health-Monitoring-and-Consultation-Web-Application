import React, { useMemo, useState } from "react";
import VitalsChart from "./VitalsChart";
import "./HealthRecords.css";

const records = {
  day: [
    { label: "6AM", temperature: 36.5, heartRate: 72, systolic: 118, diastolic: 78 },
    { label: "9AM", temperature: 36.8, heartRate: 76, systolic: 120, diastolic: 80 },
    { label: "12PM", temperature: 37.1, heartRate: 82, systolic: 122, diastolic: 81 },
    { label: "3PM", temperature: 36.9, heartRate: 79, systolic: 119, diastolic: 79 },
    { label: "6PM", temperature: 36.7, heartRate: 74, systolic: 117, diastolic: 77 },
  ],
  week: [
    { label: "Mon", temperature: 36.7, heartRate: 74, systolic: 118, diastolic: 79 },
    { label: "Tue", temperature: 36.9, heartRate: 78, systolic: 120, diastolic: 80 },
    { label: "Wed", temperature: 37.0, heartRate: 82, systolic: 124, diastolic: 82 },
    { label: "Thu", temperature: 36.8, heartRate: 76, systolic: 119, diastolic: 78 },
    { label: "Fri", temperature: 36.6, heartRate: 72, systolic: 117, diastolic: 77 },
    { label: "Sat", temperature: 36.9, heartRate: 75, systolic: 121, diastolic: 80 },
    { label: "Sun", temperature: 36.7, heartRate: 73, systolic: 118, diastolic: 78 },
  ],
  month: [
    { label: "W1", temperature: 36.8, heartRate: 75, systolic: 119, diastolic: 79 },
    { label: "W2", temperature: 36.9, heartRate: 78, systolic: 121, diastolic: 80 },
    { label: "W3", temperature: 37.0, heartRate: 80, systolic: 123, diastolic: 82 },
    { label: "W4", temperature: 36.7, heartRate: 74, systolic: 118, diastolic: 78 },
  ],
};

const getAverage = (data, key) => {
  if (!data.length) return 0;
  const total = data.reduce((sum, item) => sum + item[key], 0);
  return (total / data.length).toFixed(1);
};

const HealthRecords = () => {
  const [range, setRange] = useState("day");
  const chartData = useMemo(() => records[range], [range]);

  const summary = useMemo(
    () => ({
      avgTemp: getAverage(chartData, "temperature"),
      avgHeartRate: getAverage(chartData, "heartRate"),
      avgSystolic: getAverage(chartData, "systolic"),
      avgDiastolic: getAverage(chartData, "diastolic"),
    }),
    [chartData]
  );

  return (
    <div className="health-records-page">
      <div className="records-header">
        <div>
          <h2>Health Records</h2>
          <p>Track your vitals by day, week, or month.</p>
        </div>

        <div className="range-filter">
          {["day", "week", "month"].map((item) => (
            <button
              key={item}
              className={range === item ? "active" : ""}
              onClick={() => setRange(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="summary-grid">
        <div className="summary-card">
          <h3>Average Temperature</h3>
          <p>{summary.avgTemp}°C</p>
        </div>
        <div className="summary-card">
          <h3>Average Heart Rate</h3>
          <p>{summary.avgHeartRate} BPM</p>
        </div>
        <div className="summary-card">
          <h3>Average Blood Pressure</h3>
          <p>{summary.avgSystolic}/{summary.avgDiastolic} mmHg</p>
        </div>
      </div>

      <div className="charts-grid">
        <VitalsChart
          title="Temperature Trend"
          data={chartData}
          lines={[{ dataKey: "temperature", stroke: "#EB5757", name: "Temperature" }]}
        />

        <VitalsChart
          title="Heart Rate Trend"
          data={chartData}
          lines={[{ dataKey: "heartRate", stroke: "#2F80ED", name: "Heart Rate" }]}
        />

        <div className="full-width">
          <VitalsChart
            title="Blood Pressure Trend"
            data={chartData}
            height={320}
            lines={[
              { dataKey: "systolic", stroke: "#27AE60", name: "Systolic" },
              { dataKey: "diastolic", stroke: "#F2994A", name: "Diastolic" },
            ]}
          />
        </div>
      </div>

      <div className="period-summary-grid">
        <div className="period-summary-card">
          <h3>Day / Week / Month Summary</h3>
          <p>
            Your temperature, pulse, and blood pressure are being tracked consistently
            across the selected period.
          </p>
        </div>

        <div className="period-summary-card">
          <h3>Recommendation</h3>
          <p>
            Keep logging vitals regularly so unusual changes can be detected early.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthRecords;
