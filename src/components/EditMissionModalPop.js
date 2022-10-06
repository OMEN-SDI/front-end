import { MissionModal } from "./AddMissionModal";
import { useState, useContext } from "react";
import React from "react";
import { Button } from "react-bootstrap";
import Styled from "styled-components";
import { Alert } from "react-bootstrap";
import { AppContext } from "./AppContext";
import {EditMissionModal} from "./EditMissionModal"

const ButtonsDiv = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const EditMissionModalPop = ({mission}) => {
    const [modalShow, setModalShow] = useState(false);
    const {missionEditedAlert, setMissionEditedAlert} = useContext(AppContext)
    // console.log('mission modal pop mission:', mission)

    return (
      <ButtonsDiv>
        <Alert
          key="success"
          variant="success"
          show={missionEditedAlert}
          style={{ width: "20vw", textAlign: "center" }}
        >
          Mission Updated!
        </Alert>
        <h2 onClick={() => setModalShow(true)}>
          ...
        </h2>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" onClick={() => setModalShow(true)}/>
</svg> */}
        <EditMissionModal show={modalShow} onHide={() => setModalShow(false)} mission={mission}/>
      </ButtonsDiv>
    );
  }