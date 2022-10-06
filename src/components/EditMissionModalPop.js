import { useState } from "react";
import React from "react";
import Styled from "styled-components";
import { EditMissionModal } from "./EditMissionModal"
import editButton from '../dots.png';
import { Tooltip, OverlayTrigger } from "react-bootstrap";

const ButtonsDiv = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const StyledEditButton = Styled.img`
height: 2em;
`


export const EditMissionModalPop = ({ mission }) => {
  const [modalShow, setModalShow] = useState(false);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Edit Mission
    </Tooltip>
  );

  return (
    <ButtonsDiv>
      <OverlayTrigger
        placement="right"
        delay={{ show: 300, hide: 400 }}
        overlay={renderTooltip}
      >
        <StyledEditButton src={editButton} onClick={() => setModalShow(true)} />
      </OverlayTrigger>
      <EditMissionModal show={modalShow} onHide={() => setModalShow(false)} mission={mission} />
    </ButtonsDiv>
  );
}