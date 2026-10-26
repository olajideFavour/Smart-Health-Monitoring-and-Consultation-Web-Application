import React from "react";
const HealthStatusCard = ({ status }) => (
  <div className="card health-status">
    <h3>Health Status</h3>
    <p>{status}</p>
  </div>
);
export default HealthStatusCard;