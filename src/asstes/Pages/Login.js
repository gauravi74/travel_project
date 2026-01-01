import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../App.css';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

function Login() {
    // function Login() {

    // const [loginData, setLoginData] = useState({
    //     user_name: "",
    //     password_name: ""
    // });

    // const [registerData, setRegisterData] = useState({
    //     name: "",
    //     email: "",
    //     password: "",
    //     repassword: ""
    // });



    const [loginData, setLoginData] = useState({ user_name: "", password_name: "" });
    const [loginErrors, setLoginErrors] = useState({});

    const [registerData, setRegisterData] = useState({ name: "", email: "", password: "", repassword: "" });
    const [registerErrors, setRegisterErrors] = useState({});
    const [termsChecked, setTermsChecked] = useState(false);
    
    const handleLoginChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const validateLogin = () => {
        const errors = {};
        if (!loginData.user_name.trim()) errors.user_name = "Username or Email is required";
        if (!loginData.password_name) errors.password_name = "Password is required";
        setLoginErrors(errors);
        return Object.keys(errors).length === 0;
    };


    const handleLoginSubmit = (e) => {
        e.preventDefault();
    
        // 🔥 get old login records (array)
        const oldLoginData = JSON.parse(localStorage.getItem("loginData")) || [];
    
        // 🔥 push new record
        oldLoginData.push(loginData);
    
        // 🔥 save back array
        localStorage.setItem("loginData", JSON.stringify(oldLoginData));
    
        alert("Login data stored");
    
        // clear form
        setLoginData({
            user_name: "",
            password_name: ""
        });
    };
    



    const handleRegisterChange = (e) => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value
        });
    };

    const validateRegister = () => {
        const errors = {};
        if (!registerData.name.trim()) errors.name = "Name is required";
        if (!registerData.email.trim()) errors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registerData.email)) errors.email = "Invalid email address";
        if (!registerData.password) errors.password = "Password is required";
        else if (registerData.password.length < 6) errors.password = "Password must be at least 6 characters";
        if (registerData.password !== registerData.repassword) errors.repassword = "Passwords do not match";
        if (!termsChecked) errors.terms = "You must accept the Terms and Privacy Policy";

        setRegisterErrors(errors);
        return Object.keys(errors).length === 0;
    };
    
    const handleRegisterSubmit = (e) => {
        e.preventDefault();

        if (registerData.password !== registerData.repassword) {
            alert("Password mismatch");
            return;
        }

        const oldData = JSON.parse(localStorage.getItem("registerData")) || [];
        oldData.push(registerData);

        localStorage.setItem("registerData", JSON.stringify(oldData));
        alert("Register data stored");

        // 🔥 clear form
        setRegisterData({
            name: "",
            email: "",
            password: "",
            repassword: ""
        });
    };





    return (
        <>
            <div
                className="modal fade log-reg"
                id="exampleModal"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="post-tabs">
                                {/* Tab navs */}
                                <ul className="nav nav-tabs nav-pills nav-fill" id="postsTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active"
                                            id="login-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#login"
                                            type="button"
                                            role="tab"
                                            aria-controls="login"
                                            aria-selected="true"
                                        >
                                            Login
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="register-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#register"
                                            type="button"
                                            role="tab"
                                            aria-controls="register"
                                            aria-selected="false"
                                        >
                                            Register
                                        </button>
                                    </li>
                                </ul>

                                {/* Tab contents */}
                                <div className="tab-content blog-full" id="postsTabContent">
                                    {/* Login Tab */}
                                    <div
                                        className="tab-pane fade show active"
                                        id="login"
                                        role="tabpanel"
                                        aria-labelledby="login-tab"
                                    >
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <div className="blog-image rounded">
                                                    <a
                                                        href="#"
                                                        style={{ backgroundImage: `url(${require('../image/trending5.jpg')})`, height: '450px' }}
                                                    ></a>
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <h4 className="text-center border-b pb-2">Login</h4>
                                                <div className="log-reg-button d-flex align-items-center justify-content-between mb-3">
                                                    <button type="button" className="btn btn-facebook w-100 me-2"><FaFacebook size={20}/>
                                                        Login with Facebook
                                                    </button>
                                                    <button type="button" className="btn btn-google w-100"><FaGoogle size={20} />
                                                        Login with Google
                                                    </button>

                                                </div>
                                                <hr className="log-reg-hr position-relative my-4 overflow-visible" />
                                                <form id="loginForm" onSubmit={handleLoginSubmit}>
                                                    <div className="form-group mb-2">
                                                        <input
                                                            type="text"
                                                            name="user_name"
                                                            className="form-control"
                                                            placeholder="User Name or Email Address"
                                                            onChange={handleLoginChange}
                                                            value={loginData.user_name}
                                                        />
                                                    </div>
                                                    <div className="form-group mb-2">
                                                        <input
                                                            type="password"
                                                            name="password_name"
                                                            className="form-control"
                                                            placeholder="Password"
                                                            onChange={handleLoginChange}
                                                            value={loginData.password_name}
                                                        />
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
                                    <div
                                        className="tab-pane fade"
                                        id="register"
                                        role="tabpanel"
                                        aria-labelledby="register-tab"
                                    >
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <div className="blog-image rounded">
                                                    <Link
                                                        to="#"
                                                        style={{ backgroundImage: `url(${require('../image/trending5.jpg')})`, height: '550px' }}
                                                    ></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <h4 className="text-center border-b pb-2">Register</h4>
                                                <div className="log-reg-button d-flex align-items-center justify-content-between mb-3">
                                                    <button type="button" className="btn btn-facebook w-100 me-2"><FaFacebook size={20}/>
                                                        Register with Facebook
                                                    </button>
                                                    <button type="button" className="btn btn-google w-100"><FaGoogle size={20} />
                                                        Register with Google
                                                    </button>
                                                </div>
                                                <hr className="log-reg-hr position-relative my-4 overflow-visible" />
                                                <form id="registerForm" onSubmit={handleRegisterSubmit}>
                                                    <div className="form-group mb-2">
                                                        <input type="text" name="name" className="form-control" placeholder="User Name" onChange={handleRegisterChange} value={registerData.name}/>
                                                    </div>
                                                    <div className="form-group mb-2">
                                                        <input type="email" name="email" className="form-control" placeholder="Email Address" onChange={handleRegisterChange} value={registerData.email}/>
                                                    </div>
                                                    <div className="form-group mb-2">
                                                        <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleRegisterChange} value={registerData.password}/>
                                                    </div>
                                                    <div className="form-group mb-2">
                                                        <input type="password" name="repassword" className="form-control" placeholder="Re-enter Password" onChange={handleRegisterChange} value={registerData.repassword} />
                                                    </div>
                                                    <div className="form-group mb-2 d-flex">
                                                        <input type="checkbox" className="custom-control-input" id="termsCheck" />
                                                        <label className="custom-control-label mb-0 ms-1 lh-1" htmlFor="termsCheck">
                                                            I have read and accept the Terms and Privacy Policy
                                                        </label>
                                                    </div>
                                                    <div className="comment-btn mb-2 pb-2 text-center border-b">
                                                        <input type="submit" className="nir-btn w-100" value="Register" />
                                                    </div>
                                                    <p className="text-center">
                                                        Already have an account? <Link to="#" data-bs-toggle="tab" data-bs-target="#login" className="theme">Login</Link>
                                                    </p>
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
