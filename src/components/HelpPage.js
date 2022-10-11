import * as React from "react";
import Styled from "styled-components";
import { CDBAccordion, CDBContainer } from "cdbreact";
import "../App.css";

const ContainerDiv = Styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
height: 76vh;
flex-direction: row;
`;

const AccordionDiv = Styled.div`
height: fit-content;
margin: 20%;
margin-top: 5%;
margin-bottom: 30%;
padding: 5%;
background-color: rgb(81 79 90 / 86%);
border-radius: 2%;
`;

export const HelpPage = () => {
  const data = [
    {
      title: "How do I save a mission to my favorites?",
      content:
        "  You must click on the mission to see the details where you should find a bookmark icon, click on it, then, the icon should change to red letting you know that specific mission was saved to your favorites. ",
    },
    {
      title: "How do I create a mission?",
      content: ` After a successful login, click on "Create New Mission" on your dashboard and follow the prompts.`,
    },
    {
      title: "How do I delete a mission?",
      content: ` After a successful login, click on the mission you want to delete on "My Missions" box, after the mission populates click on "Delete Mission".`,
    },
    {
      title: "How do I search for a mission?",
      content: ` After a successful login, type your mission name in the searchbar.`,
    },
    {
      title: "How do I only see missions for my career field?",
      content: ` After logging in, open the menu bar on the top right. Then, select missions to only view missions applicable to your job.`,
    },
    {
      title: "How do I print mission details to take out on a mission?",
      content: ` Easy! Select a mission, and it will take you to a page with detailed information about the mission. You can print out the details of your mission by selecting the Generate PDF Report button at the top, and then printing the file that downloads to your computer.`,
    },
    {
      title: "How do I print a map to take out on a mission?",
      content: ` In that same mission details page, move around, zoom in and out etc. until you get your desired view. Right click on the map, and save the image. From there, you can easily print that map image to take out to the field with you.`,
    },
  ];
  return (
    <ContainerDiv>
      <AccordionDiv>
        <CDBAccordion data={data} />
      </AccordionDiv>
    </ContainerDiv>
  );
};
