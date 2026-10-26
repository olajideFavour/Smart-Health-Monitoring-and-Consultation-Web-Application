import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Dashboard", path: "/dashboard", icon: "🏠" },
  { label: "Symptom Checker", path: "/symptom-checker", icon: "🩺" },
  { label: "Consultation", path: "/consultation", icon: "💬" },
  { label: "Medications", path: "/medications", icon: "💊" },
  { label: "Health Records", path: "/health-records", icon: "📈" },
  { label: "Profile", path: "/profile", icon: "👤" },
  { label: "Settings", path: "/settings", icon: "⚙️" },
  { label: "Logout", path: "/logout", icon: "🚪" },
];

const Sidebar = ({ open, onClose }) => {
  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <div className="sidebar-header">
        <div className="brand">
          <div className="brand-logo">H</div>
          <div>
            <h2>HealthApp</h2>
            <p>Care dashboard</p>
          </div>
        </div>

        <button className="sidebar-close" onClick={onClose}>
          ✕
        </button>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
            onClick={onClose}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
