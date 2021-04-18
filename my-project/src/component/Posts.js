import React from "react";

export default function Posts(props) {
  return (
    <div href="/about" className="container">
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">{props.article.title}</h3>
          <h5 class="card-text">{props.article.paragraph}</h5>
          <p>{props.article.createdAt}</p>
        </div>
      </div>
    </div>
  );
}
