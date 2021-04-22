import React, { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

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
          sessionStorage.setItem("usename", username);
          window.location = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <form onSubmit={submitData}>
        <div className="form-group">
          <label for="exampleInputEmail1">Username</label>
          <input
            type="text"
            className="form-control"
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
            className="form-control"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
