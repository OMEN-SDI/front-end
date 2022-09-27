import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Styled from "styled-components";

const InputBox = Styled.input`
width: 20vh;`;

const InputStyleDiv = Styled.div`
display: flex;
flex-direction: row;
`;

const InputColDiv = Styled.div`
display: flex;
flex-direction: column;
`;

export function MissionModal(props) {
  return (
    <Modal size="xl" {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Mission
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <InputStyleDiv>
            <Row>
              <InputColDiv>
                <Col>Mission ID</Col>
                <InputBox type="text"></InputBox>
              </InputColDiv>
              <InputColDiv>
                <Col>Mission Title</Col>
                <InputBox type="text"></InputBox>
              </InputColDiv>
              <InputColDiv>
                <Col>Mission Date</Col>
                <InputBox type="text"></InputBox>
              </InputColDiv>
              <InputColDiv>
                <Col>Mission Type</Col>
                <InputBox type="text"></InputBox>
              </InputColDiv>
            </Row>
          </InputStyleDiv>
          <Row>
            <Col>Mission Info</Col>
            <Col>Mission Objectives</Col>
            <Col>Supporting Players</Col>
            <Col>Situation</Col>
          </Row>
          <Row>
            <Col>Key Grids</Col>
            <Col>Fires</Col>
            <Col>Assets</Col>
            <Col>Intel</Col>
          </Row>
          <Row>
            <Col>Comms</Col>
            <Col>Map</Col>
            <Col>User ID</Col>
            <Col>Location</Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
