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
    <div className="container card">
      {!title && !paragraph && !date ? (
        <div className="spinner-parent">
          <img className="spinner" src={spinner} alt="Loading..." />
        </div>
      ) : (
        <div className="card mt-3 p-2">
          <h1 className="card-title">{title}</h1>
          <p>{paragraph}</p>
          <h5>{author}</h5>
          <p>{date}</p>
          <Link type="" className="btn btn-primary mb-3" to="/">
            Back to Home
          </Link>
          <div>
            <div>
              <h3>Comments : </h3>
              {comments.map((comment, key) => {
                return (
                  <div className="d-flex">
                    <h5>{comment.author} : </h5>
                    <p> {comment.comment}</p>
                  </div>
                );
              })}
            </div>
            {!sessionStorage.getItem("isLogged") ? (
              <div className="d-flex justify-content-center pb-3">
                Login to Comment
              </div>
            ) : (
              <form onSubmit={commentAdd}>
                <input
                  className="form-control"
                  value={message}
                  required
                  placeholder="Add Comment ..."
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
                <button className="btn btn-primary mt-2" type="submit">
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
