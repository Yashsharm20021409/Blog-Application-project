import React from 'react';
import Topbar from './Components/Topbar/Topbar';
import Home from './pages/HomePage/Home';
import Single from './pages/Single/single';
import Write from './pages/Write/write';
import Settings from './pages/Settings/settings';
import Login from './pages/Login/login';
import Register from './pages/Register/Register';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const currentUser = false;
  // const currentUser = true;
  return (
    <Router>
    <Topbar />
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/posts" element={<Home />}></Route>
      <Route path="/register" element={currentUser ? <Home /> : <Register />}></Route>
      <Route path="/login" element={currentUser ? <Home /> : <Login />}></Route>
      <Route path="/post/:id" element={<Single />}></Route>
      <Route path="/write" element={currentUser ? <Write /> : <Login />}></Route>
      <Route path="/settings" element={currentUser ? <Settings /> : <Login />}></Route>
    </Routes>
  </Router>
  );
}

export default App;
