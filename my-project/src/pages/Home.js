import React, { useEffect, useState } from "react";
import axios from "axios";
import Posts from "../component/Posts";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <div class="container card-header mb-3">Featured</div>
      {posts.map((post, key) => {
        return <Posts article={post} />;
      })}
    </div>
  );
}
