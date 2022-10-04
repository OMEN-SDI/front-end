import "./App.css";
import React, { useState, useEffect, useInsertionEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
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
import userEvent from "@testing-library/user-event";

function App() {
  const [individualMissionDetails, setIndividualMissionDetails] = useState({});
  const [missionsArray, setMissionsArray] = useState([]);
  const [searchResultsArray, setSearchResultsArray] = useState([]);
  const [usersArray, setUsersArray] = useState([]);
  const [searchBarText, setSearchBarText] = useState("");
  const [favoriteMissions, setFavoriteMissions] = useState([]);
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
    id: 0,
    isLoggedIn: false,
  });
  const [missionCreatedAlert, setMissionCreatedAlert] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [userLoginInfo, setUserLoginInfo] = useState({
    username: "",
    password: "",
  });

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
    isFavorite,
    setIsFavorite,
  };

  return (
    <AppContext.Provider value={passedContext}>
      <Router>
        <MissionNavBar />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          {/* <Route path="/userpage" element={<UserPage />}></Route> */}
          <Route path="/userpage" element={userCredentials.isLoggedIn ? <UserPage /> : <Login/>}></Route>
          <Route path="/help" element={<HelpPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
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
