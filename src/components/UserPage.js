import React, { useEffect, useState, useContext, Render } from "react";
import Styled from "styled-components";
import { MissionModal } from "./AddMissionModal";
import "bootstrap/dist/css/bootstrap.min.css";

const MyMissions = Styled.div`
    height: 75vh;
    width: 30vh;
    border: 4px solid black;
    margin-left: 4vh;
    background-color: #519BFF;
    text-align: center;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 80%;
`;

const IndividualMission = Styled.div`
    border: 1px solid white;
    margin-top: 3vh;
    width: 85%;
    background-color: #514f5a;
    cursor: pointer;
    border-radius: 20px;
`;

const ContainerDiv = Styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    column-gap: 30vh;
`;

const CreateMissionDiv = Styled.div`
    width: 100vh;
    height: 15vh;
    border: 4px solid;
    border-radius: 20px;
    margin-top: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #519BFF;
    opacity: 80%;
    font-size: 3vh;
    font-weight: 500;
    cursor: pointer;
`;

export const UserPage = () => {
  function ModalPop() {
    const [modalShow, setModalShow] = useState(false);
    return (
      <>
        <CreateMissionDiv variant="primary" onClick={() => setModalShow(true)}>
          Create New Mission
        </CreateMissionDiv>
        <MissionModal show={modalShow} onHide={() => setModalShow(false)} />
      </>
    );
  }

  return (
    <ContainerDiv>
      <MyMissions>
        My Missions
        <IndividualMission>Operation Thor</IndividualMission>
        <IndividualMission>Operation Allies Refuge</IndividualMission>
        <IndividualMission>Operation Freedom's Sentinel</IndividualMission>
      </MyMissions>

      <ModalPop />
    </ContainerDiv>
  );
};