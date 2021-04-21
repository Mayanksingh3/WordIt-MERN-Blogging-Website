import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import spinner from "../assets/spinner.gif";
import "../css/homeStyle.css";

export default function Post() {
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [date, setDate] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:5000/posts/" + id)
      .then((res) => {
        setTitle(res.data.title);
        setParagraph(res.data.paragraph);
        setDate(res.data.createdAt);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="container">
      {!title && !paragraph && !date ? (
        <div className="spinner-parent">
          <img className="spinner" src={spinner} alt="Loading..." />
        </div>
      ) : (
        <div>
          <h1>{title}</h1>
          <h3>{paragraph}</h3>
          <p>{date}</p>
        </div>
      )}
    </div>
  );
}
