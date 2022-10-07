import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Styled from "styled-components";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SignUpModal from "./SignUpModal";
import Alert from "react-bootstrap/Alert";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { AppContext } from "./AppContext";
import Cookies from "js-cookie";

const ContainerDiv = Styled.div`
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
row-gap: 15vh;
padding-bottom: 28vh;

`;

const LoginContainerDiv = Styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 4vh;
    border: 1px solid white;
    padding: 5%;
    border-radius: 1%;
    background-color: rgb(0, 0, 0, 0.6);
`;

const LoginBoxes = Styled.div`
width: 100%;
`;

const LoginButtonsDiv = Styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1vh;
    justify-content: center;
    width: auto;
    align-items: center;
`;

export const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState("password");
  const [lgShow, setLgShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const { userLoginInfo, setUserLoginInfo, setIsLoggedIn } =
    useContext(AppContext);
  const [alertSpecifications, setAlertSpecifications] = useState({
    type: "",
    alertMessage: "",
  });

  const postUser = () => {
    const URL = "http://localhost:8080/login";
    fetch(URL, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLoginInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          const object = data.user;
          const objectString = JSON.stringify(object);
          Cookies.set("userCredentials", objectString);
          setIsLoggedIn(Cookies.get("isLoggedIn"));
          navigate("/userpage");
        } else {
          navigate("/");
          setAlertSpecifications({
            type: "danger",
            alertMessage: "Username and/or password invalid.",
          });
          setShowAlert(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <ContainerDiv>
      <SignUpModal
        show={lgShow}
        onHide={() => setLgShow(false)}
        setLgShow={setLgShow}
        setShowAlert={setShowAlert}
        setAlertSpecifications={setAlertSpecifications}
      />
      <LoginContainerDiv>
        <Alert
          key={alertSpecifications.type}
          variant={alertSpecifications.type}
          show={showAlert}
          onHide={() => setShowAlert(false)}
        >
          {alertSpecifications.alertMessage}
        </Alert>
        <LoginBoxes>
          <FloatingLabel
            controlId="floatingInput"
            label="Username"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={userLoginInfo.username}
              onChange={(e) =>
                setUserLoginInfo({
                  ...userLoginInfo,
                  username: e.target.value,
                })
              }
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control
              type={showPassword}
              placeholder={showPassword}
              value={userLoginInfo.password}
              onChange={(e) =>
                setUserLoginInfo({
                  ...userLoginInfo,
                  password: e.target.value,
                })
              }
            />
            <Form.Check
              style={{ paddingTop: "1vh", color: "white" }}
              type="checkbox"
              label="Show Password"
              onClick={() =>
                showPassword === "password"
                  ? setShowPassword("text")
                  : setShowPassword("password")
              }
            />
          </FloatingLabel>
        </LoginBoxes>

        <LoginButtonsDiv>
          <Button
            variant="dark"
            type="submit"
            style={{ width: "20vw" }}
            onClick={() => postUser()}
          >
            Log In
          </Button>{" "}
          <Button
            variant="primary"
            type="submit"
            style={{ width: "20vw" }}
            onClick={() => setLgShow(true)}
          >
            Sign Up
          </Button>
        </LoginButtonsDiv>
      </LoginContainerDiv>
    </ContainerDiv>
  );
};
