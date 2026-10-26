import React from "react";
import {data }from "../../Data/data.js";
import { useLocation } from "react-router-dom";

const pageTitles = {
  "/dashboard": "Dashboard",
  "/symptom-checker": "Symptom Checker",
  "/consultation": "Consultation",
  "/medications": "Medications",
  "/health-records": "Health Records",
  "/profile": "Profile",
  "/settings": "Settings",
};




const Topbar = ({ onMenuClick }) => {
  const founduser = JSON.parse(localStorage.getItem("user"));
  const currentUser = data.Patientuser.find(p => p.id === founduser.id);

  const location = useLocation();

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="menu-btn" onClick={onMenuClick}>
          ☰
        </button>

        <div>
          <h1>{pageTitles[location.pathname] || "HealthApp"}</h1>
          <p>Manage your health records and daily care</p>
        </div>
      </div>

      <div className="topbar-right">
        <button className="notification-btn">
          🔔
          {currentUser?.notification?.length > 0 && (
            <span className="notification-count">{currentUser.notification.length}</span>
          )}
        </button>

        <div className="topbar-profile">
          <img
            src={currentUser?.profilePic || './src/assets/defaultuser.png'}
            alt={currentUser?.name || "User"}
          />
          <div>
            <h4>{currentUser?.name || "User"}</h4>
            <p>{currentUser?.healthStatus || "Healthy"}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
