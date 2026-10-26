import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";
import Dashboard from "./components/Dashboard/Dashboard";
import SymptomChecker from "./components/SymptomChecker/SymptomChecker";
import Consultation from "./components/Consultation/Consultation";
import Medications from "./components/Medications/Medications";
import HealthRecords from "./components/HealthRecords/HealthRecords";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import { isAuthenticated, logoutUser } from "./utils/auth";
import { Login } from "./Pages/Login/Login";


const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

const Logout = () => {
  logoutUser();
  return <Navigate to="/login" replace />;
};

const App = () => {
  
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          isAuthenticated() ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      <Route
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/symptom-checker" element={<SymptomChecker />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/medications" element={<Medications />} />
        <Route path="/health-records" element={<HealthRecords />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<Logout />} />
      </Route>
    </Routes>
  );
};

export default App;
