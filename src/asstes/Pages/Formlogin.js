import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import "./Formlogin.css";

function Formlogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate inputs
  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";

    if (!formData.password) newErrors.password = "Password required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginError("");

    if (validate()) {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      // Check if user exists
      const user = users.find(
        (u) => u.email === formData.email && u.password === formData.password
      );

      if (user) {
        // Save logged-in user info (optional)
        localStorage.setItem("loggedInUser", JSON.stringify(user));

        // Navigate to home page
        navigate("/");
      } else {
        // User not registered
        setLoginError("User not registered or invalid credentials");
        // Optional: Redirect to register page after 2 sec
        setTimeout(() => {
          navigate("/register");
        }, 2000);
      }
    }
  };
  return (
    <div className="login-box">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <p className="error-text">{errors.email}</p>
        )}

        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <p className="error-text">{errors.password}</p>
        )}

        <div className="form-group mb-2 d-flex justify-content-between">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <Link href="#" className="theme">Lost your password?</Link>
        </div>
        <button type="submit" className="nir-btn w-100">
          Login
        </button>
        <p className="text-center">
          Don't have an account? <Link to="/register" className="theme">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Formlogin;
