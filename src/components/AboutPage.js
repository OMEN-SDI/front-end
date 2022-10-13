import Styled from "styled-components";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import joshPic from "../images/joshPic.png";
import boPic from "../images/boPic.png";
import markPic from "../images/markPic.png";
import ianPic from "../images/ianPic.jpg";

const ContainerDiv = Styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
min-height: 81vh;
flex-direction: row;
row-gap: 5vh;
margin-top: 2vh;
`;

const InputStyleDiv = Styled.div`
display: flex;
flex-direction: row;
`;

const InputColDiv = Styled.div`
display: flex;
flex-direction: column;
margin-left: 5%;
`;

const CeoPic = Styled.img`
height: 10vh;
width: 10vh;
`;
const StyledDiv = Styled.div`
display: flex;
align-items: center;
flex-direction: column;
`;

const TitleDiv = Styled.div`
    width: 97vw;
    height: 15vh;
    border: 4px solid white;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    opacity: 80%;
    font-size: 5vh;
    font-weight: 500;
    font-style: italic;
    color: white;
    
`;

const ceos = [
  {
    name: "Joshua Clodfelter",
    jobTitle: "Agile Software Developer",
    about:
      "Josh works for HMBC/AFLCMC as a software developer at Scott AFB, Illinois.",
    image: joshPic,
    githubLink: "https://github.com/clod7699",
  },
  {
    name: "Bo Bodenbender",
    jobTitle: "Naval Aircrewman",
    about:
      "As a Naval Aircrewman at the Maritime Patrol and Reconnaissance Weapons School Bo fills the roles of weapons and tactics instructor, acoustic instructor, fleet under instruction training instructor and assistant software development program coordinator.",
    image: boPic,
    githubLink: "https://github.com/BoBodenbender",
  },
  {
    name: "Mark Scarna",
    jobTitle: "Agile Software Developer",
    about:
      "As a member of AFLCMC Mark works at HMBC as a software developer. He is currently stationed at Scott AFB, Illinois.",
    image: markPic,
    githubLink: "https://github.com/markscarna",
  },
  {
    name: "Ian Gardocki",
    jobTitle: "Software Developer",
    about:
      "After studying bioengineering at UC-Berkeley, Ian has become a software developer at Wavelength, the digital service of the 350th Spectrum Warfare Wing. In his free time, he enjoys developing software, learning about data science, ML and computational biology, and Muay Thai.",
    image: ianPic,
    githubLink: "https://github.com/IGardocki",
  },
];

export const AboutPage = () => {
  return (
    <StyledDiv>
      <TitleDiv>The Omen Team</TitleDiv>
      <ContainerDiv>
        {ceos.map((ceo) => {
          return (
            <Card style={{ width: "70vw", height: "auto", cursor: "pointer" }}>
              <Card.Header className="bg-dark text-white">
                <h2 style={{ fontSize: "larger" }}>{ceo.name}</h2>
              </Card.Header>
              <Card.Body className="show-grid">
                <Container>
                  <InputStyleDiv>
                    <CeoPic src={ceo.image} />
                    <InputColDiv>
                      <Card.Text>
                        <strong>{ceo.jobTitle}</strong>
                      </Card.Text>
                      <Card.Text>{ceo.about}</Card.Text>
                      <Card.Text>
                        <strong>Github: </strong>{" "}
                        <a href={ceo.githubLink}>{ceo.githubLink}</a>
                      </Card.Text>
                    </InputColDiv>
                  </InputStyleDiv>
                </Container>
              </Card.Body>
            </Card>
          );
        })}
      </ContainerDiv>
    </StyledDiv>
  );
};
