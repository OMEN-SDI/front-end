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

export const logout = () => {
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();
  Cookies.remove("userCredentials");
  Cookies.remove("isLoggedIn");
  Cookies.remove("userCredentials", { path: "/" }); // removed!
  Cookies.remove("isLoggedIn", { path: "/" }); // removed!

  setIsLoggedIn(false);
  navigate("/");
};
