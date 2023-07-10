import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router";
import Header from "../../Components/Header/Header";
import Posts from "../../Components/Posts/posts";
import Sidebar from "../../Components/sidebar/Sidebar1";
import "./home.css";
import axios from "axios";
import {server} from "../../server"
import { useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  console.log("loc"+search)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`${server}/posts`+search);
      setPosts(res.data);
      // console.log(res.data);
    }; 

    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        {posts && <Posts posts={posts}/>}
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
