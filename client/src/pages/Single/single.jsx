import React from "react";
import Sidebar from "../../Components/sidebar/Sidebar1";
import SinglePost from "../../Components/SinglePost/SinglePost";
import "./single.css";
import Footer from "../../Components/footer/Footer";

const single = () => {
  return (
    <>
      <div className="single">
        <SinglePost />
        <Sidebar />
      </div>
      <Footer />
    </>
  );
};

export default single;
