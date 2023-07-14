import React from "react";
import "./footer1.css";
const Footer = () => {
  return (
    <div className="Container" id="footer">
      <div className="Left">
        <h1 className="Logo">Blog.</h1>
        <p className="Desc">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, sequi?
        </p>
        <div className="SocialContainer">
          <div className="SocialIcon" style={{ backgroundColor: "3B5999" }}>
            <i class="fa-brands fa-facebook"></i>
          </div>
          <div className="SocialIcon" style={{ backgroundColor: "E4405F" }}>
            <i class="fa-brands fa-instagram"></i>
          </div>
          <div className="SocialIcon" style={{ backgroundColor: "55ACEE" }}>
            <i class="fa-brands fa-twitter"></i>
          </div>
          <div className="SocialIcon" style={{ backgroundColor: "E60023" }}>
            <i class="fa-brands fa-pinterest"></i>
          </div>
        </div>
      </div>
      <div className="Middle">
        <h3 className="Title">Useful Links</h3>
        <ul className="List">
          <li className="ListItem">Home</li>
          <li className="ListItem">My Account</li>
          <li className="ListItem">Lorem1</li>
          <li className="ListItem">Lorem2</li>
          
        </ul>
      </div>
      <div className="Right">
        <h3 className="Title">Contact</h3>
        <div className="ContactItem">
          <i className="fa-solid fa-house" style={{ marginRight: "10px" }}></i>{" "}
          622 Raj Bhavan Path , New Delhi ,India
        </div>
        <div className="ContactItem">
          <i className="fa-solid fa-phone" style={{ marginRight: "10px" }}></i>{" "}
          +91 9999999999
        </div>
        <div className="ContactItem">
          <i
            className="fa-solid fa-address-book"
            style={{ marginRight: "10px" }}
          ></i>{" "}
          contact@xyz.dev
        </div>
        <img className="Payment" src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </div>
    </div>
  );
};

export default Footer;
