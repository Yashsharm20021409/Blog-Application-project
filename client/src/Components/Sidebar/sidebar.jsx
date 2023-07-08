import React from 'react'
import { Link } from "react-router-dom";
import "./sidebar.css";

const sidebar = () => {
    return (
        <div className="sidebar">
          <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src='https://st2.depositphotos.com/1420973/6409/i/600/depositphotos_64095317-stock-photo-blog-concept-cloud-chart-print.jpg'
               alt="blog"
            />
            <p>
              Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
              amet ex esse.Sunt eu ut nostrud id quis proident.
            </p>
          </div>
          <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <Link className="link" to="/posts?cat=Life">
                  Life
                </Link>
              </li>
              <li className="sidebarListItem">
                <Link className="link" to="/posts?cat=Music">
                  Music
                </Link>
              </li>
              <li className="sidebarListItem">
                <Link className="link" to="/posts?cat=Sport">
                  Sport
                </Link>
              </li>
              <li className="sidebarListItem">
                <Link className="link" to="/posts?cat=Style">
                  Style
                </Link>
              </li>
              <li className="sidebarListItem">
                <Link className="link" to="/posts?cat=Tech">
                  Tech
                </Link>
              </li>
              <li className="sidebarListItem">
                <Link className="link" to="/posts?cat=Cinema">
                  Cinema
                </Link>
              </li>
            </ul>
          </div>
          <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
              <i className="sidebarIcon fab fa-facebook-square"></i>
              <i className="sidebarIcon fab fa-instagram-square"></i>
              <i className="sidebarIcon fab fa-pinterest-square"></i>
              <i className="sidebarIcon fab fa-twitter-square"></i>
            </div>
          </div>
        </div>
      );
}

export default sidebar