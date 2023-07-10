import { Link, useLocation } from "react-router-dom";
import "./single.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../server";

export default function SinglePost() {
  const location = useLocation();
  // to get id  of post from url to fetch the data
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`${server}/posts/` + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  // console.log(post);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo ? (
          <img className="singlePostImg" src={post.photo} alt="" />
        ) : (
          <img
            className="singlePostImg"
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        )}
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link className="link" to={`/?user=${post.username}`}>
              <b >{post.username}</b>
            </Link>
          </span>
          <span>{new Date(post?.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
}
