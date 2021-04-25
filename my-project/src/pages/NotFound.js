import React from "react";
import s404 from "../assets/not.jpg";
import { Link } from "react-router-dom";
import "../css/NotFound.css";

export default function NotFound() {
  return (
    <div className="conatainer-fluid not">
      <div className="body-not">
        <img src={s404} alt="" />
      </div>
      <div className="body-not">
        <h2>404 ERROR. PAGE NOT FOUND</h2>
      </div>

      <div className="body-not">
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
