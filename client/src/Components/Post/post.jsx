import { Link } from "react-router-dom"; 
import "./post.css";

export default function Post({post}) {
  // const PF = "http://localhost:5000/images/";
  console.log("ass"+post)
  return (
    <div className="post">
      {/* {post.photo && <img className="postImg" src={PF + post.photo} alt="" />} */}
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          { post.categories.name ? (
            post?.categories?.map((c) => (
              <span className="postCat">{c.name}</span>
            ))
          ):(<span className="postCat">music,nature</span>)}
        </div>
        <Link to={`/post/${post?._id}`} className="link">
          <span className="postTitle">{post?.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post?.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post?.desc}</p>
    </div>
  );
}