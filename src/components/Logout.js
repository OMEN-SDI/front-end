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

export const Logout = () => {
  const navigate = useNavigate();
  const { usersArray } = useContext(AppContext);
  const [lgShow, setLgShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const { userLoginInfo, setUserLoginInfo, userCredentials, setUserCredentials} = useContext(AppContext);
  const [alertSpecifications, setAlertSpecifications] = useState({
    type: "",
    alertMessage: "",
  });

  

  const logoutUser = () => {
    const URL = "http://localhost:8080/logout";
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLoginInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        
        // setShowMessage(data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <ContainerDiv>
      {/* <SignUpModal
        show={lgShow}
        onHide={() => setLgShow(false)}
        setLgShow={setLgShow}
        setShowAlert={setShowAlert}
        setAlertSpecifications={setAlertSpecifications}
      /> */}
      <LoginContainerDiv>
        {/* <Alert
          key={alertSpecifications.type}
          variant={alertSpecifications.type}
          show={showAlert}
          onHide={() => setShowAlert(false)}
        >
          {alertSpecifications.alertMessage}
        </Alert> */}
        <LoginButtonsDiv>
          <Button
            variant="dark"
            type="submit"
            style={{ width: "20vw" }}
            // onClick={() => credentialsCheck()}
            onClick = {() => logoutUser()}
          >
            Log Out
          </Button>{" "}
        </LoginButtonsDiv>
      </LoginContainerDiv>
    </ContainerDiv>
  );
};