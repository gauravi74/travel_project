import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../App.css';
import { FaFacebook, FaGoogle } from "react-icons/fa";

function Login() {
    const navigate = useNavigate();

    // State for login
    const [loginData, setLoginData] = useState({ user_name: "", password_name: "" });
    const [loginErrors, setLoginErrors] = useState({});

    // State for register
    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: "",
        repassword: "",
        termsAccepted: false
    });
    const [registerErrors, setRegisterErrors] = useState({});

    // Handle input change
    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
        setLoginErrors({ ...loginErrors, [e.target.name]: "" });
    };
    const handleRegisterChange = (e) => {
        const { name, value, type, checked } = e.target;
        setRegisterData({ ...registerData, [name]: type === "checkbox" ? checked : value });
        setRegisterErrors({ ...registerErrors, [name]: "" });
    };

    // Validation helpers
    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
    const validateLogin = () => {
        let errors = {};
        if (!loginData.user_name.trim()) errors.user_name = "Username or email is required";
        if (!loginData.password_name) errors.password_name = "Password is required";
        return errors;
    };
    const validateRegister = () => {
        let errors = {};
        if (!registerData.name.trim()) errors.name = "Name is required";
        if (!registerData.email.trim()) errors.email = "Email is required";
        else if (!validateEmail(registerData.email)) errors.email = "Invalid email address";
        if (!registerData.password) errors.password = "Password is required";
        if (!registerData.repassword) errors.repassword = "Please re-enter password";
        else if (registerData.password !== registerData.repassword) errors.repassword = "Passwords do not match";
        if (!registerData.termsAccepted) errors.termsAccepted = "You must accept terms and privacy policy";
        return errors;
    };

    // Switch tab to register
    const switchToRegisterTab = () => {
        const registerTabButton = document.getElementById("register-tab");
        if (registerTabButton) registerTabButton.click(); // trigger bootstrap tab switch
    };

    // Handle login submit
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const errors = validateLogin();
        if (Object.keys(errors).length > 0) {
            setLoginErrors(errors);
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = users.find(
            (user) =>
                (user.name === loginData.user_name || user.email === loginData.user_name) &&
                user.password === loginData.password_name
        );

        if (userExists) {
            // User exists -> login
            localStorage.setItem("currentUser", JSON.stringify(userExists));
            navigate("/"); // Navigate to home page
        } else {
            // User not registered -> navigate to register tab
            switchToRegisterTab();
        }
    };

    // Handle register submit
    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        const errors = validateRegister();
        if (Object.keys(errors).length > 0) {
            setRegisterErrors(errors);
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = users.find((user) => user.email === registerData.email);
        if (userExists) {
            setRegisterErrors({ email: "User with this email already exists" });
            return;
        }

        const newUser = {
            name: registerData.name,
            email: registerData.email,
            password: registerData.password
        };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successful!");
        setRegisterData({
            name: "",
            email: "",
            password: "",
            repassword: "",
            termsAccepted: false
        });

        // Automatically switch to login tab after successful registration
        const loginTabButton = document.getElementById("login-tab");
        if (loginTabButton) loginTabButton.click();
    };

    return (
        <>
            <div className="modal fade log-reg" id="exampleModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="post-tabs">
                                <ul className="nav nav-tabs nav-pills nav-fill" id="postsTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="login-tab" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab" aria-controls="login" aria-selected="true">Login</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="register-tab" data-bs-toggle="tab" data-bs-target="#register" type="button" role="tab" aria-controls="register" aria-selected="false">Register</button>
                                    </li>
                                </ul>

                                <div className="tab-content blog-full" id="postsTabContent">
                                    {/* Login Tab */}
                                    <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <div className="blog-image rounded">
                                                    <a href="#" style={{ backgroundImage: `url(${require('../image/trending5.jpg')})`, height: '450px' }}></a>
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <h4 className="text-center border-b pb-2">Login</h4>
                                                <div className="log-reg-button d-flex align-items-center justify-content-between mb-3">
                                                    <button type="button" className="btn btn-facebook w-100 me-2"><FaFacebook size={20} />
                                                        Register with Facebook
                                                    </button>
                                                    <button type="button" className="btn btn-google w-100"><FaGoogle size={20} />
                                                        Register with Google
                                                    </button>
                                                </div>
                                                <hr className="log-reg-hr position-relative my-4 overflow-visible" />
                                                <form id="loginForm" onSubmit={handleLoginSubmit}>
                                                    {loginErrors.general && <p className="text-danger">{loginErrors.general}</p>}
                                                    <div className="form-group mb-2">
                                                        <input
                                                            type="text"
                                                            name="user_name"
                                                            className="form-control"
                                                            placeholder="User Name or Email Address"
                                                            value={loginData.user_name}
                                                            onChange={handleLoginChange}
                                                        />
                                                        {loginErrors.user_name && <small className="text-danger">{loginErrors.user_name}</small>}
                                                    </div>
                                                    <div className="form-group mb-2">
                                                        <input
                                                            type="password"
                                                            name="password_name"
                                                            className="form-control"
                                                            placeholder="Password"
                                                            value={loginData.password_name}
                                                            onChange={handleLoginChange}
                                                        />
                                                        {loginErrors.password_name && <small className="text-danger">{loginErrors.password_name}</small>}
                                                    </div>
                                                    <div className="form-group mb-2 d-flex justify-content-between">
                                                        <label>
                                                            <input type="checkbox" /> Remember me
                                                        </label>
                                                        <Link href="#">Lost your password?</Link>
                                                    </div>

                                                    <div className="comment-btn mb-2 pb-2 text-center border-b">
                                                        <input type="submit" className="nir-btn w-100" value="Login" />
                                                    </div>
                                                    <p className="text-center">
                                                        Don't have an account? <Link to="#" data-bs-toggle="tab" data-bs-target="#register" className="theme">Register</Link>
                                                    </p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Register Tab */}
                                    <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <div className="blog-image rounded">
                                                    <Link to="#" style={{ backgroundImage: `url(${require('../image/trending5.jpg')})`, height: '550px' }}></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <h4 className="text-center border-b pb-2">Register</h4>
                                                <div className="log-reg-button d-flex align-items-center justify-content-between mb-3">
                                                    <button type="button" className="btn btn-facebook w-100 me-2"><FaFacebook size={20} />
                                                        Register with Facebook
                                                    </button>
                                                    <button type="button" className="btn btn-google w-100"><FaGoogle size={20} />
                                                        Register with Google
                                                    </button>
                                                </div>
                                                <hr className="log-reg-hr position-relative my-4 overflow-visible" />
                                                <form id="registerForm" onSubmit={handleRegisterSubmit}>
                                                    <div className="form-group mb-2">
                                                        <input type="text" name="name" className="form-control" placeholder="User Name" value={registerData.name} onChange={handleRegisterChange} />
                                                        {registerErrors.name && <small className="text-danger">{registerErrors.name}</small>}
                                                    </div>
                                                    <div className="form-group mb-2">
                                                        <input type="email" name="email" className="form-control" placeholder="Email Address" value={registerData.email} onChange={handleRegisterChange} />
                                                        {registerErrors.email && <small className="text-danger">{registerErrors.email}</small>}
                                                    </div>
                                                    <div className="form-group mb-2">
                                                        <input type="password" name="password" className="form-control" placeholder="Password" value={registerData.password} onChange={handleRegisterChange} />
                                                        {registerErrors.password && <small className="text-danger">{registerErrors.password}</small>}
                                                    </div>
                                                    <div className="form-group mb-2">
                                                        <input type="password" name="repassword" className="form-control" placeholder="Re-enter Password" value={registerData.repassword} onChange={handleRegisterChange} />
                                                        {registerErrors.repassword && <small className="text-danger">{registerErrors.repassword}</small>}
                                                    </div>
                                                    <div className="form-group mb-2 d-flex">
                                                        <input type="checkbox" id="termsCheck" name="termsAccepted" checked={registerData.termsAccepted} onChange={handleRegisterChange} />
                                                        <label htmlFor="termsCheck">I accept the Terms and Privacy Policy</label>
                                                    </div>
                                                    {registerErrors.termsAccepted && <small className="text-danger">{registerErrors.termsAccepted}</small>}
                                                    <div className="comment-btn mb-2 pb-2 text-center border-b">
                                                        <input type="submit" className="nir-btn w-100" value="Register" />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
