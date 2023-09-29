// RegistrationPage.js
import React, { useState } from 'react';
import './registration.css'; // Import the registration.css file

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    mobileNumber: '',
    firstName: '',
    lastName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="registration-container">
      <h2 className="registration-heading">Registration</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="registration-input">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="registration-input">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="registration-input">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="text"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
        </div>
        <div className="registration-input">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="registration-input">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="registration-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
