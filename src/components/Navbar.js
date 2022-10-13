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
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/banner-logo.png";
import DarkModeToggle from "react-dark-mode-toggle";

const NavBarHeader = Styled.div`
display: flex;
justify-content: right;
align-items: center;
height: 8vh;
padding-right: 0.5vw;
background-color: #adabbb;
`;

const BannerImage = Styled.img`
height: 30vh;
display: block;
margin-left: auto;
`;

const SignedInAs = Styled.label`
color: white;
font-weight: 100;
font-style: italic;
`;

export const MissionNavBar = () => {
  const navigate = useNavigate();

  const {
    missionsArray,
    setSearchResultsArray,
    searchBarText,
    setSearchBarText,
    userCredentials,
    isLoggedIn,
    setIsLoggedIn,
    setIsLoggedOut,
    darkMode,
    setDarkMode,
  } = useContext(AppContext);

  const logout = () => {
    Cookies.remove("userCredentials");
    Cookies.remove("isLoggedIn");
    Cookies.remove("userTheme");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      <NavBarHeader>
        <Link to="/">
          <BannerImage src={Logo} alt="Whoops" />
        </Link>
      </NavBarHeader>
      {!isLoggedIn ? (
        <></>
      ) : (
        [false].map((expand) => (
          <Navbar
            key={expand}
            style={{
              backgroundColor: "#514F5A",
              display: "flex",
              flexDirection: "row",
            }}
            collapseOnSelect
            expand="false"
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
                    setSearchResultsArray(
                      missionsArray.filter(
                        (mission) =>
                          mission.msn_title
                            .toLowerCase()
                            .includes(searchBarText.toLowerCase()) ||
                          mission.location
                            .toLowerCase()
                            .includes(searchBarText.toLowerCase())
                      )
                    );
                    navigate("/searchresults");
                    setSearchBarText("");
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
                    }}
                    type="search"
                    placeholder="Search for an existing mission"
                    className="me-2"
                    aria-label="Search"
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  />
                  <Button
                    variant="outline-success"
                    type="submit"
                    style={{
                      backgroundColor: "rgb(90 74 227)",
                      color: "black",
                      borderColor: "rgb(90 74 227)",
                    }}
                  >
                    Search
                  </Button>
                </Form>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1vh",
                }}
              >
                <DarkModeToggle
                  onChange={() => {
                    return darkMode === "linear-gradient(#57606f, #d3d3d3)"
                      ? (setDarkMode("linear-gradient(#262a30, #000011)"),
                        Cookies.set(
                          "userTheme",
                          "linear-gradient(#262a30, #000011)"
                        ))
                      : (setDarkMode("linear-gradient(#57606f, #d3d3d3)"),
                        Cookies.set(
                          "userTheme",
                          "linear-gradient(#57606f, #d3d3d3)"
                        ));
                  }}
                  checked={darkMode === "linear-gradient(#262a30, #000011)"}
                  size={60}
                />
                <SignedInAs>
                  Signed in as: {userCredentials.username}
                </SignedInAs>
                <Navbar.Brand href="#"></Navbar.Brand>
                <Navbar.Toggle
                  style={{ backgroundColor: "rgb(90 74 227)" }}
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    >
                      Online Mission Planning Environment
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link as={Link} to="userpage" eventKey="1">
                        Dashboard
                      </Nav.Link>
                      <NavDropdown
                        title="Missions"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                      >
                        <NavDropdown.Item>
                          <Nav.Link
                            as={Link}
                            to="/searchresults"
                            eventKey="1"
                            onClick={() => {
                              setSearchResultsArray(
                                missionsArray.filter(
                                  (msn) => msn.msn_type === 1
                                )
                              );
                              navigate("/searchresults");
                            }}
                          >
                            Security Forces
                          </Nav.Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          <Nav.Link
                            as={Link}
                            to="/searchresults"
                            eventKey="2"
                            onClick={() => {
                              setSearchResultsArray(
                                missionsArray.filter(
                                  (msn) => msn.msn_type === 2
                                )
                              );
                              navigate("/searchresults");
                            }}
                          >
                            Anti-Submarine Warfare
                          </Nav.Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          <Nav.Link
                            as={Link}
                            to="/searchresults"
                            eventKey="3"
                            onClick={() => {
                              setSearchResultsArray(
                                missionsArray.filter(
                                  (msn) => msn.msn_type === 3
                                )
                              );
                              navigate("/searchresults");
                            }}
                          >
                            Close Air Support
                          </Nav.Link>
                        </NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link as={Link} to="help" eventKey="2">
                        Help
                      </Nav.Link>
                      <Nav.Link as={Link} to="about" eventKey="3">
                        About
                      </Nav.Link>
                      <Nav.Link
                        as={Link}
                        to="userpage"
                        eventKey="4"
                        onClick={() => {
                          setIsLoggedOut(true);
                          logout();
                        }}
                      >
                        Log Out
                      </Nav.Link>
                    </Nav>
                    <Form className="d-flex"></Form>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </div>
            </Container>
          </Navbar>
        ))
      )}
    </>
  );
};
