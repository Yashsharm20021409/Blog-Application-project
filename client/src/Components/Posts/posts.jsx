import Post from "../Post/post"
import "./posts.css";
import React from 'react'

export default function Posts({posts}) {
  // console.log("pos"+posts)
  return (
    <div className="posts">
      {posts && posts?.map((p)=>(
        <Post post={p}/>
      ))}
    </div>
  );
}
