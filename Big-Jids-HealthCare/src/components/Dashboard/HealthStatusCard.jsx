import React from "react";

const HealthStatusCard = ({ status }) => {
  return (
    <div className="dashboard-card">
      <h3>Health Status</h3>
      <p className={`health-status-text ${status.toLowerCase()}`}>{status}</p>
    </div>
  );
};

export default HealthStatusCard;
