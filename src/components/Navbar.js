import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import Styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NavBarHeader = Styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 8vh;
padding-right: 0.5vw;
background-color: #696777;
`;

const BannerImage = Styled.img`
height: 10vh;
display: block;
margin-left: auto;
`;

const LogoImage = Styled.img`
height: 7vh;
display: block;
margin-left: auto;
`;

export const MissionNavBar = () => {

  const navigate = useNavigate();
  const {
    individualMissionDetails,
    setIndividualMissionDetails,
    missionsArray,
    setMissionsArray,
    usersArray,
    setUsersArray,
    searchResultsArray,
    setSearchResultsArray,
    searchBarText,
    setSearchBarText,
  } = useContext(AppContext);

  return (
    <>
      <NavBarHeader>
        <BannerImage src="./images/banner-logo.png" alt="Whoops" />
        <LogoImage src="./images/dragon.png" alt="Whoops" />
      </NavBarHeader>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          style={{
            backgroundColor: "#514F5A",
            display: "flex",
            flexDirection: "row",
          }}
          expand={expand}
          className="mb-3"
        >
          <Container fluid>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSearchBarText(e.target.value);
                  console.log(searchBarText);
                  setSearchResultsArray(
                    missionsArray.filter((mission) =>
                      mission.msn_title.toLowerCase().includes(searchBarText)
                    )
                  );

                  console.log(
                    missionsArray.filter((mission) =>
                      mission.msn_title.toLowerCase().includes(searchBarText)
                    )
                  );
                  navigate('/dummypath');
                }}
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Form.Control
                  style={{ width: "22vw" }}
                  value={searchBarText}
                  onChange={(e) => {
                    setSearchBarText(e.target.value);
                    console.log(e.target.value);
                  }}
                  type="search"
                  placeholder="Search for an existing mission"
                  className="me-2"
                  aria-label="Search"
                  onSubmit={(e) => {
                    e.preventDefault();
                    console.log("form submitted");
                  }}
                />
                <Button
                  variant="outline-success"
                  type="submit"
                  style={{
                    backgroundColor: "#519bff",
                    color: "black",
                    borderColor: "#519bff",
                  }}
                >
                  Search
                </Button>
              </Form>
            </div>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle
              style={{ backgroundColor: "#519BFF" }}
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Mission Planner
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/userpage">Home</Nav.Link>
                  <Nav.Link href="/help">Help</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="#action2">Log Out</Nav.Link>
                </Nav>
                <Form className="d-flex"></Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};
