import React, { useEffect, useState, useContext, Render } from "react";
import Styled from "styled-components";
import { MissionModal } from "./AddMissionModal";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppContext } from "./AppContext";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

const MyMissions = Styled.div`
    height: 75vh;
    width: 30vh;
    border: 4px solid white;
    margin-left: 4vh;
    background-color: black;
    text-align: center;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 80%;
    overflow: auto;
    row-gap: 10px;
`;

const IndividualMission = Styled.div`
    border: 1px solid white;
    width: 85%;
    background-color: rgb(90 74 227);
    cursor: pointer;
    border-radius: 20px;
    line-height: 4vh;
`;

const ContainerDiv = Styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    column-gap: 30vh;
`;

const CreateMissionDiv = Styled.div`
    width: 40vw;
    height: 15vh;
    border: 4px solid white;
    border-radius: 20px;
    margin-top: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    opacity: 80%;
    font-size: 3vh;
    font-weight: 500;
    font-style: italic;
    color: white;
    cursor: pointer;
`;

const ButtonPlusAlert = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const UserPage = () => {
  const {
    missionsArray,
    userCredentials,
    setIndividualMissionDetails,
    missionCreatedAlert,
  } = useContext(AppContext);
  const [userMissions, setUserMissions] = useState([]);

  const navigate = useNavigate();
  // console.log("userpage user state: ", userCredentials);

  useEffect(() => {
    const specificUserMissions = missionsArray.filter((mission) => {
      if (mission.user_id === userCredentials.id) {
        return mission;
      }
    });
    setUserMissions(specificUserMissions);
    console.log(userMissions);
  }, []);

  function ModalPop() {
    const [modalShow, setModalShow] = useState(false);
    return (
      <ButtonPlusAlert>
        <Alert
          key="success"
          variant="success"
          show={missionCreatedAlert}
          style={{ width: "20vw", textAlign: "center" }}
        >
          Mission Created!
        </Alert>
        <CreateMissionDiv variant="primary" onClick={() => setModalShow(true)}>
          Create New Mission
        </CreateMissionDiv>
        <MissionModal show={modalShow} onHide={() => setModalShow(false)} />
      </ButtonPlusAlert>
    );
  }

  return (
    <ContainerDiv>
      <MyMissions>
        My Missions
        {userMissions.map((mission) => {
          return (
            <IndividualMission
              onClick={() => {
                setIndividualMissionDetails(mission);
                navigate(`/missiondetails/${mission.msn_id}`);
              }}
            >
              {mission.msn_title}
            </IndividualMission>
          );
        })}
      </MyMissions>

      <ModalPop />
    </ContainerDiv>
  );
};
