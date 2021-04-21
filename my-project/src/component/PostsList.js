import React from "react";
import { Link } from "react-router-dom";

export default function PostsList(props) {
  return (
    <div href="/about" className="container-fluid m-3">
      <div className="card">
        <div className="card-body">
          <Link to={{ pathname: "/post/" + props.article._id }}>
            <h3 className="card-title">{props.article.title}</h3>
          </Link>
          <h5 className="card-text">{props.article.paragraph}</h5>
          <p>{props.article.createdAt}</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-warning" type="">
              Edit Article
            </button>
            <button className="btn btn-outline-danger" type="">
              Delete Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
