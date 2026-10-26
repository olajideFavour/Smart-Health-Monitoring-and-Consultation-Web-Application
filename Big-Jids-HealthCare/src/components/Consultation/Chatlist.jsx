import React from "react";

const ChatList = ({ doctors, chats, selectedDoctorId, onSelectDoctor }) => {
  return (
    <aside className="chat-list">
      <h3>Doctors</h3>
      {doctors.length === 0 ? (
        <p>No contacts yet.</p>
      ) : (
        doctors.map((doctor) => {
          const chat = chats.find((item) => item.doctorId === doctor.id);
          const lastMessage = chat?.messages?.[chat.messages.length - 1];

          return (
            <div
              key={doctor.id}
              className={`chat-list-item ${selectedDoctorId === doctor.id ? "selected" : ""}`}
              onClick={() => onSelectDoctor(doctor.id)}
            >
              <img src={doctor.avatar} alt={doctor.name} />
              <div>
                <h4>{doctor.name}</h4>
                <p>{lastMessage?.text || doctor.specialty}</p>
              </div>
            </div>
          );
        })
      )}
    </aside>
  );
};

export default ChatList;
