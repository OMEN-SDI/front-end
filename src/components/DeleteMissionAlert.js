import React, { useState, useContext } from "react";
import { AppContext } from "./AppContext";
import { useNavigate } from "react-router-dom";
import { Alert, Button } from "react-bootstrap";
import url from "./URL";

export const DeleteMissionAlert = ({ msn_id }) => {
  const [show, setShow] = useState(false);
  const { setMissionsArray } = useContext(AppContext);
  const navigate = useNavigate();

  const getMissionData = async () => {
    const res = await fetch(`${url}/missions`);
    const data = await res.json();
    setMissionsArray(data);
  };

  return (
    <>
      <Alert show={show} variant="danger">
        <Alert.Heading>Are you sure?</Alert.Heading>
        <div className="d-flex justify-content-end">
          <Button
            variant="outline-danger"
            onClick={() => {
              fetch(`${url}/missions/${msn_id}`, {
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
