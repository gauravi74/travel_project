import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";

function LoginModal() {
  const [loginData, setLoginData] = useState({
    user_name: "",
    password_name: "",
  });

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const oldLoginData =
      JSON.parse(localStorage.getItem("loginData")) || [];

    oldLoginData.push(loginData);
    localStorage.setItem("loginData", JSON.stringify(oldLoginData));

    alert("Login data stored");

    setLoginData({
      user_name: "",
      password_name: "",
    });
  };

  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="row">
              <div className="col-lg-5">
                <div
                  className="blog-image rounded"
                  style={{
                    backgroundImage: `url(${require("../image/trending5.jpg")})`,
                    height: "450px",
                  }}
                />
              </div>

              <div className="col-lg-7">
                <h4 className="text-center border-b pb-2">Login</h4>

                <div className="d-flex mb-3">
                  <button className="btn btn-facebook w-100 me-2">
                    <FaFacebook /> Login with Facebook
                  </button>
                  <button className="btn btn-google w-100">
                    <FaGoogle /> Login with Google
                  </button>
                </div>

                <form onSubmit={handleLoginSubmit}>
                  <input
                    type="text"
                    name="user_name"
                    className="form-control mb-2"
                    placeholder="Username or Email"
                    value={loginData.user_name}
                    onChange={handleLoginChange}
                  />

                  <input
                    type="password"
                    name="password_name"
                    className="form-control mb-2"
                    placeholder="Password"
                    value={loginData.password_name}
                    onChange={handleLoginChange}
                  />

                  <div className="d-flex justify-content-between mb-2">
                    <label>
                      <input type="checkbox" /> Remember me
                    </label>
                    <Link to="#">Lost password?</Link>
                  </div>

                  <button className="nir-btn w-100" type="submit">
                    Login
                  </button>

                  <p className="text-center mt-2">
                    Don’t have an account?{" "}
                    <button
                      type="button"
                      className="btn btn-link theme"
                      data-bs-dismiss="modal"
                      data-bs-toggle="modal"
                      data-bs-target="#registerModal"
                    >
                      Register
                    </button>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
