import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Styled from "styled-components";

const SmallInputBox = Styled.input`
width: 20vh;`;

const InputStyleRow = Styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const InputColDiv = Styled.div`
display: flex;
flex-direction: column;
`;
const MediumInputArea = Styled.textarea.attrs((props) => ({
  type: "textarea",
  rows: "3",
  cols: "31.5",
}))``;

const LargeInputArea = Styled.textarea.attrs((props) => ({
  type: "textarea",
  rows: "6",
  cols: "63",
}))``;

export function MissionModal(props) {
  const [missionTitle, setMissionTitle] = useState("");
  const [missionDate, setMissionDate] = useState("");
  const [missionType, setMissionType] = useState("");
  const [fires, setFires] = useState("");
  const [missionObjectives, setMissionObjectives] = useState("");
  const [assets, setAssets] = useState("");
  const [intel, setIntel] = useState("");
  const [keyGrids, setKeyGrids] = useState("");
  const [missionInfo, setMissionInfo] = useState("");
  const [supportingPlayers, setSupportingPlayers] = useState("");
  const [situation, setSituation] = useState("");
  const [comms, setComms] = useState("");
  const [latLong, setLatLong] = useState("");
  const [userId, setUserId] = useState("");
  const [location, setLocation] = useState("");

  return (
    <Modal size="xl" {...props} aria-labelledby="contained-modal-title-vcenter">
      {console.log(missionTitle)};
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Mission
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <InputStyleRow>
              <InputColDiv>
                <Col>Mission ID</Col>
                <SmallInputBox type="text"></SmallInputBox>
              </InputColDiv>
              <InputColDiv>
                <Col>Mission Title</Col>
                <SmallInputBox
                  type="text"
                  onChange={(e) => setMissionTitle(e.target.value)}
                ></SmallInputBox>
              </InputColDiv>
              <InputColDiv>
                <Col>Mission Date</Col>
                <SmallInputBox
                  type="text"
                  onChange={(e) => setMissionDate(e.target.value)}
                ></SmallInputBox>
              </InputColDiv>
              <InputColDiv>
                <Col>Mission Type</Col>
                <SmallInputBox
                  type="text"
                  onChange={(e) => setMissionType(e.target.value)}
                ></SmallInputBox>
              </InputColDiv>
            </InputStyleRow>
          </Row>
          <br></br>
          <Row>
            <InputStyleRow>
              <InputColDiv>
                <Col>Fires</Col>
                <LargeInputArea
                  onChange={(e) => setFires(e.target.value)}
                ></LargeInputArea>
              </InputColDiv>
              <InputColDiv>
                <Col>Mission Objectives</Col>
                <LargeInputArea
                  onChange={(e) => setMissionObjectives(e.target.value)}
                ></LargeInputArea>
              </InputColDiv>
            </InputStyleRow>
          </Row>
          <br></br>
          <Row>
            <InputStyleRow>
              <InputColDiv>
                <Col>Assets</Col>
                <LargeInputArea
                  onChange={(e) => setAssets(e.target.value)}
                ></LargeInputArea>
              </InputColDiv>
              <InputColDiv>
                <Col>Intel</Col>
                <LargeInputArea
                  onChange={(e) => setIntel(e.target.value)}
                ></LargeInputArea>
              </InputColDiv>
            </InputStyleRow>
          </Row>
          <br></br>
          <Row>
            <InputStyleRow>
              <InputColDiv>
                <Col>Key Grids</Col>
                <MediumInputArea
                  onChange={(e) => setKeyGrids(e.target.value)}
                ></MediumInputArea>
              </InputColDiv>
              <InputColDiv>
                <Col>Mission Info</Col>
                <MediumInputArea
                  onChange={(e) => setMissionInfo(e.target.value)}
                ></MediumInputArea>
              </InputColDiv>
              <InputColDiv>
                <Col>Supporting Players</Col>
                <MediumInputArea
                  onChange={(e) => setSupportingPlayers(e.target.value)}
                ></MediumInputArea>
              </InputColDiv>
              <InputColDiv>
                <Col>Situation</Col>
                <MediumInputArea
                  onChange={(e) => setSituation(e.target.value)}
                ></MediumInputArea>
              </InputColDiv>
            </InputStyleRow>
          </Row>
          <br></br>
          <Row>
            <InputStyleRow>
              <InputColDiv>
                <Col>Comms</Col>
                <SmallInputBox
                  type="text"
                  onChange={(e) => setComms(e.target.value)}
                ></SmallInputBox>
              </InputColDiv>
              <InputColDiv>
                <Col>Map</Col>
                <SmallInputBox
                  type="text"
                  onChange={(e) => setLatLong(e.target.value)}
                ></SmallInputBox>
              </InputColDiv>
              <InputColDiv>
                <Col>User Id</Col>
                <SmallInputBox type="text"></SmallInputBox>
              </InputColDiv>
              <InputColDiv>
                <Col>Location</Col>
                <SmallInputBox
                  type="text"
                  onChange={(e) => setLocation(e.target.value)}
                ></SmallInputBox>
              </InputColDiv>
            </InputStyleRow>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => {
          console.log('clicked!')
          fetch('http://localhost:8080/missions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "assets": assets,
              "comms": comms,
              "fires": fires,
              "intel": intel,
              "key_grids": keyGrids,
              "latitude": 40,
              "location": location,
              "longitude": 100,
              // "msn_date": missionDate,
              // "msn_id": 4,
              "msn_obj": missionObjectives,
              "msn_title": missionTitle,
              "msn_type": missionType,
              "situation": situation,
              "supporting_players": supportingPlayers,
              // "user_id":userId,

            })
          })
            .then(res => res.json())
            .then(data => console.log(data))
        }}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}
