import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Styled from "styled-components";
import { AppContext } from "./AppContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import "../App.css";

const ContainerDiv = Styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5vh;
    align-items: center;
    /* height: 100vh */
    min-height: 100vh;
`;

const InputStyleDiv = Styled.div`
display: flex;
flex-direction: row;
`;

const InputColDiv = Styled.div`
display: flex;
flex-direction: column;
font-size: Large;
`;

export const SearchResults = () => {
  const navigate = useNavigate();
  const { setIndividualMissionDetails, searchResultsArray } =
    useContext(AppContext);

  return (
    <ContainerDiv>
      {searchResultsArray.map((mission) => {
        return (
          <Card
            style={{ width: "70vw", height: "auto", cursor: "pointer" }}
            onClick={() => {
              setIndividualMissionDetails(mission);
              navigate(`/missiondetails/${mission.msn_id}`);
            }}
          >
            <Card.Header className="bg-dark text-white">
              <h2 style={{ fontSize: "larger" }}>{mission.msn_title}</h2>
            </Card.Header>
            <Card.Body className="show-grid">
              <Container>
                <InputStyleDiv>
                  <iframe
                    width="225"
                    height="150"
                    frameBorder="0"
                    src={`https://www.bing.com/maps/embed?h=150&w=200&cp=${mission.latitude}~${mission.longitude}&lvl=11&typ=s&sty=h&src=SHELL&FORM=MBEDV8`}
                    scrolling="no"
                  ></iframe>
                  <InputColDiv>
                    <Card.Text>
                      <strong>Location:</strong> {mission.location}
                    </Card.Text>
                    <Card.Text>
                      <strong>Situation:</strong> {mission.situation}
                    </Card.Text>
                    <Card.Text>
                      <strong>Mission Objectives:</strong> {mission.msn_obj}
                    </Card.Text>
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
