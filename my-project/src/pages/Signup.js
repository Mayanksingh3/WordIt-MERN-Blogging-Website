import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div>
      SignUp for the Website
      <Link to="/signup" className="btn btn-primary">
        SignUp
      </Link>
    </div>
  );
}
