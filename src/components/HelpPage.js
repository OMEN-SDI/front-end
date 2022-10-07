import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Styled from 'styled-components';

const ContainerDiv = Styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
height: 100vh;
flex-direction: row;
`;

const AccordianDiv = Styled.div`
height: fit-content;
margin: 20%;
margin-top: 5%;
margin-bottom: 30%;
padding: 5%;
background-color: rgb(81 79 90 / 86%);
border-radius: 6%;
`

const HeaderDiv = Styled.div`
display: flex;
padding: 0;
margin-top: -1.5%;
width: 100vw;
height: 11%;
justify-content: center;
align-items: center;
color: #5a4ae3;
font-size: 5vh;
font-weight: 700;
background-color: white;
`

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export const HelpPage = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <ContainerDiv>
            <HeaderDiv >FREQUENTLY ASKED QUESTIONS</HeaderDiv>
            <AccordianDiv>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>1. How do I save a mission to my favorites?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        You must click on the mission to see the details where you should find a bookmark icon, click on it, 
                        then, the icon should change to red letting you know that specific mission was saved to your favorites.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
               
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography>2. How do I create a mission?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        After a successful login, click on "Create New Mission" on your dashboard and follow the prompts.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
             
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography>3. How do I delete a mission?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        After a successful login, click on the mission you want to delete on "My Missions" box, after the mission populates click on "Delete Mission".
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography>4. How do I search for a mission?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        After a successful login, type your mission name in the searchbar.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography>5. How do I only see missions for my career field?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        After logging in, open the menu bar on the top right. Then, select missions to only view missions applicable to your job.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography>6. How do I print mission details to take out on a mission?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Easy! Select a mission, and it will take you to a page with detailed information about the mission. 
                        You can print out the details of your mission by selecting the Generate PDF Report button at the top, and then printing the file that downloads to your computer.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography>7. How do I print a map to take out on a mission?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        In that same mission details page, move around, zoom in and out etc. until you get your desired view. 
                        Right click on the map, and save the image. From there, you can easily print that map image to take out to the field with you.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </AccordianDiv>
        </ContainerDiv>
    );
}
