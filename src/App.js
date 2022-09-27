import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Login } from "./components/Login";
import { MissionNavBar } from "./components/Navbar";
import { UserPage } from "./components/UserPage";
import { SearchResults } from "./components/SearchResults";

function App() {
  return (
    <Router>
      <MissionNavBar />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/userpage" element={<UserPage />}></Route>
        {/* This is a temp path */}
        <Route path="/dummypath" element={<SearchResults />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
