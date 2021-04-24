import React, { useEffect, useState } from "react";
import axios from "axios";
import PostsList from "../component/PostsList";
import spinner from "../assets/spinner.gif";
import "../css/homeStyle.css";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [ownPost, setOwnPost] = useState([]);
  const [count, setCount] = useState(2);
  const [count2, setCount2] = useState(2);
  useEffect(() => {
    axios
      .get("http://localhost:5000/posts")
      .then((res) => {
        setPosts(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
    if (sessionStorage.getItem("isLogged")) {
      axios
        .get("http://localhost:5000/posts/own/" + sessionStorage.getItem("id"))
        .then((res) => {
          setOwnPost(res.data.reverse());
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
  return (
    <div className="container card">
      <div className="card-header mt-2 mb-3">Latest Posts</div>
      {!posts.length ? (
        <div className="spinner-parent">
          <img className="img-fluid spinner" src={spinner} alt="Loading..." />
        </div>
      ) : (
        posts.slice(0, count).map((post, key) => {
          return <PostsList own={false} key={key} article={post} />;
        })
      )}
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary mt-3 mb-3"
          onClick={() => {
            setCount(count + 3);
          }}
        >
          Show More
        </button>
      </div>
      <div className="card-header mb-3">Your Posts</div>
      {!ownPost.length ? (
        <div className="d-flex justify-content-center pb-3">None to Show</div>
      ) : (
        ownPost.slice(0, count2).map((post, key) => {
          return <PostsList own={true} key={key} article={post} />;
        })
      )}
      {!ownPost.length ? (
        ""
      ) : (
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary mt-3 mb-3"
            onClick={() => {
              setCount2(count2 + 3);
            }}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}
