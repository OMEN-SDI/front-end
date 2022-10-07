import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Styled from "styled-components";
import { AppContext } from "./AppContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import boPic from "../images/Bo.JPG";
import joshPic from "../images/Image from iOS.jpg";
import markPic from "../images/MS Picture.jpg";
import ianPic from "../images/github pic.jpg"

const ContainerDiv = Styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
height: 100vh;
flex-direction: row;
row-gap: 5vh;
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

const StyledImage = Styled.img`
height: 150px;
width: 150px;
`;

const ceos = [
    {
        name: 'Joshua Clodfelter',
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
        <ContainerDiv>

            {ceos.map((ceo) => {
                return (
                    <Card
                        className="bg-secondary text-white"
                        style={{ display: "flex",  cursor: "pointer"  }}
                        // width: "40%", height: "23%",
                    >
                        <Card.Header className="bg-dark text-white">
                            {ceo.name}
                        </Card.Header>
                        <Card.Body className="show-grid">
                            <Container>
                                <InputStyleDiv>
                                <StyledImage src={ceo.image} alt={ceo.image}/>
                                 
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
    )
}