import React from "react";

function OtpVerify() {

  return (
    <>
      <div className="logincontainer">
        <div className="logmain">
          <div className="logleft">
            <img src="assets/images/inner-page/login.png" alt="login" />
          </div>
          <div className="optpright">
            <div className="optmain">
              <h4>Sign in</h4>
              <p>
                Sign up or Sign in to access your orders, special offers, health
                tips and more!
              </p>

              <div className="numdisact">
                <h6>PHONE NUMBER</h6>
                <div className="numhubf">
                  <h6>
                    <span>+91 |</span> 9876543210
                  </h6>
                  <h6>Change</h6>
                </div>
              </div>
              <div className="optbox">
                <h6>We have sent 6 digit OTP</h6>
                <div className="optcontainer">
                  <input type="text" minLength="1" maxLength="1" />
                  <input type="text" minLength="1" maxLength="1" />
                  <input type="text" minLength="1" maxLength="1" />
                  <input type="text" minLength="1" maxLength="1" />
                  <input type="text" minLength="1" maxLength="1" />
                  <input type="text" minLength="1" maxLength="1" />
                </div>
                <div className="otptime">
                <h6>Waiting for OTP... 00: Sec</h6>
                <h6>resend OTP</h6>
                </div>
              </div>

              <div className="optverybtn">
                <button type="submit">VERIFY</button>
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

export default OtpVerify;
