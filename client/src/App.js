import React from 'react';
import Topbar from './Components/Topbar/Topbar';
import Home from './pages/HomePage/Home';
import Single from './pages/Single/single';
import Write from './pages/Write/Write';
import Settings from './pages/Settings/Settings';
import Login from './pages/Loginpage/Login';
import Register from './pages/Register/Register';
import Footer from './Components/footer/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  // const user = false;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/register" element={user ? <Home /> : <Register />}></Route>
        <Route path="/login" element={user ? <Home /> : <Login />}></Route>
        <Route path="/post/:id" element={<Single />}></Route>
        <Route path="/write" element={user ? <Write /> : <Login />}></Route>
        <Route path="/settings" element={user ? <Settings /> : <Login />}></Route>
        <Route path="/footer" element={<Footer />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
