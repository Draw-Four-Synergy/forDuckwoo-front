import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to="/main" className="navbar-title">
        TIME.zip
      </Link>
    </div>
  );
};

export default Navbar;
