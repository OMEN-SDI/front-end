import React, { useEffect, useState, useContext, Render } from "react";
import Styled from "styled-components";
import { MissionModal } from "./AddMissionModal";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppContext } from "./AppContext";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { SearchResults } from "./SearchResults";
import { Button } from "react-bootstrap";
import { EditMissionModalPop } from "./EditMissionModalPop";

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

const ButtonsDiv = Styled.div`
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
    setMissionCreatedAlert,
    favoriteMissions,
    setFavoriteMissions,
    setSearchResultsArray,
  } = useContext(AppContext);
  const [userMissions, setUserMissions] = useState([]);
  const navigate = useNavigate();

  const getFavoriteMissions = async () => {
    const res = await fetch(
      `http://localhost:8080/favoritemissions/${userCredentials.id}`
    );
    const data = await res.json();
    setFavoriteMissions(data);
  };

  // const handleAlert = () => {
  //   setFavoritesCreatedAlert(true);
  //  (() => {
  //     setFavoritesCreatedAlert(false);
  //   }, 2000);
  // };

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     console.log('This will be called after 2 seconds');
  //   }, 2000);
  
  //   return () => clearTimeout(timeout);
  // }, []);

  useEffect(() => {
    const specificUserMissions = missionsArray.filter((mission) => {
      if (mission.user_id === userCredentials.id) {
        return mission;
      }
    });
    setUserMissions(specificUserMissions);
    getFavoriteMissions();
    // console.log("useeffect in userpage ran");
  }, [missionsArray]);

  function ModalPop() {
    const [modalShow, setModalShow] = useState(false);
    const [show, setShow] = useState(true);
    
    return (
      <ButtonsDiv>
        <Alert 
          variant="success" 
          show={missionCreatedAlert} 
          onClose={() => setMissionCreatedAlert(false)}
          style={{ width: "20vw", textAlign: "center" }}
        >
          Mission Created!
        </Alert>
      
        <CreateMissionDiv variant="primary" onClick={() => setModalShow(true)}>
          Create New Mission
        </CreateMissionDiv>
        <MissionModal show={modalShow} onHide={() => setModalShow(false)} mode='create'/>
      </ButtonsDiv>
    );
  }

  return (
    <ContainerDiv>
      <MyMissions>
        My Missions
        {userMissions.map((mission) => {
          return (
            <>
            <IndividualMission
              key={mission.msn_id}
              onClick={() => {
                setIndividualMissionDetails(mission);
                navigate(`/missiondetails/${mission.msn_id}`);
              }}
            >
              {mission.msn_title}
             
            </IndividualMission>
            <EditMissionModalPop mission={mission}/>
            </>
          );
        })}
      </MyMissions>

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
          My Favorites
        </CreateMissionDiv>
      </ButtonsDiv>
    </ContainerDiv>
  );
};
