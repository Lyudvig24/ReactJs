import React from "react";
import "./Post.css";

const Post = (props) => {
  return (
    <div className="post">
      <img
        className="post-img"
        src="https://postimgs.org/apple-touch-icon.png"
      />
      {props.message}

      <div>
        <span>Like {props.likes}</span>
      </div>
    </div>
  );
};

export default Post;
