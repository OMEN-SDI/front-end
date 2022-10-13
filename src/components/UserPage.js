import React, { useEffect, useState, useContext } from "react";
import Styled from "styled-components";
import { MissionModal } from "./AddMissionModal";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppContext } from "./AppContext";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { EditMissionModalPop } from "./EditMissionModalPop";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import "../App.css";
import url from "./URL";
import { World } from "./World";

const IndividualMission = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 5%;
    font-weight: 600;
    border: 1px solid white;
    width: 85%;
    background-color: rgb(90 74 227);
    cursor: pointer;
    border-radius: 20px;
    line-height: 4vh;
`;

const ContainerDiv = Styled.div`
    height: 76vh;
    display: flex;
    flex-direction: row;
    column-gap: 30vh;
`;

const CreateMissionDiv = Styled.div`
    font-family: 'Kanit', sans-serif;
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
    font-size: 4vh;
    font-weight: 500;
    font-style: italic;
    color: white;
    cursor: pointer;
`;

const ButtonsDiv = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const UserPage = () => {
  setTimeout(() => {
    const el = document.querySelector("canvas");
    el.style.width = "22vw";
    el.style.height = "12vw";
    el.style.display = "flex";
    el.style.marginTop = "44vh";
    el.style.flexDirection = "column";
    el.style.touchAction = "none";
  }, [500]);

  const {
    missionsArray,
    userCredentials,
    setIndividualMissionDetails,
    missionCreatedAlert,
    setMissionCreatedAlert,
    favoriteMissions,
    setFavoriteMissions,
    setSearchResultsArray,
    userMissions,
    setUserMissions,
    missionAlertMessage,
  } = useContext(AppContext);

  const navigate = useNavigate();

  const getFavoriteMissions = async () => {
    if (!userCredentials.id === undefined) {
      const res = await fetch(`${url}/favoritemissions/${userCredentials.id}`);
      const data = await res.json();
      setFavoriteMissions(data);
    }
  };

  useEffect(() => {
    const specificUserMissions = missionsArray.filter((mission) => {
      if (mission.user_id === userCredentials.id) {
        return mission;
      }
    });
    setUserMissions(specificUserMissions);
    getFavoriteMissions();
  }, [missionsArray, userCredentials]);

  function ModalPop() {
    const [modalShow, setModalShow] = useState(false);

    return (
      <ButtonsDiv>
        <Alert
          variant="success"
          show={missionCreatedAlert}
          onClose={() => setMissionCreatedAlert(false)}
          style={{ width: "20vw", textAlign: "center" }}
        >
          {missionAlertMessage}
        </Alert>

        <CreateMissionDiv variant="primary" onClick={() => setModalShow(true)}>
          Create New Mission
        </CreateMissionDiv>
        <MissionModal
          show={modalShow}
          onHide={() => {
            setModalShow(false);
          }}
          mode="create"
        />
      </ButtonsDiv>
    );
  }

  return (
    <ContainerDiv>
      <SimpleBar
        style={{
          display: "flex",
          height: "75vh",
          width: "30vh",
          border: "4px solid white",
          marginLeft: "4vh",
          backgroundColor: "black",
          textAlign: "center",
          color: "white",
          flexDirection: "column",
          alignItems: "center",
          opacity: "80%",
          rowGap: "10px",
          borderRadius: "20px",
        }}
      >
        <h3 style={{ fontFamily: "Kanit", fontSize: "inherit" }}>
          Mission Dashboard
        </h3>
        {userMissions.map((mission) => {
          return (
            <IndividualMission key={mission.msn_id}>
              <div
                onClick={() => {
                  setIndividualMissionDetails(mission);
                  navigate(`/missiondetails/${mission.msn_id}`);
                }}
                style={{ width: "90%", height: "100%" }}
              >
                {mission.msn_title}
              </div>
              <EditMissionModalPop mission={mission} />
            </IndividualMission>
          );
        })}
      </SimpleBar>
      <div
        style={{
          overflow: "hidden",
          display: "flex",
          columnGap: "5vh",
        }}
      >
        <ButtonsDiv>
          <ModalPop />
          <CreateMissionDiv
            variant="primary"
            onClick={() => {
              const favMissionIds = favoriteMissions.map((msn) => msn.msn_id);
              const detailsOfFavMissions = missionsArray.filter((msn) =>
                favMissionIds.includes(msn.msn_id)
              );
              setSearchResultsArray(detailsOfFavMissions);
              navigate("/favorites");
            }}
          >
            Saved Missions
          </CreateMissionDiv>
        </ButtonsDiv>
        <div
          style={{
            width: "100vw",
            height: "calc(100vh - 64px)",
          }}
        >
          <World />
        </div>
      </div>
    </ContainerDiv>
  );
};
