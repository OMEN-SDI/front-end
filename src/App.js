import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { MissionNavBar } from "./components/Navbar";
import { UserPage } from "./components/UserPage";
import { SearchResults } from "./components/SearchResults";
import { AppContext } from "./components/AppContext";
import { MissionDetails } from "./components/MissionDetails";
import { AboutPage } from "./components/AboutPage";
import { HelpPage } from "./components/HelpPage";
import Cookies from "js-cookie";
import url from "./components/URL";
import { Footer } from "./components/Footer";
import Styled from "styled-components";

const BackgroundImage = Styled.div`
background-repeat: repeat-y;
background-size: cover;
`;

function App() {
  const [individualMissionDetails, setIndividualMissionDetails] = useState({});
  const [darkMode, setDarkMode] = useState("linear-gradient(#57606f, #d3d3d3)");
  const [missionsArray, setMissionsArray] = useState([]);
  const [searchResultsArray, setSearchResultsArray] = useState([]);
  const [usersArray, setUsersArray] = useState([]);
  const [searchBarText, setSearchBarText] = useState("");
  const [favoriteMissions, setFavoriteMissions] = useState([]);
  const [userCredentials, setUserCredentials] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get("isLoggedIn"));
  const [missionCreatedAlert, setMissionCreatedAlert] = useState(false);
  const [userMissions, setUserMissions] = useState([]);
  const [missionAlertMessage, setMissionAlertMessage] = useState("");
  const [userLoginInfo, setUserLoginInfo] = useState({
    username: "",
    password: "",
  });
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const getMissionData = async () => {
    const res = await fetch(`${url}/missions`);
    const data = await res.json();
    setMissionsArray(data);
  };

  const getUserData = async () => {
    const res = await fetch(`${url}/users`);
    const data = await res.json();
    setUsersArray(data);
  };

  const cookieCheck = () => {
    const cookie = Cookies.get("userCredentials");
    const cookieTheme = Cookies.get("userTheme");
    if (Cookies.get("userCredentials") === undefined) {
      setUserCredentials({});
    } else {
      const parsed = JSON.parse(cookie);
      setUserCredentials(parsed);
    }
    if (Cookies.get("userTheme") === undefined) {
      setDarkMode("linear-gradient(#57606f, #d3d3d3)");
    } else {
      setDarkMode(cookieTheme);
    }
  };

  useEffect(() => {
    cookieCheck();
  }, [isLoggedIn]);

  useEffect(() => {
    getUserData();
    getMissionData();
  }, []);

  const passedContext = {
    individualMissionDetails,
    setIndividualMissionDetails,
    missionsArray,
    setMissionsArray,
    usersArray,
    setUsersArray,
    searchResultsArray,
    setSearchResultsArray,
    searchBarText,
    setSearchBarText,
    userCredentials,
    setUserCredentials,
    favoriteMissions,
    setFavoriteMissions,
    userLoginInfo,
    setUserLoginInfo,
    missionCreatedAlert,
    setMissionCreatedAlert,
    userMissions,
    setUserMissions,
    isLoggedIn,
    setIsLoggedIn,
    missionAlertMessage,
    setMissionAlertMessage,
    isLoggedOut,
    setIsLoggedOut,
    darkMode,
    setDarkMode,
  };

  return (
    <AppContext.Provider value={passedContext}>
      <BackgroundImage style={{ background: darkMode }}>
        <Router>
          <MissionNavBar />
          <Routes>
            <Route
              path="/"
              element={isLoggedIn ? <UserPage /> : <Login />}
            ></Route>
            <Route
              path="/userpage"
              element={isLoggedIn ? <UserPage /> : <Login />}
            ></Route>
            <Route
              path="/help"
              element={isLoggedIn ? <HelpPage /> : <Login />}
            ></Route>
            <Route
              path="/about"
              element={isLoggedIn ? <AboutPage /> : <Login />}
            ></Route>
            <Route
              path="/searchresults"
              element={isLoggedIn ? <SearchResults /> : <Login />}
            ></Route>
            <Route
              path="/favorites"
              element={isLoggedIn ? <SearchResults /> : <Login />}
            ></Route>
            <Route
              path="/missiondetails/:id"
              element={<MissionDetails />}
            ></Route>
          </Routes>
          <Footer />
        </Router>
      </BackgroundImage>
    </AppContext.Provider>
  );
}

export default App;
