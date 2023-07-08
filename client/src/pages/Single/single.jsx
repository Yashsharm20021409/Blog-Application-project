import React from "react";
import Sidebar from "../../Components/Sidebar/sidebar";
import SinglePost from "../../Components/SinglePost/SinglePost";
import "./single.css";

const single = () => {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default single;
