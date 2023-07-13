import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
import { Context } from "../../context/Context";

const Topbar = () => {

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  
  return (
    <>
    <div className="announcement">
        "Don't be afraid to give up the good to go for the great."
    </div>
    <div className="top" >
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
          <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
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
          <div style={{"display":"flex" , "marginRight":"-100px"}}>
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src={PF+user?.profilePic}
              alt=""
            />
          </Link>
          <ul>

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
    </>
  );
};

export default Topbar;
