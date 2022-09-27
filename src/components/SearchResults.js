import React, { useEffect, useState, useContext } from "react";
import Styled from "styled-components";
import { MissionCard } from "./MissionCard";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ContainerDiv = Styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    row-gap: 5vh;
    align-items: center;
`;

export const SearchResults = () => {
    const dummyMissions =
        [
            { title: "mission-one", msn_lat: "1.22324", msn_lon: "3.432" },
            { title: "mission-two", msn_lat: "151", msn_lon: "142" },
            { title: "mission-three", msn_lat: "29.473676814427698", msn_lon: "-98.35372924804688" }
        ]

    return (
        <ContainerDiv>
            {dummyMissions.map((mission => {
                return (
                    <Card style={{ width: "60%", height: "20%" }}>
                        <Card.Header>{mission.title}</Card.Header>
                        <Card.Body>
                            <div>
                                <iframe width="325" height="280" frameborder="0" src={`https://www.bing.com/maps/embed?h=280&w=325&cp=29.473676814427698~-98.35372924804688&lvl=11&typ=s&sty=h&src=SHELL&FORM=MBEDV8`} scrolling="no">
                                </iframe>
                                {/* <div style="white-space: nowrap; text-align: center; width: 325px; padding: 6px 0;"></div> */}
                            </div>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            }))}
        </ContainerDiv>
    );
};
