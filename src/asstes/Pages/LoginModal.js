import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
// import './LoginModal.css'; // custom CSS

function LoginModal({ show, onClose }) {
  const [loginData, setLoginData] = useState({ user_name: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!loginData.user_name || !loginData.password) {
      setError("Username/email and password are required");
      return;
    }

    const users = JSON.parse(localStorage.getItem("registerData")) || [];
    const userFound = users.find(
      (user) =>
        (user.email === loginData.user_name || user.name === loginData.user_name) &&
        user.password === loginData.password
    );

    if (userFound) {
      alert("Login successful ✅");
      setLoginData({ user_name: "", password: "" });
      onClose(); // close modal
    } else {
      setError("Invalid credentials or user not registered");
    }
  };

  if (!show) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2 className="modal-title">Login</h2>

        <div className="social-buttons">
          <button className="btn-facebook"><FaFacebook /> Login with Facebook</button>
          <button className="btn-google"><FaGoogle /> Login with Google</button>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            name="user_name"
            placeholder="Username or Email"
            value={loginData.user_name}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleChange}
          />

          <div className="remember-me">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          {error && <p className="error-msg">{error}</p>}

          <button type="submit" className="btn-login">Login</button>
        </form>

        <p className="switch-text">
          Don't have an account? <a href="#">Register</a>
        </p>
      </div>
    </div>
  );
}

export default LoginModal;
