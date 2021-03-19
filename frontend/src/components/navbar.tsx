import React from "react";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="navbar__logo"></Link>

      <div className="navbar__links">
        <Link className="navbar__link" to="/about">
          About Us
        </Link>
        <Link className="navbar__link" to="/explore">
          Explore
        </Link>
        {/* <Link className="navbar__link navbar__login-signup" to="/login-signup">
          Log in / Sign Up
        </Link> */}
        <Link to="/login-signup">
          <button className="navbar__login-signup">
            Login <br /> Signup
          </button>
        </Link>
      </div>
    </div>
  );
}

export default navbar;
