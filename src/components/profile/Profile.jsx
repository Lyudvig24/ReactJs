import React from "react";
import './profile.css';
import MyPosts from "./My-Posts/My-posts";
import Post from "./My-Posts/Post/Post";


const Profile = () => {
    return (
        <div className="content">

        <div className="cover-image-conteiner">
        <img className="cover-image" src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-autumn-nature-with-a-river-in-the-middle-of-the-forest-free-image.jpeg?w=600&quality=80"/>
        </div>

        <div className="img-desc">
          <img className="profile-image" src="https://4.bp.blogspot.com/-zsbDeAUd8aY/US7F0ta5d9I/AAAAAAAAEKY/UL2AAhHj6J8/s1600/facebook-default-no-profile-pic.jpg"/>
          <div className="text-conteiner">
          <h2 className="description name-author">Asoyan L.</h2>
          <p className="description">Date Of Birth 30 October</p>
          <p className="description">City Gyumri</p>
          <p className="description">Education MSU`12</p>
          <p className="description">Web Site <a className="link" href="http://localhost:3000/">http://localhost:3000/</a></p>
          </div>
        </div>
      <MyPosts />
      
      </div>
    )
}

export default Profile;