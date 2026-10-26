import React from "react";
import "./Dashboard.css";

const MedicationCard = ({ medications = [] }) => {
  const activeMeds = medications.filter((med) => !med.completed);

  return (
    <div className="dashboard-card medication-card">
      <div className="card-header">
        <h3>Current Medications</h3>
        <span className="med-badge">{activeMeds.length}</span>
      </div>

      {activeMeds.length > 0 ? (
        <div className="medication-list">
          {activeMeds.slice(0, 3).map((med) => (
            <div className="medication-item" key={med.id}>
              <div>
                <h4>{med.name}</h4>
                <p>{med.time}</p>
              </div>
              <span className={`status ${med.completed ? "done" : "pending"}`}>
                {med.completed ? "Completed" : "Pending"}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-state">No current medications.</p>
      )}
    </div>
  );
};

export default MedicationCard;
