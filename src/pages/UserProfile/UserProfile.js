import React, { useState } from "react";
import "./UserProfile.css";
import { FaUser } from "react-icons/fa";
import Button from "../../components/Button/Button";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const UserProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "Jhone",
    lastName: "Male",
    email: "jhone.sm@gmail.com",
    phone: "+94777123456",
    password: "3333333",
    role: "User",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <NavigationBar />
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-icon">
          <FaUser size={60} />
        </div>
        <div className="profile-fields">
          <div className="input-container">
            <div>
              <label>First Name</label>
              <input 
                type="text" 
                name="firstName" 
                value={formData.firstName} 
                onChange={handleChange} 
              />
            </div>
            <div>
              <label>Last Name</label>
              <input 
                type="text" 
                name="lastName" 
                value={formData.lastName} 
                onChange={handleChange} 
              />
            </div>
          </div>
          <div className="input-container">
            <div>
              <label>Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
              />
            </div>
            <div>
              <label>Phone No</label>
              <input 
                type="text" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
              />
            </div>
          </div>
          <div className="input-container">
            <div>
              <label>Password</label>
              <input 
                type="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
              />
            </div>
            <div>
              <label>Role</label>
              <input 
                type="text" 
                name="role" 
                value={formData.role} 
                onChange={handleChange} 
              />
            </div>
          </div>
        </div>
        <Button value="Delete Account" red style={{ width: "200px", marginLeft:"-80%", marginTop:"25px" }}/>
      </div>
    </div>
    </div>  );
};

export default UserProfile;
