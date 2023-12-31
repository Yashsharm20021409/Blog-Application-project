import React, { useContext } from "react";
// import { } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "./topbar.css";
import { Context } from "../../context/Context";
import { useLocation } from "react-router-dom";
import "../../responsive.css"

const Topbar = () => {

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const handleClick = ()=>{
    document.getElementById("open").classList.add("topOpen");
  }
  const handleClick1 = ()=>{
    document.getElementById("open").classList.remove("topOpen");
  }
  
  
  return (
    <>
    <div className="announcement" id="announcement">
        "Don't be afraid to give up the good to go for the great."
    </div>
    <div className="top" id="open">
    <i class="closeBurger fa-solid fa-xmark" onClick={handleClick1}></i>
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" smooth to="/" >
              HOME
            </Link>
          </li>
          <li className="topListItem"><Link className="link" smooth to='#footer'>ABOUT</Link></li>
          <li className="topListItem"><Link className="link" smooth to='#footer'>CONTACT</Link></li>
          <li className="topListItem">
            <Link className="link" to="/write">
              POST
            </Link>
          </li>
          
        </ul>
      </div>
      <div className="topRight">
        {/* <div style={{"display":"flex"}}>
            <input type="text" placeholder="Search..." className="input" />
            <div className="searchHover"><i className="topSearchIcon fas fa-search"></i></div>
        </div> */}
      
        {user ? (
          <div className="profileDiv" style={{"display":"flex" , "marginRight":"-100px"}}>
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src={PF+user?.profilePic}
              alt=""
            />
          </Link>
          <ul className="mL">

            <li className="extra" onClick={handleLogout}>
            {user && "Logout"}
          </li>
          </ul>
          </div>
        ) : (
          <ul className="topList">
            <div className="userDiv">
              <Link className="link" to="/login"><i class="user fa-solid fa-user"></i></Link>
            </div>
          </ul>
        )}
      </div>
    </div>
        <i className="hamburger  fa-solid fa-bars"  onClick={handleClick}></i>

    {/* mobile user */}
    </>
  );
};

export default Topbar;
