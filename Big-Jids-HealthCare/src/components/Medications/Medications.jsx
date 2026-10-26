import React, { useState } from "react";
import "./Medications.css";

const medicationData = {
  "2025-04-21": [
    {
      id: 1,
      name: "Paracetamol 500mg",
      time: "08:00 AM",
      instruction: "Take after breakfast",
      reminder: true,
      completed: false,
    },
    {
      id: 2,
      name: "Vitamin C",
      time: "01:00 PM",
      instruction: "Take after lunch",
      reminder: false,
      completed: true,
    },
  ],
};

const Medications = () => {
  const [selectedDate, setSelectedDate] = useState("2025-04-21");
  const [medications, setMedications] = useState(medicationData);

  const medsForDay = medications[selectedDate] || [];

  const toggleReminder = (id) => {
    setMedications((prev) => ({
      ...prev,
      [selectedDate]: prev[selectedDate].map((med) =>
        med.id === id ? { ...med, reminder: !med.reminder } : med
      ),
    }));
  };

  const toggleCompleted = (id) => {
    setMedications((prev) => ({
      ...prev,
      [selectedDate]: prev[selectedDate].map((med) =>
        med.id === id ? { ...med, completed: !med.completed } : med
      ),
    }));
  };

  return (
    <div className="medications-page">
      <h2>Medications</h2>

      <div className="calendar-box">
        <label>Select Date</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      <div className="medications-list">
        {medsForDay.length ? (
          medsForDay.map((med) => (
            <div className="med-card" key={med.id}>
              <h3>{med.name}</h3>
              <p><strong>Time:</strong> {med.time}</p>
              <p><strong>Instruction:</strong> {med.instruction}</p>

              <div className="med-actions">
                <label>
                  <input
                    type="checkbox"
                    checked={med.reminder}
                    onChange={() => toggleReminder(med.id)}
                  />
                  Reminder
                </label>

                <button onClick={() => toggleCompleted(med.id)}>
                  {med.completed ? "Completed" : "Check"}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No medications for this date.</p>
        )}
      </div>
    </div>
  );
};

export default Medications;
