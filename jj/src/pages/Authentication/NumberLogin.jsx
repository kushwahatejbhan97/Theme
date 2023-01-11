import React, { useState } from "react";
import { Link } from "react-router-dom";

function NumberLogin() {
  return (
    <>
      <div className="logincontainer">
        <div className="logmain">
          <div className="logleft">
            <img src="assets/images/inner-page/login.png" alt="login" />
          </div>
          <div className="logright">
            <div className="loginputdiv">
              <h3>Sign In</h3>
              <p>
                Sign up or Sign in to access your orders, special offers, health
                tips and more!
              </p>
              <div className="inpuscontainerlog">
                <label>Phone Number</label>

                <div className="numberenter">
                  <label>+91 |</label>
                  <input
                    type="text"
                    placeholder="Enter your Number"
                   
                  />
                </div>
              </div>
              <div className="logbutton">
                <button type="submit">
                  USE OTP
                </button>
              </div>
              <div className="mt-2">
                <Link className="text-decoration-none text-dark">
                <h6><b>Login with password</b></h6>
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

export default NumberLogin;
