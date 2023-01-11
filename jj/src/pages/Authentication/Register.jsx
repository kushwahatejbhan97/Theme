import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="logincontainer">
        <div className="logmain">
          <div className="logleft">
            <img src="assets/images/inner-page/login.png" alt="login" />
          </div>
          <div className="logright">
            <div className="loginputdiv">
              <h3>Sign Up</h3>
              <p>
                Sign up to access your orders, special offers, health tips and
                more!
              </p>
              <div className="inpuscontainerlog">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="inpuscontainerlog">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="inpuscontainerlog">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your Password"
                />
              </div>
              <div className="inpuscontainerlog">
                <label>Phone Number</label>
                <input
                  type="number"
                  placeholder="Enter your phone number"
                  
                />
              </div>
              <div className="logbutton">
                <button type="submit">
                  SIGN UP
                </button>
              </div>
              <div className="butactv">
                <Link to="/login" className="text-decoration-none">
                  <h6><b>login with number</b></h6>
                </Link>
                <Link to="/login" className="text-decoration-none">
                  <h6><b>login with Password</b></h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="logters">
          <p>
            By continuing you agree to our <span>Terms of service </span> and
            <span> Privacy & Legal Policy.</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
