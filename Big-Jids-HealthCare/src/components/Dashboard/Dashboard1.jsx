import React from "react";
import { useAppContext } from "../../context/AppContext";
import HealthStatusCard from "./HealthStatusCard";
import DailyTipCard from "./DailyTipCard";
import MedicationCard from "./MedicationCard";
import SummaryCard from "./SummaryCard";
import "./Dashboard.css";

const Dashboard = () => {
  const { user, notifications } = useAppContext();

  return (
    <div className="dashboard">
      <header>
        <img src={user.profilePic} alt="Profile" />
        <h2>Hi, {user.name}</h2>
      </header>

      <div className="dashboard-grid">
        <HealthStatusCard status={user.healthStatus} />
        <DailyTipCard />
        <MedicationCard />
        <SummaryCard />
      </div>

      <section className="notifications">
        <h3>Notifications</h3>
        <ul>
          {notifications.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
