import React, { useRef, useContext, useState } from "react";
import emailjs from "@emailjs/browser";
import { AppContext } from "./AppContext";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

export function EmailAlert() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Alert
        show={show}
        variant="success"
        style={{ display: "flex", flexDirection: "column", gap: "0.5vh" }}
      >
        <Alert.Heading>Send as Email</Alert.Heading>
        <ContactUs />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Share</Button>}
    </>
  );
}

export const ContactUs = () => {
  const form = useRef();
  const { individualMissionDetails, userCredentials } = useContext(AppContext);

  const renderMsnType = (type) => {
    if (type === 1) {
      return "Security Forces";
    }
    if (type === 2) {
      return "Anti-Submarine Warfare";
    }
    if (type === 3) {
      return "Close Air Support";
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_83g6ygh",
        "template_oz8qoke",
        form.current,
        "uH1Ov1cZ9L2Qg8ouO"
      )
      .then(
        (result) => {
          alert("Email successfully sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        columnGap: "1vh",
        marginBottom: "0.2vh",
      }}
    >
      <label style={{ color: "black" }}>Name</label>
      <input type="text" name="from_name" />
      <label style={{ color: "black" }}>Email</label>
      <input type="email" name="reply_to" required />
      <textarea
        name="msn_title"
        value={individualMissionDetails.msn_title}
        style={{ display: "none" }}
      />
      <textarea
        name="msn_date"
        value={individualMissionDetails.msn_date}
        style={{ display: "none" }}
      />
      <textarea
        name="msn_type"
        value={renderMsnType(individualMissionDetails.msn_type)}
        style={{ display: "none" }}
      />
      <textarea
        name="fires"
        value={individualMissionDetails.fires}
        style={{ display: "none" }}
      />
      <textarea
        name="msn_obj"
        value={individualMissionDetails.msn_obj}
        style={{ display: "none" }}
      />
      <textarea
        name="assets"
        value={individualMissionDetails.assets}
        style={{ display: "none" }}
      />
      <textarea
        name="intel"
        value={individualMissionDetails.intel}
        style={{ display: "none" }}
      />
      <textarea
        name="key_grids"
        value={individualMissionDetails.key_grids}
        style={{ display: "none" }}
      />
      <textarea
        name="supporting_players"
        value={individualMissionDetails.supporting_players}
        style={{ display: "none" }}
      />
      <textarea
        name="situation"
        value={individualMissionDetails.situation}
        style={{ display: "none" }}
      />
      <textarea
        name="comms"
        value={individualMissionDetails.comms}
        style={{ display: "none" }}
      />
      <textarea
        name="latitude"
        value={individualMissionDetails.latitude}
        style={{ display: "none" }}
      />
      <textarea
        name="longitude"
        value={individualMissionDetails.longitude}
        style={{ display: "none" }}
      />
      <textarea
        name="username"
        value={userCredentials.username}
        style={{ display: "none" }}
      />
      <textarea
        name="location"
        value={individualMissionDetails.location}
        style={{ display: "none" }}
      />

      <input type="submit" value="Send" />
    </form>
  );
};
