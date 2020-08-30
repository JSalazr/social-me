import React from "react";
import "./post.css";

function Post() {
  return (
    <div className="post_container">
      <div className="card-base post">
        <h1 className="post-user">John Doe</h1>
        <p className="post-timestamp">5 min. ago</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div>
          <div className="like-circle-container" />
          <span className="stats">5 likes</span> 
          <span className="stats">3 comments</span>
        </div>
      </div>
      <div className="circle-container" />
    </div>
  );
}

export default Post;
