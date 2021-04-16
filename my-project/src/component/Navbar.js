import React from "react";
// import { Link } from "react-router-dom";
import "../css/navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link" exact>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link" exact>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link" exact>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
