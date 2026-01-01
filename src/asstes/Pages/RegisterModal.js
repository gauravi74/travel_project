import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

function RegisterModal() {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });

  const handleRegisterChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    if (registerData.password !== registerData.repassword) {
      alert("Password mismatch");
      return;
    }

    const oldData =
      JSON.parse(localStorage.getItem("registerData")) || [];

    oldData.push(registerData);
    localStorage.setItem("registerData", JSON.stringify(oldData));

    alert("Register data stored");

    setRegisterData({
      name: "",
      email: "",
      password: "",
      repassword: "",
    });
  };

  return (
    <div
      className="modal fade"
      id="registerModal"
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
                    height: "550px",
                  }}
                />
              </div>

              <div className="col-lg-7">
                <h4 className="text-center border-b pb-2">Register</h4>

                <div className="d-flex mb-3">
                  <button className="btn btn-facebook w-100 me-2">
                    <FaFacebook /> Register with Facebook
                  </button>
                  <button className="btn btn-google w-100">
                    <FaGoogle /> Register with Google
                  </button>
                </div>

                <form onSubmit={handleRegisterSubmit}>
                  <input
                    type="text"
                    name="name"
                    className="form-control mb-2"
                    placeholder="Username"
                    onChange={handleRegisterChange}
                    value={registerData.name}
                  />

                  <input
                    type="email"
                    name="email"
                    className="form-control mb-2"
                    placeholder="Email"
                    onChange={handleRegisterChange}
                    value={registerData.email}
                  />

                  <input
                    type="password"
                    name="password"
                    className="form-control mb-2"
                    placeholder="Password"
                    onChange={handleRegisterChange}
                    value={registerData.password}
                  />

                  <input
                    type="password"
                    name="repassword"
                    className="form-control mb-2"
                    placeholder="Re-enter Password"
                    onChange={handleRegisterChange}
                    value={registerData.repassword}
                  />

                  <button className="nir-btn w-100" type="submit">
                    Register
                  </button>

                  <p className="text-center mt-2">
                    Already have an account?{" "}
                    <button
                      type="button"
                      className="btn btn-link theme"
                      data-bs-dismiss="modal"
                      data-bs-toggle="modal"
                      data-bs-target="#loginModal"
                    >
                      Login
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

export default RegisterModal;
