import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Styled from "styled-components";
import { AppContext } from "./AppContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

const ContainerDiv = Styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5vh;
    align-items: center;
`;

const CardStyle = Styled.div`
    width: "auto";
    height: "auto";
    background-color: "#696777";
`;

const InputStyleDiv = Styled.div`
display: flex;
flex-direction: row;
`;

const InputColDiv = Styled.div`
display: flex;
flex-direction: column;
margin-left: -10%;
`;

export const SearchResults = () => {
  const navigate = useNavigate();

  const dummyMissions = [
    { id: 1, title: "mission-one", msn_lat: "40", msn_lon: "100" },
    { id: 2, title: "mission-two", msn_lat: "60", msn_lon: "99" },
    {
      id: 3,
      title: "mission-three",
      msn_lat: "29.473676814427698",
      msn_lon: "-98.35372924804688",
    },
    {
      id: 4,
      title: "mission-three",
      msn_lat: "29.473676814427698",
      msn_lon: "-98.35372924804688",
    },
    {
      id: 5,
      title: "mission-three",
      msn_lat: "29.473676814427698",
      msn_lon: "-98.35372924804688",
    },
    {
      id: 6,
      title: "mission-three",
      msn_lat: "29.473676814427698",
      msn_lon: "-98.35372924804688",
    },
  ];

  const { individualMissionDetails, setIndividualMissionDetails } =
    useContext(AppContext);

  return (
    <ContainerDiv>
      {dummyMissions.map((mission) => {
        return (
          <Card
            className="bg-secondary text-white"
            style={{ width: "auto", height: "auto", cursor: "pointer" }}
            onClick={() => {
              setIndividualMissionDetails(mission);
              navigate(`/missiondetails/${mission.id}`);
            }}
          >
            <Card.Header className="bg-dark text-white">
              {mission.title}
            </Card.Header>
            <Card.Body className="show-grid">
              <Container>
                <InputStyleDiv>
                  {/* <div> */}
                  {/* 280&w=325 */}
                  <iframe
                    frameBorder="0"
                    src={`https://www.bing.com/maps/embed?h=150&w=200&cp=${mission.msn_lat}~${mission.msn_lon}&lvl=11&typ=s&sty=h&src=SHELL&FORM=MBEDV8`}
                    scrolling="no"
                  ></iframe>
                  {/* <div style="white-space: nowrap; text-align: center; width: 325px; padding: 6px 0;"></div> */}
                  {/* </div> */}
                  <InputColDiv>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </Card.Text>
                    <Card.Text>Bo has a cool mustache.</Card.Text>
                  </InputColDiv>
                </InputStyleDiv>
              </Container>
            </Card.Body>
          </Card>
        );
      })}
    </ContainerDiv>
  );
};

// export function MissionModal(props) {
//   return (
//     <Modal size="xl" {...props} aria-labelledby="contained-modal-title-vcenter">
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Add Mission
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body className="show-grid">
//         <Container>
//           <Row>
//             <InputStyleDiv>
//               <InputColDiv>
//                 <Col>Mission ID</Col>
//                 <InputBox type="text"></InputBox>
//               </InputColDiv>
//               <InputColDiv>
//                 <Col>Mission Title</Col>
//                 <InputBox type="text"></InputBox>
//               </InputColDiv>
//               <InputColDiv>
//                 <Col>Mission Date</Col>
//                 <InputBox type="text"></InputBox>
//               </InputColDiv>
//               <InputColDiv>
//                 <Col>Mission Type</Col>
//                 <InputBox type="text"></InputBox>
//               </InputColDiv>
//             </InputStyleDiv>
//           </Row>
//           <Row>
//             <Col>Mission Info</Col>
//             <Col>Mission Objectives</Col>
//             <Col>Supporting Players</Col>
//             <Col>Situation</Col>
//           </Row>
//           <Row>
//             <Col>Key Grids</Col>
//             <Col>Fires</Col>
//             <Col>Assets</Col>
//             <Col>Intel</Col>
//           </Row>
//           <Row>
//             <Col>Comms</Col>
//             <Col>Map</Col>
//             <Col>User ID</Col>
//             <Col>Location</Col>
//           </Row>
//         </Container>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }
