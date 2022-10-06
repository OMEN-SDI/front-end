import { MissionModal } from "./AddMissionModal";
import { useState, useContext } from "react";
import React from "react";
import { Button } from "react-bootstrap";
import Styled from "styled-components";
import { Alert } from "react-bootstrap";
import { AppContext } from "./AppContext";
import { EditMissionModal } from "./EditMissionModal"
import editButton from '../dots.png';

const ButtonsDiv = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const StyledEditButton = Styled.img`
height: 2em;
`

export const EditMissionModalPop = ({ mission }) => {
  const [modalShow, setModalShow] = useState(false);
  // const { missionEditedAlert, setMissionEditedAlert } = useContext(AppContext)
  const [missionEditedAlert, setMissionEditedAlert] = useState(false);
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

      <StyledEditButton src={editButton} onClick={() => setModalShow(true)} />

      <EditMissionModal show={modalShow} onHide={() => setModalShow(false)} mission={mission} />
    </ButtonsDiv>
  );
}