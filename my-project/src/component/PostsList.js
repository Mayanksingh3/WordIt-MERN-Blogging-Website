import React from "react";

export default function PostsList(props) {
  return (
    <div href="/about" className="container-fluid m-3">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{props.article.title}</h3>
          <h5 className="card-text">{props.article.paragraph}</h5>
          <p>{props.article.createdAt}</p>
        </div>
      </div>
    </div>
  );
}
