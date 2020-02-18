//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";
// import data 

const PostsPage = () => {
  // set up state for your data
  const [data] = useState(dummyData);
  // console.log(data);
  return (
    <div className="posts-container-wrapper">
      {data.map(p => (
        <Post propsData={p} />
      ))}
    </div>
  );
};

export default PostsPage;

