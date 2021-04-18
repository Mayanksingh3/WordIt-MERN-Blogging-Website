import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      Login into the website
      <Link to="/signup" className="btn btn-primary">
        SignUp
      </Link>
    </div>
  );
}
