import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/loginCss.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const loginCheck = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:5000/user/signin", user)
      .then((res) => {
        if (res.data.isLogged) {
          sessionStorage.setItem("isLogged", res.data.isLogged);
          sessionStorage.setItem("username", res.data.username);
          sessionStorage.setItem("id", res.data.id);
          console.log(res.data.isLogged);
          window.location = "/";
        } else {
          setMessage("User Email/Password is Incorrect. Try Again!");
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
            <h2>Login</h2>
          </div>
          <form className="container" onSubmit={loginCheck}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                required
                className="form-control"
                id="exampleInputEmail1"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
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
            <p className="d-flex justify-content-end">
              Don't have an account. Signup now!
            </p>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary mr-3">
                Login
              </button>
              <Link to="/signup" className="btn btn-outline-primary">
                SignUp
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
