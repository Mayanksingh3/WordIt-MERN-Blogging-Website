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
          {sessionStorage.getItem("isLogged") ? (
            <div className="d-flex align-items-center">
              <div className="mr-3">
                Welcome! {sessionStorage.getItem("username")}
              </div>
              <Link className="btn btn-light mr-3" to="/create">
                + Add Article
              </Link>
              <Link
                className="btn btn-danger"
                onClick={() => {
                  sessionStorage.removeItem("isLogged");
                  sessionStorage.removeItem("username");
                  sessionStorage.removeItem("id");
                  window.location = "/";
                }}
              >
                Logout
              </Link>
            </div>
          ) : (
            <Link className="btn btn-secondary" to="/login">
              Login/SignUp
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
