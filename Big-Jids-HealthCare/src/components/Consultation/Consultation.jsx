import React, { useMemo, useState } from "react";
import ChatList from "./ChatList";
import ChatBox from "./ChatBox";
import DoctorCard from "./DoctorCard";
import "./Consultation.css";

const initialDoctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "General Physician",
    rating: 4.8,
    certifications: ["MBBS", "MRCGP"],
    avatar: "././src/assets/doctor.png",
    online: true,
  },
  {
    id: 2,
    name: "Dr. Michael Lee",
    specialty: "Cardiologist",
    rating: 4.7,
    certifications: ["MBBS", "FWACP"],
    avatar: "././src/assets/doctor.png",
    online: false,
  },
];

const initialChats = [
  {
    doctorId: 1,
    messages: [
      { id: 1, sender: "doctor", text: "Hello, how are you feeling today?", time: "09:10 AM" },
      { id: 2, sender: "user", text: "I have a mild fever and headache.", time: "09:12 AM" },
      {
        id: 3,
        sender: "doctor",
        type: "medication",
        prescription: {
          title: "Prescription",
          medications: ["Paracetamol 500mg - twice daily", "Vitamin C - once daily"],
        },
        time: "09:15 AM",
      },
    ],
  },
];

const Consultation = () => {
  const [tab, setTab] = useState("chats");
  const [doctors, setDoctors] = useState(initialDoctors);
  const [chats, setChats] = useState(initialChats);
  const [selectedDoctorId, setSelectedDoctorId] = useState(initialDoctors[0]?.id || null);
  const [blockedDoctors, setBlockedDoctors] = useState([]);

  const availableDoctors = useMemo(
    () => doctors.filter((doctor) => !blockedDoctors.includes(doctor.id)),
    [doctors, blockedDoctors]
  );

  const selectedDoctor = availableDoctors.find((doctor) => doctor.id === selectedDoctorId);

  const selectedChat = chats.find((chat) => chat.doctorId === selectedDoctorId);

  const handleStartConsultation = (doctorId) => {
    setSelectedDoctorId(doctorId);
    setTab("chats");

    const hasChat = chats.some((chat) => chat.doctorId === doctorId);
    if (!hasChat) {
      setChats((prev) => [...prev, { doctorId, messages: [] }]);
    }
  };

  const handleSendMessage = (doctorId, text) => {
    if (!text.trim()) return;

    setChats((prev) =>
      prev.map((chat) =>
        chat.doctorId === doctorId
          ? {
              ...chat,
              messages: [
                ...chat.messages,
                {
                  id: Date.now(),
                  sender: "user",
                  text,
                  time: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  }),
                },
              ],
            }
          : chat
      )
    );
  };

  const handleAcceptMedication = (prescription) => {
    console.log("Accepted prescription:", prescription);
    alert("Medication accepted successfully.");
  };

  const handleDeleteConsultation = (doctorId) => {
    setChats((prev) => prev.filter((chat) => chat.doctorId !== doctorId));
    if (selectedDoctorId === doctorId) {
      setSelectedDoctorId(availableDoctors[0]?.id || null);
    }
  };

  const handleRateDoctor = (doctorId, rating) => {
    setDoctors((prev) =>
      prev.map((doctor) =>
        doctor.id === doctorId ? { ...doctor, rating } : doctor
      )
    );
  };

  const handleBlockDoctor = (doctorId) => {
    setBlockedDoctors((prev) => [...prev, doctorId]);
    if (selectedDoctorId === doctorId) {
      setSelectedDoctorId(null);
    }
  };

  return (
    <div className="consultation-page">
      <div className="consultation-tabs">
        <button
          className={tab === "chats" ? "active" : ""}
          onClick={() => setTab("chats")}
        >
          Chats
        </button>
        <button
          className={tab === "recommended" ? "active" : ""}
          onClick={() => setTab("recommended")}
        >
          Recommended Doctors
        </button>
        <button
          className={tab === "ai" ? "active" : ""}
          onClick={() => setTab("ai")}
        >
          AI Consultation
        </button>
      </div>

      {tab === "chats" && (
        <div className="chat-layout">
          <ChatList
            doctors={availableDoctors}
            chats={chats}
            selectedDoctorId={selectedDoctorId}
            onSelectDoctor={setSelectedDoctorId}
          />

          {selectedDoctor ? (
            <ChatBox
              doctor={selectedDoctor}
              messages={selectedChat?.messages || []}
              onSendMessage={(text) => handleSendMessage(selectedDoctor.id, text)}
              onAcceptMedication={handleAcceptMedication}
              onDeleteConsultation={() => handleDeleteConsultation(selectedDoctor.id)}
              onRateDoctor={(rating) => handleRateDoctor(selectedDoctor.id, rating)}
              onBlockDoctor={() => handleBlockDoctor(selectedDoctor.id)}
            />
          ) : (
            <div className="empty-chat">
              <p>No consultation selected.</p>
            </div>
          )}
        </div>
      )}

      {tab === "recommended" && (
        <div className="doctor-grid">
          {availableDoctors.length ? (
            availableDoctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                onStartConsultation={handleStartConsultation}
              />
            ))
          ) : (
            <p>No recommended doctors available.</p>
          )}
        </div>
      )}

      {tab === "ai" && (
        <div className="ai-box">
          <h3>AI Consultation</h3>
          <p>Describe your health concern to get AI guidance.</p>
          <textarea rows="5" placeholder="Type your symptoms or concern..." />
          <button>Start AI Consultation</button>
        </div>
      )}
    </div>
  );
};

export default Consultation;
