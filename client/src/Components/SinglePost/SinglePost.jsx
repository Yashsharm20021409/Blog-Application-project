import { Link, useLocation } from "react-router-dom";
import "./single.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../server";
import { Context } from "../../context/Context";
import "../../responsive.css" 

export default function SinglePost() {
  const location = useLocation();
  // to get id  of post from url to fetch the data
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState([]);
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`${server}/posts/` + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleUpdate = async () => {
    try {
      await axios.put(`${server}/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (err) {}
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${server}/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo ? (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        ) : (
          <img
            className="singlePostImg"
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        )}

        {/* edit title */}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter New Title..."
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {/*if post username and logged in user name is same then only show edit and delete button*/}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>

        {/* edit desc */}
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Enter new Description..."
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {/* shown only is user want to update data */}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
