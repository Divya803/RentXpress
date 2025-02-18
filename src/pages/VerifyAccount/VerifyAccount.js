import React, { useState } from "react";
import "./VerifyAccount.css";
import Button from "../../components/Button/Button";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const VerifyAccount = () => {
  const [role, setRole] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
      <NavigationBar />
    <div className="verify-container">
      <h2 className="verify-title">Verify Your Account</h2>
      <form className="verify-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" placeholder="First Name" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" placeholder="Last Name" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input type="number" id="age" placeholder="Age" className="form-input" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" placeholder="Phone Number" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="nic">NIC</label>
            <input type="text" id="nic" placeholder="NIC" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select id="role" className="form-input" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="">Select Role</option>
              <option value="driver">Driver</option>
              <option value="vehicle-owner">Vehicle Owner</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" className="form-input" />
          </div>
        </div>

        {/* <div className="upload-container">
          <label htmlFor="file-upload" className="upload-button">
            Upload Profile Picture
          </label>
          <input id="file-upload" type="file" accept=".jpg,.jpeg,.png" onChange={handleFileChange} hidden />
          <p className="upload-info">Max 10MB JPG/JPEG or PNG format</p>
        </div> */}
        <div className="upload-container">
          <input
            id="file-upload"
            type="file"
            accept=".jpg,.jpeg,.png"
            onChange={handleFileChange}
            hidden
          />
          <label htmlFor="file-upload" className="upload-label">
            Upload Identifications
          </label>
          <p className="upload-info">Max 10MB JPG/JPEG or PNG format</p>
        </div>


        <div className="button-container">
          <Button type="submit" value="Submit" style={{ width: "100px" }} />
          <Button type="button" value="Cancel" red style={{ width: "100px" }} />
        </div>
      </form>
    </div>
    </div>
  );
};

export default VerifyAccount;
