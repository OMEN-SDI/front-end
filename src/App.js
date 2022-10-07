import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Login } from "./components/Login";
import { MissionNavBar } from "./components/Navbar";
import { UserPage } from "./components/UserPage";
import { SearchResults } from "./components/SearchResults";
import { AppContext } from "./components/AppContext";
import { MissionDetails } from "./components/MissionDetails";
import { AboutPage } from "./components/AboutPage";
import { HelpPage } from "./components/HelpPage";
import Cookies from "js-cookie";

function App() {
  const [individualMissionDetails, setIndividualMissionDetails] = useState({});
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
    const res = await fetch("http://localhost:8080/missions");
    const data = await res.json();
    setMissionsArray(data);
  };

  const getUserData = async () => {
    const res = await fetch("http://localhost:8080/users");
    const data = await res.json();
    setUsersArray(data);
  };

  const cookieCheck = () => {
    const cookie = Cookies.get("userCredentials");
    console.log("hitting cookiecheck", cookie);
    console.log(typeof cookie);
    if (Cookies.get("userCredentials") === undefined) {
      setUserCredentials({});
    } else {
      const parsed = JSON.parse(cookie);
      setUserCredentials(parsed);
    }
  };

  // const navigate = useNavigate();

  useEffect(() => {
    cookieCheck();
    // if (!isLoggedIn) {
    // navigate("/");
    // }
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
  };

  return (
    <AppContext.Provider value={passedContext}>
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
          <Route path="/help" element={<HelpPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/searchresults" element={<SearchResults />}></Route>
          <Route path="/favorites" element={<SearchResults />}></Route>
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
