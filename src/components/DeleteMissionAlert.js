import React, { useState, useContext } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { AppContext } from "./AppContext";
import { useNavigate } from "react-router-dom";

export const DeleteMissionAlert = ({ msn_id }) => {
  const [show, setShow] = useState(false);
  const { setMissionsArray } = useContext(AppContext);
  const navigate = useNavigate();

  const getMissionData = async () => {
    const res = await fetch("http://localhost:8080/missions");
    const data = await res.json();
    setMissionsArray(data);
  };

  return (
    <>
      <Alert show={show} variant="danger">
        <Alert.Heading>Are you sure?</Alert.Heading>
        <div className="d-flex justify-content-end">
          <Button
            variant="outline-success"
            onClick={() => {
              fetch(`http://localhost:8080/missions/${msn_id}`, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
              })
                .then((res) => res.json())
                .then(() => getMissionData())
                .then(() => navigate("/userpage"));
            }}
          >
            Delete Mission
          </Button>
          <Button onClick={() => setShow(false)} variant="outline-success">
            No
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Delete Mission</Button>}
    </>
  );
};
