import React from "react";
import { Link } from "react-router-dom";
import SignedInLink from "./signedinLink";
import SignedoutLink from "./signedoutLink";
const NavBar = () => {
  return (
    <nav className="nav-wrapper grey darken 3">
      <div className="container title">
        <Link to="/" className="left">
          <h5>Mario Note</h5>
        </Link>
        <SignedoutLink />
        <SignedInLink />
      </div>
    </nav>
  );
};

export default NavBar;
