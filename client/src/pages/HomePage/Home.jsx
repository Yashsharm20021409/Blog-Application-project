import React from 'react'
// import { useLocation } from "react-router";
import Header from "../../Components/Header/Header";
import Posts from "../../Components/Posts/posts";
import Sidebar from "../../Components/Sidebar/sidebar";
import "./home.css";

const Home = () => {
    // const location = useLocation();
    // console.log(location);
    return (
      <>
        <Header />
        <div className="home">
          <Posts />
          <Sidebar />
        </div>
      </>
    );
}

export default Home