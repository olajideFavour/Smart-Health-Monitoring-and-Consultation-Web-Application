import React, { useRef, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import "./Profile.css";


const Profile = () => {
  const { user, setUser } = useAppContext();
  const fileInputRef = useRef(null);

  const [form, setForm] = useState({
    name: user.name || "",
    email: user.email || "",
    phone: user.phone || "",
    age: user.age || "",
    gender: user.gender || "",
    address: user.address || "",
  });

  const [previewImage, setPreviewImage] = useState(user.profilePic || "");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePickImage = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setPreviewImage(imageUrl);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser((prev) => ({
      ...prev,
      ...form,
      profilePic: previewImage,
    }));

    setMessage("Profile updated successfully.");
  };
  
  const navigate = useNavigate();

  const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  navigate("/login");
};


  

  return (
    
    <div className="profile-page">
      <div className="profile-header-card">
        <div className="profile-image-wrap">
          <img
            src={previewImage || "[via.placeholder.com](https://via.placeholder.com/120)"}
            alt="Profile"
            className="profile-image"
          />
          <button className="change-photo-btn" onClick={handlePickImage}>
            Change Picture
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            hidden
          />
        </div>

        <div className="profile-header-info">
          <h2>{form.name || "User Name"}</h2>
          <p>{form.email || "user@email.com"}</p>
          <span className="profile-status">Active Account</span>
        </div>
      </div>

      <form className="profile-form-card" onSubmit={handleSubmit}>
        <h3>Edit Profile</h3>

        <div className="profile-form-grid">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter full name"
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
            />
          </div>

          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={form.age}
              onChange={handleChange}
              placeholder="Enter age"
            />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select name="gender" value={form.gender} onChange={handleChange}>
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Enter address"
            />
          </div>
        </div>

        <div className="profile-actions">
          <button type="submit" className="save-btn">
            Save Changes
          </button>

          <button type="button" className="logout-btn" onClick={handleLogout}>
            Log Out
          </button>
        </div>

        {message && <p className="success-message">{message}</p>}
      </form>
    </div>
  );
};

export default Profile;
