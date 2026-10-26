import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SymptomChecker.css";

const initialResult = {
  vitalsStatus: "",
  possibleConditions: [],
  probableCause: "",
  preventionAndCure: "",
};

const SymptomChecker = () => {
  const [form, setForm] = useState({
    temperature: "",
    systolic: "",
    diastolic: "",
    heartRate: "",
    symptoms: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(initialResult);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const analyzeVitals = () => {
    const temp = parseFloat(form.temperature);
    const sys = parseInt(form.systolic, 10);
    const dia = parseInt(form.diastolic, 10);
    const hr = parseInt(form.heartRate, 10);

    const messages = [];

    if (!Number.isNaN(temp)) {
      if (temp < 36.1) messages.push("Low temperature");
      else if (temp > 37.5) messages.push("High temperature");
      else messages.push("Temperature normal");
    }

    if (!Number.isNaN(sys) && !Number.isNaN(dia)) {
      if (sys < 90 || dia < 60) messages.push("Blood pressure low");
      else if (sys > 140 || dia > 90) messages.push("Blood pressure high");
      else messages.push("Blood pressure normal");
    }

    if (!Number.isNaN(hr)) {
      if (hr < 60) messages.push("Heart rate low");
      else if (hr > 100) messages.push("Heart rate high");
      else messages.push("Heart rate normal");
    }

    return messages.join(" • ");
  };

  const fakeApiCall = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const symptomsText = form.symptoms.toLowerCase();

        let possibleConditions = ["General fatigue"];
        let probableCause = "Mild stress or dehydration";
        let preventionAndCure =
          "Rest, drink water, monitor your symptoms, and seek medical care if symptoms worsen.";

        if (symptomsText.includes("cough") || symptomsText.includes("fever")) {
          possibleConditions = ["Flu", "Common Cold", "Viral Infection"];
          probableCause = "Likely viral infection based on fever/cough pattern";
          preventionAndCure =
            "Rest, fluids, paracetamol if appropriate, and consult a doctor if symptoms persist.";
        }

        if (symptomsText.includes("headache")) {
          possibleConditions = [...possibleConditions, "Migraine", "Tension headache"];
        }

        resolve({
          vitalsStatus: analyzeVitals(),
          possibleConditions,
          probableCause,
          preventionAndCure,
        });
      }, 1200);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await fakeApiCall();
      setResult(data);
    } catch (error) {
      console.error("Symptom analysis failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="symptom-page">
      <h2>Symptom Checker</h2>

      <form className="symptom-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <input
            type="number"
            step="0.1"
            name="temperature"
            placeholder="Temperature (°C)"
            value={form.temperature}
            onChange={handleChange}
          />

          <input
            type="number"
            name="systolic"
            placeholder="Systolic BP"
            value={form.systolic}
            onChange={handleChange}
          />

          <input
            type="number"
            name="diastolic"
            placeholder="Diastolic BP"
            value={form.diastolic}
            onChange={handleChange}
          />

          <input
            type="number"
            name="heartRate"
            placeholder="Heart Rate (BPM)"
            value={form.heartRate}
            onChange={handleChange}
          />
        </div>

        <textarea
          name="symptoms"
          placeholder="Describe your symptoms..."
          rows="5"
          value={form.symptoms}
          onChange={handleChange}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Analyzing..." : "Check Symptoms"}
        </button>
      </form>

      <div className="summary-grid">
        <div className="summary-card">
          <h3>Vitals Summary</h3>
          <p>{result.vitalsStatus || "No analysis yet."}</p>
        </div>

        <div className="summary-card">
          <h3>Possible Conditions</h3>
          {result.possibleConditions.length ? (
            <ul>
              {result.possibleConditions.map((condition, index) => (
                <li key={index}>{condition}</li>
              ))}
            </ul>
          ) : (
            <p>No conditions yet.</p>
          )}
        </div>

        <div className="summary-card">
          <h3>Probable Cause</h3>
          <p>{result.probableCause || "No cause yet."}</p>
        </div>

        <div className="summary-card">
          <h3>Prevention & Cure</h3>
          <p>{result.preventionAndCure || "No recommendation yet."}</p>
        </div>
      </div>

      <div className="consult-link-wrap">
        <Link to="/consultation" className="consult-link">
          Seek Consultation
        </Link>
      </div>
    </div>
  );
};

export default SymptomChecker;
