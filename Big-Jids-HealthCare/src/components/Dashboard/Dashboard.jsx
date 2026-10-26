import React from "react";
import {data} from "../../Data/data";
import HealthStatusCard from "./HealthStatusCard";
import DailyTipCard from "./DailyTipCard";
import MedicationCard from "./MedicationCard";
import SummaryCard from "./SummaryCard";
import "./Dashboard.css";

const Dashboard = () => {
  const founduser = JSON.parse(localStorage.getItem("user"));
  const currentUser = data.Patientuser.find(p => p.id === founduser.id);
  const medications = data.medication.filter(m => currentUser.medications.includes(m.id));
  const notifications = currentUser.notification;

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="dashboard-user">
          <img src={currentUser.profilePic} alt="Profile" />
          <div>
            <h2>Hi, {currentUser.name}</h2>
            <p>Here is your health overview for today.</p>
          </div>
        </div>
      </header>

      <div className="dashboard-grid">
        <HealthStatusCard status={currentUser.healthStatus} />
        <DailyTipCard />
        <MedicationCard medications={medications} />
        <SummaryCard />
      </div>

      <section className="notifications-section">
        <h3>Notifications</h3>
        <ul className="notifications-list">
          {notifications.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
