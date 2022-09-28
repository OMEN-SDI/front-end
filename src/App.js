import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Login } from "./components/Login";
import { MissionNavBar } from "./components/Navbar";
import { UserPage } from "./components/UserPage";
import { SearchResults } from "./components/SearchResults";
import { AppContext } from "./components/AppContext";
import { MissionDetails } from "./components/MissionDetails";
import {AboutPage} from "./components/AboutPage";
import {HelpPage} from "./components/HelpPage";

function App() {
  const [individualMissionDetails, setIndividualMissionDetails] = useState({});
  const [missionsArray, setMissionsArray] = useState([
    { id: 1, title: "mission-one", msn_lat: "40", msn_lon: "100" },
    { id: 2, title: "mission-two", msn_lat: "60", msn_lon: "99" },
    {
      id: 3,
      title: "mission-three",
      msn_lat: "29.473676814427698",
      msn_lon: "-98.35372924804688",
    },
    {
      id: 4,
      title: "mission-three",
      msn_lat: "29.473676814427698",
      msn_lon: "-98.35372924804688",
    },
    {
      id: 5,
      title: "mission-three",
      msn_lat: "29.473676814427698",
      msn_lon: "-98.35372924804688",
    },
    {
      id: 6,
      title: "mission-three",
      msn_lat: "29.473676814427698",
      msn_lon: "-98.35372924804688",
    },
    { id: 1, title: "mission-one", msn_lat: "40", msn_lon: "100" },
    { id: 2, title: "mission-two", msn_lat: "60", msn_lon: "99" },
    {
      id: 3,
      title: "mission-three",
      msn_lat: "29.473676814427698",
      msn_lon: "-98.35372924804688",
    },
    {
      id: 4,
      title: "mission-three",
      msn_lat: "29.473676814427698",
      msn_lon: "-98.35372924804688",
    },
    {
      id: 5,
      title: "mission-three",
      msn_lat: "29.473676814427698",
      msn_lon: "-98.35372924804688",
    },
    {
      id: 6,
      title: "mission-three",
      msn_lat: "29.473676814427698",
      msn_lon: "-98.35372924804688",
    },
    { id: 1, title: "mission-one", msn_lat: "40", msn_lon: "100" },
    { id: 2, title: "mission-two", msn_lat: "60", msn_lon: "99" },
    {
      id: 3,
      title: "mission-three",
      msn_lat: "29.473676814427698",
      msn_lon: "-98.35372924804688",
    },
    {
      id: 4,
      title: "mission-three",
      msn_lat: "29.473676814427698",
      msn_lon: "-98.35372924804688",
    },
    {
      id: 5,
      title: "mission-three",
      msn_lat: "29.473676814427698",
      msn_lon: "-98.35372924804688",
    },
    {
      id: 6,
      title: "mission-three",
      msn_lat: "29.473676814427698",
      msn_lon: "-98.35372924804688",
    },
    { id: 1, title: "mission-one", msn_lat: "40", msn_lon: "100" },
    { id: 2, title: "mission-two", msn_lat: "60", msn_lon: "99" },
    {
      id: 3,
      title: "mission-three",
      msn_lat: "29.473676814427698",
      msn_lon: "-98.35372924804688",
    },
    {
      id: 4,
      title: "mission-three",
      msn_lat: "29.473676814427698",
      msn_lon: "-98.35372924804688",
    },
    {
      id: 5,
      title: "mission-three",
      msn_lat: "29.473676814427698",
      msn_lon: "-98.35372924804688",
    },
    {
      id: 6,
      title: "mission-three",
      msn_lat: "29.473676814427698",
      msn_lon: "-98.35372924804688",
    },
  ]);
  const passedContext = {
    individualMissionDetails,
    setIndividualMissionDetails,
    missionsArray,
    setMissionsArray,
  };

  return (
    <AppContext.Provider value={passedContext}>
      <Router>
        <MissionNavBar />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/userPage" element={<UserPage />}></Route>
          <Route path="/helpPage" element={<HelpPage />}></Route>
          <Route path="/aboutPage" element={<AboutPage />}></Route>
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
