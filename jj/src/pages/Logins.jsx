import React from 'react';
import Login from './Authentication/Login';
import NumberLogin from './Authentication/NumberLogin';
import OtpVerify from './Authentication/OtpVerify';
import Register from './Authentication/Register';


const Logins = () => {
  return (
    <>
      <Login />
      <NumberLogin />
      <OtpVerify />
      <Register />
    </>
  )
}

export default Logins