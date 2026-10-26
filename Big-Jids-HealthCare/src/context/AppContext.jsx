import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Olajide Favour",
    email: "favour@example.com",
    password: "password123",
    phone: "+234 801 234 5678",
    user: "patient",
    age: 24,
    gender: "Female",
    address: "Lagos, Nigeria",
    profilePic: "./src/assets/_MG_8411.jpg",
    healthStatus: "Good",
  });

  const [notifications] = useState([
    "Remember to take your meds at 8 PM",
    "You have an appointment tomorrow",
  ]);

  const [medications] = useState([
    {
      id: 1,
      name: "Paracetamol 500mg",
      time: "08:00 AM",
      completed: false,
    },
    {
      id: 2,
      name: "Vitamin C",
      time: "01:00 PM",
      completed: false,
    },
    {
      id: 3,
      name: "Blood Pressure Med",
      time: "08:00 PM",
      completed: true,
    },
  ]);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        notifications,
        medications,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
