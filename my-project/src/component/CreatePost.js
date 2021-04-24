import React, { useState } from "react";
import axios from "axios";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [message, setMessage] = useState("");

  const submitTheData = (e) => {
    e.preventDefault();
    const newArticle = {
      title: title,
      paragraph: paragraph,
      email: sessionStorage.getItem("id"),
      author: sessionStorage.getItem("username"),
    };
    setTitle("");
    setParagraph("");
    axios
      .post("http://localhost:5000/posts/create", newArticle)
      .then((res) => {
        console.log(res.data);
        setMessage("Article Added Successfully");
      })
      .catch((err) => {
        console.log(err);
        setMessage("Some Error Occured. Try Again");
      });
  };

  return (
    <div className="container card p-3 mt-4">
      <div>
        <h2>Create an Article</h2>
      </div>
      <form onSubmit={submitTheData} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="InputEmail1">Title</label>
          <input
            type="text"
            required
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
            required
            onChange={(e) => {
              setParagraph(e.target.value);
            }}
          />
        </div>
        {message ? (
          <h3 className="text-danger">{message}</h3>
        ) : (
          <button type="submit" className="btn btn-primary">
            Post Article
          </button>
        )}
      </form>
    </div>
  );
}
