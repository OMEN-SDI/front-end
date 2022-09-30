import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Styled from "styled-components";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SignUpModal from "./SignUpModal";
import Alert from "react-bootstrap/Alert";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { AppContext } from "./AppContext";
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
  const { usersArray } = useContext(AppContext);
  const [lgShow, setLgShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const { userCredentials, setUserCredentials } = useContext(AppContext);
  const [alertSpecifications, setAlertSpecifications] = useState({
    type: "",
    alertMessage: "",
  });

  const credentialsCheck = () => {
    usersArray.filter((user) => {
      if (
        user.username === userCredentials.username &&
        user.password === userCredentials.password
      ) {
        setUserCredentials({
          ...userCredentials,
          isLoggedIn: true,
        });
        navigate("/userpage");
      } else {
        setAlertSpecifications({
          type: "danger",
          alertMessage: "Username and/or password invalid.",
        });
        setShowAlert(true);
      }
    });
  };

  let email = "";
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
              value={userCredentials.username}
              onChange={(e) =>
                setUserCredentials({
                  ...userCredentials,
                  username: e.target.value,
                })
              }
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control
              type="password"
              placeholder="Password"
              value={userCredentials.password}
              onChange={(e) =>
                setUserCredentials({
                  ...userCredentials,
                  password: e.target.value,
                })
              }
            />
          </FloatingLabel>
        </LoginBoxes>
        <LoginButtonsDiv>
          <Button
            variant="dark"
            type="submit"
            style={{ width: "20vw" }}
            onClick={() => credentialsCheck()}
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
