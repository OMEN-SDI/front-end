import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Login } from "./components/Login";
import { MissionNavBar } from "./components/Navbar";

function App() {
  return (
    <Router>
      <MissionNavBar />
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
