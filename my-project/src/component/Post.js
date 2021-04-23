import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import spinner from "../assets/spinner.gif";
import "../css/homeStyle.css";
import { Link } from "react-router-dom";

export default function Post() {
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [date, setDate] = useState("");
  const [postId, setPostId] = useState("");
  const [author, setAuthor] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:5000/posts/" + id)
      .then((res) => {
        setTitle(res.data.title);
        setParagraph(res.data.paragraph);
        setDate(res.data.createdAt);
        setPostId(res.data._id);
        setComments(res.data.comment);
        setAuthor(res.data.author);
        setCommentAuthor(sessionStorage.getItem("username"));
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const commentAdd = (e) => {
    e.preventDefault();
    setCommentAuthor(sessionStorage.getItem("username"));
    alert("Comment Added by " + commentAuthor);
    const sendComment = { comment: message, author: commentAuthor };
    axios
      .put("http://localhost:5000/posts/comment-add/" + postId, sendComment)
      .then(() => {
        setMessage("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <p>{author}</p>
          <Link type="" className="btn btn-primary" to="/">
            Back to Home
          </Link>
          <div>
            <div>
              {comments.map((comment, key) => {
                return (
                  <div>
                    <h2>{comment.comment}</h2>
                    <p>{comment.author}</p>
                  </div>
                );
              })}
            </div>
            {!sessionStorage.getItem("isLogged") ? (
              <div className="container">Login to Comment</div>
            ) : (
              <form onSubmit={commentAdd}>
                <input
                  className="form-control"
                  value={message}
                  required
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
                <button className="btn btn-primary" type="submit">
                  Comment
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
