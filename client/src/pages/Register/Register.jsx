import React from "react";
import "./register.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { server } from "../../server";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [avatar, setAvatar] = useState(null);
  // const navigate = useNavigate();

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    const userData = {
      username,
      email,
      password,
    }
    if (avatar) {
      const data = new FormData();
      const filename = Date.now() + avatar.name;
      data.append("name", filename);
      data.append("file", avatar);
      userData.profilePic = filename;
      try {
        await axios.post(`${server}/upload`, data);
      } catch (err) {
        console.log(err)
      }
    }
    try {
      const res = await axios.post(`${server}/auth/register`, 
        userData
      );
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <label
            htmlFor="avatar"
          ></label>
          <div className="avatarDiv">
            <span className="avatarSpan">
              {avatar ? (
                // create url for that avatar
                <img src={URL.createObjectURL(avatar)} alt="avatar" className="avatarImg"/>
              ) : (
                <i class="fa-solid fa-user" style={{"marginLeft":"15px"}}></i>
              )}
            </span>
            <label htmlFor="file-input">
              {/* this is inside the label written in span */}
              <span className="avatarSpan2">Upload a file</span>
              {/* this input also inside the span to store the incoming data */}
              <input
                type="file"
                name="avatar"
                // id of this input must be same as html for the label used for this
                id="file-input"
                accept=".jpg,.jpeg,.png"
                onChange={handleFileInputChange}
                className="avatar"
              />
            </label>
          </div>
        </div>
        <button className="registerButton" type="submit">
          submit
        </button>
        <span style={{ marginTop: "16px" }}>
          Already have an Account?{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            Login
          </Link>
        </span>
      </form>
      {/* error due to same username or email */}
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Something went wrong!
        </span>
      )}
    </div>
  );
};

export default Register;
