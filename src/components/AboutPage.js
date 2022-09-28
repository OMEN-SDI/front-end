import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Styled from "styled-components";
import { AppContext } from "./AppContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

const ContainerDiv = Styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
height: 85vh;
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

const ceos = [
    {
        name: 'Joshua Clodfelter',
        about: 'Software Developer',
        image: 'imagehere'
    },
    {
        name: 'Bo Bodenbender',
        about: 'Software Developer',
        image: 'imagehere'
    },
    {
        name: 'Mark Scarna',
        about: 'Software Developer',
        image: 'imagehere'
    },
    {
        name: 'Ian Gardocki',
        about: 'Software Developer and Bioengineer',
        image: 'imagehere'
    },
]

export const AboutPage = () => {
    return (
        <ContainerDiv>

            {/* <div> This is the about page. Bo has a cool mustache.</div> */}
            {ceos.map((ceo) => {
                return (
                    <Card
                        className="bg-secondary text-white"
                        style={{ width: "40%", height: "23%", cursor: "pointer" }}
                    >
                        <Card.Header className="bg-dark text-white">
                            {ceo.name}
                        </Card.Header>
                        <Card.Body className="show-grid">
                            <Container>
                                <InputStyleDiv>
                                <img src={ceo.image} alt={ceo.image}/>
                                 
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