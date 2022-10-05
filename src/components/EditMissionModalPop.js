import { MissionModal } from "./AddMissionModal";
import { useState, useContext } from "react";
import React from "react";
import { Button } from "react-bootstrap";
import Styled from "styled-components";
import { Alert } from "react-bootstrap";
import { AppContext } from "./AppContext";

const ButtonsDiv = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const EditMissionModalPop = ({mission}) => {
    const [modalShow, setModalShow] = useState(false);
    const {missionEditedAlert, setMissionEditedAlert} = useContext(AppContext)
    console.log('mission modal pop mission:', mission)

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
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Edit Mission
        </Button>
        <MissionModal show={modalShow} onHide={() => setModalShow(false)} mode='update' mission={mission}/>
      </ButtonsDiv>
    );
  }