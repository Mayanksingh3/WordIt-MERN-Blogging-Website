import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function PostsList(props) {
  const [article, setArticle] = useState([]);

  const deletePost = (id) => {
    axios
      .delete("http://localhost:5000/posts/delete/" + id)
      .then((res) => {
        alert(res.data);
        setArticle(article.filter((elem) => elem._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div href="/about" className="container-fluid m-3">
      <div className="card">
        <div className="card-body">
          <Link to={{ pathname: "/post/" + props.article._id }}>
            <h3 className="card-title">{props.article.title}</h3>
          </Link>
          <h5 className="card-text">{props.article.paragraph}</h5>
          <p>{props.article.createdAt}</p>
          {!props.own ? (
            ""
          ) : (
            <div className="d-flex justify-content-between">
              <Link
                to={{ pathname: "/edit/" + props.article._id }}
                className="btn btn-outline-warning"
                type=""
              >
                Edit Article
              </Link>
              <button
                onClick={() => {
                  deletePost(props.article._id);
                }}
                className="btn btn-outline-danger"
              >
                Delete Article
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
