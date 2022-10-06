import React, { useEffect, useState, useContext } from "react";
import Styled from "styled-components";
import { AppContext } from "./AppContext";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { OverlayTrigger, Popover } from "react-bootstrap";
import Overlay from 'react-bootstrap/Overlay';
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Tooltip from 'react-bootstrap/Tooltip';
import html2canvas from "html2canvas";
import { json } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { DeleteMissionAlert } from "./DeleteMissionAlert";
// import 'html2pdf.js';

const TableStyle = Styled.div`
width: 50vw;
`;

const PropertyTd = Styled.td`
width: 12vw;
`;

const MissionDetailsDiv = Styled.div`
display: flex;
min-height: 100vh;
flex-direction: row;
justify-content: center;
column-gap: 20px;
`;

const MapDiv = Styled.div`
// display: contents;
display: flex;
flex-direction: column;
// justify-content: center;
// align-items: center;
`;

const StyledFavorite = Styled.img`
width: 48px;
height: 48px;`;

export const MissionDetails = () => {
  const {
    individualMissionDetails,
    userCredentials,
    favoriteMissions,
    setFavoriteMissions,
    setMissionsArray,
    favoritesMissionsAlert,
    setFavoritesMissionsAlert,
  } = useContext(AppContext);
  const [isLoading, setLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteMissionId, setFavoriteMissionId] = useState();
  

  useEffect(() => {
    fetch(`http://localhost:8080/favoritemissions/${userCredentials.id}`)
      .then((res) => res.json())
      .then((data) => setFavoriteMissions(data))
      .then(() => favoriteCheck());
  }, []);

  const favoriteCheck = () => {
    favoriteMissions.forEach((mission) => {
      if (mission.msn_id == individualMissionDetails.msn_id) {
        setFavoriteMissionId(mission.favorite_id);
        setIsFavorite(true);
      }
    });
  };

  useEffect(() => {
    favoriteCheck();
  }, [favoriteMissions]);

  const getMissionData = async () => {
    const res = await fetch("http://localhost:8080/missions");
    const data = await res.json();
    console.log(data);
    setMissionsArray(data);
  };

  const simulateNetworkRequest = () => {
    return new Promise((resolve) => setTimeout(resolve, 500));
  }

  const doc = new jsPDF();
  autoTable(doc, { html: "#msn-table" });

  const handlePDFClick = () => setLoading(doc);


    const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        Add As Favorite
      </Tooltip>
    );
  

  const printRef = React.useRef();

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("print.pdf");
  };

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleFavoritePost = async () => {
    await fetch("http://localhost:8080/favoritemissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        msn_id: individualMissionDetails.msn_id,
        user_id: userCredentials.id,
      }),
    })
      .then((res) => res.json())
      .then((data) => setFavoriteMissions(data))
      .then(() => setIsFavorite(true));
  };

  const handleFavoriteDelete = () => {
    fetch("http://localhost:8080/favoritemissions", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        msn_id: individualMissionDetails.msn_id,
        user_id: userCredentials.id,
        favorite_id: favoriteMissionId,
      }),
    })
      .then((res) => res.json())
      .then((data) => setFavoriteMissions(data))
      .then(() => setIsFavorite(false));
  };

  return (
    <>
      <br />
      <MissionDetailsDiv>
        <TableStyle>
          <div className="d-grid gap-2">
            <Button
              style={{ marginBottom: "2%", fontWeight: "bold" }}
              variant="success"
              disabled={isLoading}
              size="lg"
              onClick={!isLoading ? handlePDFClick : doc.save("table.pdf")}
            >
              {isLoading ? "Loading…" : "Generate PDF Report"}
            </Button>
          
          </div>
          <Table id="msn-table" striped bordered hover variant="dark">
            <tbody>
              <tr>
                <PropertyTd>Mission Title:</PropertyTd>
                <td
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                >
                  <h3>{individualMissionDetails.msn_title.toUpperCase()}</h3>
                  
                 <OverlayTrigger
                   placement="top"
                   delay={{show: 300, hide: 400 }}
                   overlay={renderTooltip}>
                 {isFavorite ? (
                    <StyledFavorite
                      src="/images/bookmark.png"
                      onClick={() => handleFavoriteDelete()}
                    />
                  ) : (
                    <StyledFavorite
                      src="/images/bookmarkempty.png"
                      onClick={() => handleFavoritePost()}
                    />
                  )} 

                 </OverlayTrigger>                 
                </td>
              </tr>
              <tr>
                <PropertyTd>
                  <strong>Mission Date:</strong>{" "}
                </PropertyTd>
                <td>{individualMissionDetails.msn_date}</td>
              </tr>
              <tr>
                <PropertyTd>Mission Type: </PropertyTd>
                <td>{individualMissionDetails.msn_type}</td>
              </tr>
              <tr>
                <PropertyTd>Fires: </PropertyTd>
                <td>{individualMissionDetails.fires}</td>
              </tr>
              <tr>
                <PropertyTd>Mission Objectives: </PropertyTd>
                <td>{individualMissionDetails.msn_obj}</td>
              </tr>
              <tr>
                <PropertyTd>Assets: </PropertyTd>
                <td>{individualMissionDetails.assets}</td>
              </tr>
              <tr>
                <PropertyTd>Intel: </PropertyTd>
                <td>{individualMissionDetails.intel}</td>
              </tr>
              <tr>
                <PropertyTd>Key Grids: </PropertyTd>
                <td>{individualMissionDetails.key_grids}</td>
              </tr>
              <tr>
                <PropertyTd>Supporting Players: </PropertyTd>
                <td>{individualMissionDetails.supporting_players}</td>
              </tr>
              <tr>
                <PropertyTd>Situation: </PropertyTd>
                <td>{individualMissionDetails.situation}</td>
              </tr>
              <tr>
                <PropertyTd>Comms: </PropertyTd>
                <td>{individualMissionDetails.comms}</td>
              </tr>
              <tr>
                <PropertyTd>Lat Long: </PropertyTd>
                <td>
                  {individualMissionDetails.latitude}
                  {", "}
                  {individualMissionDetails.longitude}
                </td>
              </tr>
              <tr>
                <PropertyTd>User ID: </PropertyTd>
                <td>{individualMissionDetails.user_id}</td>
              </tr>
              <tr>
                <PropertyTd>Location: </PropertyTd>
                <td>{individualMissionDetails.location}</td>
              </tr>
            </tbody>
          </Table>
        </TableStyle>
        <MapDiv>
          <iframe
            id="map-image"
            ref={printRef}
            width="600"
            height="500"
            frameborder="0"
            src={`https://www.bing.com/maps/embed?h=500&w=600&cp=${individualMissionDetails.latitude}~${individualMissionDetails.longitude}&lvl=11&typ=d&sty=h&src=SHELL&FORM=MBEDV8`}
            scrolling="no"
          ></iframe>

          {userCredentials.id === individualMissionDetails.user_id ? (
            <DeleteMissionAlert msn_id={individualMissionDetails.msn_id} />
          ) : (
            <></>
          )}
        </MapDiv>
      </MissionDetailsDiv>
    </>
  );
};

// this was a attempt at printing the map to PDF. May proves
//useful for reference -Ian

// function getFrameContents(item) {
//   var iFrame = document.getElementById('map-image');
//   var iFrameBody;
//   if (iFrame.contentDocument) { // FF
//       iFrameBody = iFrame.contentDocument.getElementsByTagName('body')[0];
//   } else if (iFrame.contentWindow) { // IE
//       iFrameBody = iFrame.contentWindow.document.getElementsByTagName('body')[0];
//   }
//   //alert(iFrameBody.innerHTML);
//   return iFrameBody.innerHTML
// }
