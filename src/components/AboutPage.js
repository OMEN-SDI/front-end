import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Styled from "styled-components";
import { AppContext } from "./AppContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import joshPic from '../joshPic.png';
import boPic from '../boPic.png';
import markPic from '../markPic.png';
import ianPic from '../ianPic.jpg';
import githubLogo from '../githubLogo.png';
=======
import boPic from "../images/Bo.JPG";
import joshPic from "../images/Image from iOS.jpg";
import markPic from "../images/MS Picture.jpg";
import ianPic from "../images/github pic.jpg"
>>>>>>> b7d8e013cc1c558da53f9ddf9599b4aff762c229

const ContainerDiv = Styled.div`
display: flex;
flex-wrap: wrap;
<<<<<<< HEAD
justify-content: space-around;
min-height: 81vh;
flex-direction: row;
row-gap: 5vh;
margin-top: 2vh;
=======
justify-content: center;
height: 100vh;
flex-direction: row;
row-gap: 5vh;
margin-top: 5%;

>>>>>>> b7d8e013cc1c558da53f9ddf9599b4aff762c229
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

<<<<<<< HEAD
const CeoPic = Styled.img`
height: 15vh;
width: 15vh;
`

const TitleDiv = Styled.div`
    width: 97vw;
    height: 15vh;
    border: 4px solid white;
    border-radius: 20px;
    margin-top: 2vh;
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

const FooterDiv = Styled.div`
    width: 97vw;
    height: 15vh;
    border: 4px solid white;
    border-radius: 20px;
    margin-top: 2vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    opacity: 80%;
    font-size: 5vh;
    font-weight: 500;
    font-style: italic;
    color: white;
=======
const StyledImage = Styled.img`
height: 150px;
width: 150px;
>>>>>>> b7d8e013cc1c558da53f9ddf9599b4aff762c229
`;

const ceos = [
    {
        name: 'Joshua Clodfelter',
        // jobTitle: 
        about: 'Software Developer',
        image: joshPic
    },
    {
        name: 'Bo Bodenbender',
        about: 'Software Developer',
        image: boPic
    },
    {
        name: 'Mark Scarna',
        about: 'Software Developer',
        image: markPic
    },
    {
        name: 'Ian Gardocki',
        about: 'Software Developer and Bioengineer',
        image: ianPic
    },
]

export const AboutPage = () => {
    return (
        <>
        <TitleDiv>The Omen Team</TitleDiv>
        <ContainerDiv>
<<<<<<< HEAD
           
=======

>>>>>>> b7d8e013cc1c558da53f9ddf9599b4aff762c229
            {ceos.map((ceo) => {
                return (
                    
                    <Card
                    // Match card style to mission cards
                        className="bg-secondary text-white"
<<<<<<< HEAD
                        style={{ width: "40vw", height: "23vh", cursor: "pointer" }}
=======
                        style={{ display: "flex",  cursor: "pointer"  }}
                        // width: "40%", height: "23%",
>>>>>>> b7d8e013cc1c558da53f9ddf9599b4aff762c229
                    >
                        <Card.Header className="bg-dark text-white">
                            {ceo.name}
                        </Card.Header>
                        <Card.Body className="show-grid">
                            <Container>
                                <InputStyleDiv>
<<<<<<< HEAD
                                <CeoPic src={ceo.image} alt={ceo.image}/>
=======
                                <StyledImage src={ceo.image} alt={ceo.image}/>
>>>>>>> b7d8e013cc1c558da53f9ddf9599b4aff762c229
                                 
                                    <InputColDiv>
                                        <Card.Title>{ceo.about}</Card.Title>
                                        <Card.Text>
                                            With supporting text below as a natural lead-in to
                                            additional content.
                                        </Card.Text>
                                        <Card.Text>Bo has a cool mustache.</Card.Text>
                                    </InputColDiv>
                                </InputStyleDiv>
                            </Container>
                        </Card.Body>
                    </Card>
                );
            })}
        </ContainerDiv>
        
        {/* Get footer template online */}
        <FooterDiv><CeoPic src={githubLogo}/></FooterDiv>
        </>
    )
}