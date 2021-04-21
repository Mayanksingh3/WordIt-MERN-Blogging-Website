import React, { useState } from "react";
import axios from "axios";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");

  const submitTheData = (e) => {
    e.preventDefault();
    const newArticle = {
      title,
      paragraph,
    };
    setTitle("");
    setParagraph("");
    axios
      .post("http://localhost:5000/posts/create", newArticle)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mt-4">
      <form onSubmit={submitTheData} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="InputEmail1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="InputPassword1">Content</label>
          <textarea
            value={paragraph}
            className="form-control"
            onChange={(e) => {
              setParagraph(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post Article
        </button>
      </form>
    </div>
  );
}
