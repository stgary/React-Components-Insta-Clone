// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
  const [likes, setLikes] = useState(props.propsData.likes);

  const incrementLikes = () => {
    setLikes(likes => likes + 1);
  };


  return (
    <div className="post-border">
      <PostHeader
        username={props.propsData.username}
        thumbnailUrl={
          props.propsData.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.propsData.imageUrl}
        />
      </div>
      <LikeSection incrementLikes={incrementLikes} likes={likes} />
      <CommentSection
        postId={props.propsData.imageUrl}
        comments={props.propsData.comments}
      />
    </div>
  );
};

export default Post;


