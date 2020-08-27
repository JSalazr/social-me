import React from "react";
import Post from "../post";
import "./postList.css";

function PostList() {
  return (
    <div className="list">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default PostList;
