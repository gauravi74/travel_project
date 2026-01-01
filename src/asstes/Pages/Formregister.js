import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function Formregister() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Validate form
    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name required";

        if (!formData.email) newErrors.email = "Email required";
        else if (!/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Invalid email";

        if (!formData.password) newErrors.password = "Password required";
        else if (formData.password.length < 6)
            newErrors.password = "Password must be at least 6 characters";

        if (!formData.confirmPassword)
            newErrors.confirmPassword = "Confirm password required";
        else if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = "Passwords do not match";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Get existing users from localStorage
            const users = JSON.parse(localStorage.getItem("users")) || [];

            // Add new user
            users.push({
                name: formData.name,
                email: formData.email,
                password: formData.password,
            });

            // Save all users
            localStorage.setItem("users", JSON.stringify(users));

            // Navigate to login page or home page
            navigate("/login");
        }
    };



    return (
        <>
            <div style={{ width: "350px", margin: "50px auto", border: "1px solid #ccc", padding: "20px", borderRadius: "8px" }}>
                <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "15px" }}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
                        />
                        {errors.name && <p style={{ color: "red", fontSize: "14px" }}>{errors.name}</p>}
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
                        />
                        {errors.email && <p style={{ color: "red", fontSize: "14px" }}>{errors.email}</p>}
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
                        />
                        {errors.password && <p style={{ color: "red", fontSize: "14px" }}>{errors.password}</p>}
                    </div>

                    <div style={{ marginBottom: "20px" }}>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
                        />
                        {errors.confirmPassword && <p style={{ color: "red", fontSize: "14px" }}>{errors.confirmPassword}</p>}
                    </div>

                    <div className="form-group mb-2 d-flex">
                        <input type="checkbox" className="custom-control-input" id="termsCheck" />
                        <label className="custom-control-label mb-0 ms-1 lh-1" htmlFor="termsCheck">
                            I have read and accept the Terms and Privacy Policy
                        </label>
                    </div>

                    <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                        Register
                    </button>

                    <p className="text-center">
                        Already have an account? <Link to="/login"  className="theme">Login</Link>
                    </p>
                </form>
            </div>


        </>
    )
}

export default Formregister
