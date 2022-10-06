import Cookies from "js-cookie";
import { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import { AppContext } from "./AppContext";

export const Logout = () => {
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();
  Cookies.remove("isLoggedIn", {
    domain: "http://localhost:3000",
  });
  Cookies.remove("userCredentials", {
    domain: "http://localhost:3000",
  });
  // Cookies.remove("isLoggedIn");
  setIsLoggedIn(false);
  navigate("/");
};

// const LogoutUser = () => {
//   const URL = "http://localhost:8080/logout";
//   fetch(URL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(userLoginInfo),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       // setShowMessage(data.message);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// };
