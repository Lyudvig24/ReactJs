import React from "react";
import Post from "./Post/Post";
const MyPosts = () => {
  return (
    <div>

      <div className="my-posts">
        <div className="item-posts"> My Posts</div>
      </div>

      <div className="new-posts">
        <textarea></textarea>
        <button>Add Post</button>
        <button>Remove</button>
      </div>

        <div className="post">

        <Post message="hi how are you?" likes="14"/>
        <Post message="i wanna learn React!!" likes="20"/>
        
        </div>
        
    </div>
  );
};

export default MyPosts;