import React, { useEffect, useState, useContext } from "react";
import Styled from "styled-components";
import { AppContext } from "./AppContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

const CardStyle = Styled.div`
    width: "auto";
    height: "auto";
    backgroundColor: "#696777"
`;

const TableStyle = Styled.div`
width: 50vw;
`;

const PropertyTd = Styled.td`
width: 12vw;
`;

const MissionDetailsDiv = Styled.div`
display: flex;
height: 100vh;
flex-direction: row;
justify-content: center;
column-gap: 20px;
`;

const MapDiv = Styled.div`
diplay: flex;
justify-content: center;
align-items: center;
`;

export const MissionDetails = () => {
  const { individualMissionDetails } = useContext(AppContext);
  //   const dummyMissions = [
  //     { title: "mission-one", msn_lat: "40", msn_lon: "100" },
  //     { title: "mission-two", msn_lat: "60", msn_lon: "99" },
  //     {
  //       title: "mission-three",
  //       msn_lat: "29.473676814427698",
  //       msn_lon: "-98.35372924804688",
  //     },
  //     {
  //       title: "mission-three",
  //       msn_lat: "29.473676814427698",
  //       msn_lon: "-98.35372924804688",
  //     },
  //     {
  //       title: "mission-three",
  //       msn_lat: "29.473676814427698",
  //       msn_lon: "-98.35372924804688",
  //     },
  //     {
  //       title: "mission-three",
  //       msn_lat: "29.473676814427698",
  //       msn_lon: "-98.35372924804688",
  //     },
  //   ];

  return (
    <>
      <h1>{individualMissionDetails.title}</h1>
      <MissionDetailsDiv>
        <TableStyle>
          <Table striped bordered hover variant="dark">
            <tbody>
              <tr>
                <PropertyTd>Mission Title:</PropertyTd>
                <td>Mark</td>
              </tr>
              <tr>
                <PropertyTd>Mission Date: </PropertyTd>
                <td>Mark</td>
              </tr>
              <tr>
                <PropertyTd>Mission Type: </PropertyTd>
                <td>Mark</td>
              </tr>
              <tr>
                <PropertyTd>Fires: </PropertyTd>
                <td>Mark</td>
              </tr>
              <tr>
                <PropertyTd>Mission Objectives: </PropertyTd>
                <td>Mark</td>
              </tr>
              <tr>
                <PropertyTd>Assets: </PropertyTd>
                <td>Mark</td>
              </tr>
              <tr>
                <PropertyTd>Intel: </PropertyTd>
                <td>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </td>
              </tr>
              <tr>
                <PropertyTd>Key Grids: </PropertyTd>
                <td>Mark</td>
              </tr>
              <tr>
                <PropertyTd>Mission Info: </PropertyTd>
                <td>Mark</td>
              </tr>
              <tr>
                <PropertyTd>Supporting Players: </PropertyTd>
                <td>Mark</td>
              </tr>
              <tr>
                <PropertyTd>Situation: </PropertyTd>
                <td>Mark</td>
              </tr>
              <tr>
                <PropertyTd>Comms: </PropertyTd>
                <td>Mark</td>
              </tr>
              <tr>
                <PropertyTd>Lat Long: </PropertyTd>
                <td>
                  {individualMissionDetails.msn_lat}
                  {", "}
                  {individualMissionDetails.msn_lon}
                </td>
              </tr>
              <tr>
                <PropertyTd>User ID: </PropertyTd>
                <td>Mark</td>
              </tr>
              <tr>
                <PropertyTd>Location: </PropertyTd>
                <td>Mark</td>
              </tr>
            </tbody>
          </Table>
        </TableStyle>
        <MapDiv>
          <iframe
            width="600"
            height="500"
            frameborder="0"
            src={`https://www.bing.com/maps/embed?h=500&w=600&cp=${individualMissionDetails.msn_lat}~${individualMissionDetails.msn_lon}&lvl=11&typ=d&sty=h&src=SHELL&FORM=MBEDV8`}
            scrolling="no"
          ></iframe>
        </MapDiv>
      </MissionDetailsDiv>
    </>
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
