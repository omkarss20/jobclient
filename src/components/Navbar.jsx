import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="nav-link">
          Padhega India
        </Link>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Jobs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/applications" className="nav-link">
              Applications
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
