import React from "react";
// import { Link } from "react-router-dom";

const LoginSignup = () => {
  return (
    <div className="LoginSignup">
      <div className="LoginSignup-form">
        <form className="LoginSignup-form__signin">
          <input type="email" placeholder="Email" autoFocus />
          <input type="password" placeholder="Password" />
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
