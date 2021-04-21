import React, { useEffect, useState } from "react";
import axios from "axios";
import PostsList from "../component/PostsList";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [followed, setFollowed] = useState();
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
      <div className="card-header mt-2 mb-3">Featured</div>
      {posts.slice(0, 5).map((post, key) => {
        return <PostsList key={key} article={post} />;
      })}
      <div className="card-header mb-3">Your Following</div>
      {!followed ? <div>None to Show</div> : <div>Showing</div>}
    </div>
  );
}
