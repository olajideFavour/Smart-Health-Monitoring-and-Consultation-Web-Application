import React from "react";

const DoctorCard = ({ doctor, onStartConsultation }) => {
  return (
    <div className="doctor-card">
      <img src={doctor.avatar} alt={doctor.name} />
      <h3>{doctor.name}</h3>
      <p>{doctor.specialty}</p>
      <p>Rating: {doctor.rating}</p>
      <p>{doctor.certifications.join(", ")}</p>
      <button onClick={() => onStartConsultation(doctor.id)}>
        Start Consultation
      </button>
    </div>
  );
};

export default DoctorCard;
