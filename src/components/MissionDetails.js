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
    background-color: "#696777";
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

const MissionDetailsHeader = Styled.h1`
  text-align: center;
  color: white;
`;

export const MissionDetails = () => {
  const { individualMissionDetails } = useContext(AppContext);
  return (
    <>
      <MissionDetailsHeader>
        {individualMissionDetails.title.toUpperCase()}
      </MissionDetailsHeader>
      <br />
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
