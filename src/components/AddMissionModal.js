import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Styled from "styled-components";
import { AppContext } from "./AppContext";
import { Form } from "react-bootstrap";

const SmallInputBox = Styled.input`
height: 4vh;
width: 100%;
`;

const InputStyleRow = Styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
column-gap: 1%;

`;

const InputColDiv = Styled.div`
display: flex;
flex-direction: column;
width: 100%;
`;

const MediumInputArea = Styled.textarea.attrs((props) => ({
  type: "textarea",
  rows: "3",
  cols: "31.5",
}))`width: 100%;`;

const LargeInputArea = Styled.textarea.attrs((props) => ({
  type: "textarea",
  rows: "6",
  cols: "63",
}))`width: 100%;`;

const SubmitButtonDiv = Styled.div`
    display: flex;
    justify-content: end;
    margin-top: 1vh;
`;

export function MissionModal(props) {
  const {
    userCredentials,
    setUserCredentials,
    setMissionsArray,
    missionsArray,
    setMissionCreatedAlert,
    setMissionEditedAlert,
  } = useContext(AppContext);

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
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [location, setLocation] = useState("");


  const getMissionData = async () => {
    const res = await fetch("http://localhost:8080/missions");
    const data = await res.json();
    setMissionsArray(data);
  };

  const handleVisible = () => {
    setMissionCreatedAlert(true);
    setTimeout(() => {
      setMissionCreatedAlert(false);
    }, 2000);
  };

  return (
    <Modal size="xl" {...props} aria-labelledby="contained-modal-title-vcenter">
    {/* <Modal size="xl" show={show} onHide={onHide} aria-labelledby="contained-modal-title-vcenter"> */}
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Mission
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            fetch("http://localhost:8080/missions", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                assets: assets,
                comms: comms,
                fires: fires,
                intel: intel,
                key_grids: keyGrids,
                latitude: latitude,
                location: location,
                longitude: longitude,
                msn_obj: missionObjectives,
                msn_title: missionTitle,
                msn_type: missionType,
                situation: situation,
                supporting_players: supportingPlayers,
                user_id: userCredentials.id,
              }),
            })
              .then(() => getMissionData())
              .then(() => handleVisible());
          }}
        >
          <Row>
            <InputStyleRow>
              <InputColDiv>
                <Col>Mission Title</Col>
                <SmallInputBox
                  type="text"
                  // placeholder={mission.msn_title}
                  onChange={(e) => setMissionTitle(e.target.value)}
                  required
                ></SmallInputBox>
              </InputColDiv>
              <InputColDiv>
                <Col>Mission Type</Col>
                <Form.Select
                  required
                  aria-label="Default select example"
                  onChange={(e) => {
                    setMissionType(e.target.value);
                  }}
                >
                  <option value="">Select Mission Type</option>
                  <option value="1">Security Forces</option>
                  <option value="2">Anti-Submarine Warfare</option>
                  <option value="3">Close Air Support</option>
                </Form.Select>
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
                <Col>Latitude</Col>
                <SmallInputBox
                  type="text"
                  onChange={(e) => setLatitude(e.target.value)}
                ></SmallInputBox>
              </InputColDiv>
              <InputColDiv>
                <Col>Longitude</Col>
                <SmallInputBox
                  type="text"
                  onChange={(e) => setLongitude(e.target.value)}
                ></SmallInputBox>
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
          <SubmitButtonDiv>
            <Button type="submit">Submit</Button>
          </SubmitButtonDiv>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
