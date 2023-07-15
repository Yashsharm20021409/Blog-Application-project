import React from "react";
import "./header.css";
import "../../responsive.css"

const header = () => {
  return (
    <>
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">GEU Official</span>
          <span className="headerTitleLg">BLOG</span>
        </div>
      </div>
      <div className="img">
        <img
          className="headerImg"
          src="https://images.unsplash.com/photo-1583591900414-7031eb309cb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          // src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=858&q=80"
          // src="https://images.unsplash.com/photo-1565301660306-29e08751cc53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt=""
        />
        <div className="text main">
          <h1>
            Here You Can Share Your:{" "}
            <div class="roller">
              <span id="rolltext">Thoughts 
              <br />
              Ideas
              <br />
              Business's
              <br />
              <span id="spare-time">"Write what you know."</span></span>
              <br />
            </div>
          </h1>
        </div>
      </div>
    </>
  );
};

export default header;
