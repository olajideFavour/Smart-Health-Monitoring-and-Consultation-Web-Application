import React, { useState } from "react";

const MedicationMessage = ({ prescription, onAcceptMedication }) => {
  return (
    <div className="medication-message">
      <h4>{prescription.title}</h4>
      <ul>
        {prescription.medications.map((med, index) => (
          <li key={index}>{med}</li>
        ))}
      </ul>
      <button onClick={() => onAcceptMedication(prescription)}>
        Accept Medications
      </button>
    </div>
  );
};

const ChatBox = ({
  doctor,
  messages,
  onSendMessage,
  onAcceptMedication,
  onDeleteConsultation,
  onRateDoctor,
  onBlockDoctor,
}) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage(message);
    setMessage("");
  };

  return (
    <section className="chat-box">
      <header className="chat-header">
        <div className="doctor-meta">
          <img src={doctor.avatar} alt={doctor.name} />
          <div>
            <h3>{doctor.name}</h3>
            <p>{doctor.specialty}</p>
          </div>
        </div>

        <div className="chat-actions">
          <button onClick={onDeleteConsultation}>Delete</button>
          <button onClick={() => onRateDoctor(5)}>Rate 5★</button>
          <button onClick={onBlockDoctor}>Block</button>
        </div>
      </header>

      <div className="doctor-profile-card">
        <p><strong>Certifications:</strong> {doctor.certifications.join(", ")}</p>
        <p><strong>Rating:</strong> {doctor.rating}</p>
      </div>

      <div className="chat-messages">
        {messages.length === 0 ? (
          <p className="empty-messages">Start your consultation...</p>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className={`message-row ${msg.sender}`}>
              {msg.type === "medication" ? (
                <MedicationMessage
                  prescription={msg.prescription}
                  onAcceptMedication={onAcceptMedication}
                />
              ) : (
                <div className="message-bubble">
                  <p>{msg.text}</p>
                  <span>{msg.time}</span>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      <form className="chat-input-area" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default ChatBox;
