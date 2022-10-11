import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Styled from "styled-components";
import { AppContext } from "./AppContext";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import url from "./URL";

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

export function EditMissionModal(props) {
  const {
    userCredentials,
    setMissionsArray,
    setMissionCreatedAlert,
    setMissionAlertMessage,
  } = useContext(AppContext);

  const navigate = useNavigate();

  const [missionTitle, setMissionTitle] = useState(props.mission.msn_title);
  const [missionDate, setMissionDate] = useState(props.mission.msn_date);
  const [missionType, setMissionType] = useState(props.mission.msn_type);
  const [fires, setFires] = useState(props.mission.fires);
  const [missionObjectives, setMissionObjectives] = useState(
    props.mission.msn_obj
  );
  const [assets, setAssets] = useState(props.mission.assets);
  const [intel, setIntel] = useState(props.mission.intel);
  const [keyGrids, setKeyGrids] = useState(props.mission.key_grids);
  const [missionInfo, setMissionInfo] = useState("");
  const [supportingPlayers, setSupportingPlayers] = useState(
    props.mission.supporting_players
  );
  const [situation, setSituation] = useState(props.mission.situation);
  const [comms, setComms] = useState(props.mission.situation);
  const [latitude, setLatitude] = useState(props.mission.latitude);
  const [longitude, setLongitude] = useState(props.mission.longitude);
  const [location, setLocation] = useState(props.mission.location);

  const getMissionData = async () => {
    const res = await fetch(`${url}/missions`);
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
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Mission
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            fetch(`${url}/missions/${props.mission.msn_id}`, {
              method: "PATCH",
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
              .then(() => setMissionAlertMessage("Mission Updated!"))
              .then(() => handleVisible())
              .then(() => props.onHide());
          }}
        >
          <Row>
            <InputStyleRow>
              <InputColDiv>
                <Col>Mission Title</Col>
                <SmallInputBox
                  type="text"
                  value={missionTitle}
                  onChange={(e) => {
                    setMissionTitle(e.target.value);
                  }}
                  required
                ></SmallInputBox>
              </InputColDiv>
              <InputColDiv>
                <Col>Mission Type</Col>
                <Form.Select
                  required
                  aria-label="Default select example"
                  value={missionType}
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
                  value={fires}
                  onChange={(e) => setFires(e.target.value)}
                ></LargeInputArea>
              </InputColDiv>
              <InputColDiv>
                <Col>Mission Objectives</Col>
                <LargeInputArea
                  value={missionObjectives}
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
                  value={assets}
                  onChange={(e) => setAssets(e.target.value)}
                ></LargeInputArea>
              </InputColDiv>
              <InputColDiv>
                <Col>Intel</Col>
                <LargeInputArea
                  value={intel}
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
                  value={keyGrids}
                  onChange={(e) => setKeyGrids(e.target.value)}
                ></MediumInputArea>
              </InputColDiv>
              <InputColDiv>
                <Col>Supporting Players</Col>
                <MediumInputArea
                  value={supportingPlayers}
                  onChange={(e) => setSupportingPlayers(e.target.value)}
                ></MediumInputArea>
              </InputColDiv>
              <InputColDiv>
                <Col>Situation</Col>
                <MediumInputArea
                  value={situation}
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
                  value={comms}
                  onChange={(e) => setComms(e.target.value)}
                ></SmallInputBox>
              </InputColDiv>
              <InputColDiv>
                <Col>Latitude</Col>
                <SmallInputBox
                  type="text"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                ></SmallInputBox>
              </InputColDiv>
              <InputColDiv>
                <Col>Longitude</Col>
                <SmallInputBox
                  type="text"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                ></SmallInputBox>
              </InputColDiv>
              <InputColDiv>
                <Col>Location</Col>
                <SmallInputBox
                  type="text"
                  value={location}
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
