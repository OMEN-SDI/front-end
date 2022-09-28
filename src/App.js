import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Login } from "./components/Login";
import { MissionNavBar } from "./components/Navbar";
import { UserPage } from "./components/UserPage";
import { SearchResults } from "./components/SearchResults";
import { AppContext } from "./components/AppContext";
import { MissionDetails } from "./components/MissionDetails";

function App() {
  const [individualMissionDetails, setIndividualMissionDetails] = useState({});

  const passedContext = {
    individualMissionDetails,
    setIndividualMissionDetails,
  };

  return (
    <AppContext.Provider value={passedContext}>
      <Router>
        <MissionNavBar />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/userpage" element={<UserPage />}></Route>
          {/* This is a temp path */}
          <Route path="/dummypath" element={<SearchResults />}></Route>
          <Route
            path="/missiondetails/:id"
            element={<MissionDetails />}
          ></Route>
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
