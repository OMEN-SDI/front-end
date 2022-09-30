import React, { useEffect, useState, useContext } from "react";
import Styled from "styled-components";
import { AppContext } from "./AppContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Pdf from "react-to-pdf";

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
      <br />
      <MissionDetailsDiv>
        <TableStyle>
          <Table striped bordered hover variant="dark">
            <tbody>
              <tr>
                <PropertyTd>Mission Title:</PropertyTd>
                <td><h3>{individualMissionDetails.msn_title.toUpperCase()}</h3></td>
              </tr>
              <tr>
                <PropertyTd><strong>Mission Date:</strong> </PropertyTd>
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
                <td>
                {individualMissionDetails.intel}
                </td>
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
                <td>{individualMissionDetails.situtation}</td>
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
            width="600"
            height="500"
            frameborder="0"
            src={`https://www.bing.com/maps/embed?h=500&w=600&cp=${individualMissionDetails.latitude}~${individualMissionDetails.longitude}&lvl=11&typ=d&sty=h&src=SHELL&FORM=MBEDV8`}
            scrolling="no"
          ></iframe>
        </MapDiv>
      </MissionDetailsDiv>
    </>
  );
};


// import React from "react";
// import ReactDOM from "react-dom";
// import Pdf from "react-to-pdf";

// import "./styles.css";
// const ref = React.createRef();

// function App() {
//   return (
//     <div className="App">
//       <Pdf targetRef={ref} filename="code-example.pdf">
//         {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
//       </Pdf>
//       <div ref={ref}>
//         <h1>Hello CodeSandbox</h1>
//         <h2>Start editing to see some magic happen!</h2>
//         <table>
//           <thead> Header of table</thead>
//           <tbody>
//             <td>line 1</td>
//             <td>line 2</td>
//             <td>line 3</td>
//           </tbody>
//           <div>
//             <iframe
//               title="title"
//               width="200"
//               height="100"
//               frameborder="0"
//               src={`https://www.bing.com/maps/embed?h=500&w=600&cp=40~100&lvl=11&typ=d&sty=h&src=SHELL&FORM=MBEDV8`}
//               scrolling="no"
//             ></iframe>
//           </div>
//         </table>
//       </div>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

