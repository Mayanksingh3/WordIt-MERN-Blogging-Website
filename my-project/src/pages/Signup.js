import React, { useState } from "react";
import axios from "axios";
import "../css/loginCss.css";
import { Link } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitData = (e) => {
    e.preventDefault();
    const newUser = {
      username,
      password,
      email,
    };
    axios
      .post("http://localhost:5000/user/signup", newUser)
      .then((res) => {
        if (res.data.isLogged) {
          sessionStorage.setItem("isLogged", true);
          sessionStorage.setItem("username", username);
          sessionStorage.setItem("id", res.data.id);
          window.location = "/";
        } else {
          setMessage(
            "Some Error Occurred/User with Email Already Present. Try Again!"
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="main">
        <div className="left"></div>
        <div className="right">
          <div className="banner">
            <h2>SignUp</h2>
          </div>
          <form onSubmit={submitData}>
            <div className="form-group">
              <label for="exampleInputEmail1">Username</label>
              <input
                type="text"
                className="form-control"
                required
                id="exampleInputEmail1"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                aria-describedby="emailHelp"
                placeholder="Enter Username"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                required
                id="exampleInputEmail1"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                required
                className="form-control"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <p className="text-danger">{message}</p>
            <div className="d-flex justify-content-end">
              <p>Already have an Account. Login now!</p>
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary mr-3">
                Sign up
              </button>
              <Link to="/login" className="btn btn-outline-primary">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
