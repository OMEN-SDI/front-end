import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Styled from "styled-components";
import { AppContext } from "./AppContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import joshPic from '../joshPic.png';
import boPic from '../boPic.png';
import markPic from '../markPic.png';
import ianPic from '../ianPic.jpg';
import githubLogo from '../githubLogo.png';

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
           
            {ceos.map((ceo) => {
                return (
                    
                    <Card
                    // Match card style to mission cards
                        className="bg-secondary text-white"
                        style={{ width: "40vw", height: "23vh", cursor: "pointer" }}
                    >
                        <Card.Header className="bg-dark text-white">
                            {ceo.name}
                        </Card.Header>
                        <Card.Body className="show-grid">
                            <Container>
                                <InputStyleDiv>
                                <CeoPic src={ceo.image} alt={ceo.image}/>
                                 
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