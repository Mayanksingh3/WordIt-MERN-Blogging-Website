import React, { useEffect, useState } from "react";
import axios from "axios";
import PostsList from "../component/PostsList";
import spinner from "../assets/spinner.gif";
import "../css/homeStyle.css";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [followed, setFollowed] = useState();
  const [count, setCount] = useState(2);
  useEffect(() => {
    axios
      .get("http://localhost:5000/posts")
      .then((res) => {
        setPosts(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="container">
      <div className="card-header mt-2 mb-3">Latest Posts</div>
      {!posts.length ? (
        <div className="spinner-parent">
          <img className="img-fluid spinner" src={spinner} alt="Loading..." />
        </div>
      ) : (
        posts.slice(0, count).map((post, key) => {
          return <PostsList key={key} article={post} />;
        })
      )}
      <button
        className="btn btn-primary mt-3 mb-3"
        onClick={() => {
          setCount(count + 3);
        }}
      >
        Show More
      </button>
      <div className="card-header mb-3">Your Posts</div>
      {!followed ? <div>None to Show</div> : <div>Showing</div>}
    </div>
  );
}
