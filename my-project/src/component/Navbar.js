import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import "../css/navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" exact>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" exact>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" exact>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/docs" className="nav-link" exact>
                Docs
              </Link>
            </li>
          </ul>
          <Link className="btn btn-secondary" to="/create">
            Login/SignUp
          </Link>
        </div>
      </nav>
    </div>
  );
}
