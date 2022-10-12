import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { AppContext } from "./AppContext";
import url from "./URL";

function SignUpModal(props) {
  const [showPassword, setShowPassword] = useState("password");
  const [showMessage, setShowMessage] = useState("");
  const [validated, setValidated] = useState(false);
  const { isLoggedOut } = useContext(AppContext);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  useEffect(() => {
    if (showMessage === "User Created!") {
      props.setLgShow(false);
      props.setAlertSpecifications({
        type: "success",
        alertMessage: "User successfully created!",
      });
      props.setShowAlert(true);
    } else {
      props.setShowAlert(false);
    }
  }, [showMessage]);

  const [user, SetUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
  });

  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g;

  const checkPassword = (password) => {
    if (!passwordRegex.test(password)) {
      return false;
    } else {
      return true;
    }
  };

  const postNewUser = () => {
    let bol = checkPassword(user.password);
    if (bol === true) {
      const URL = `${url}/register`;
      fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
          setShowMessage(data.message);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      setShowMessage("Could not create user!");
    }
  };

  const [meter, setMeter] = React.useState(false);
  const atLeastOneUppercase = /[A-Z]/g; // capital letters from A to Z
  const atLeastOneLowercase = /[a-z]/g; // small letters from a to z
  const atLeastOneNumeric = /[0-9]/g; // numbers from 0 to 9
  const atLeastOneSpecialChar = /[#?!@$%^&*-]/g; // any of the special characters within the square brackets
  const eightCharsOrMore = /.{8,}/g; // eight characters or more

  const passwordTracker = {
    uppercase: user.password.match(atLeastOneUppercase),
    lowercase: user.password.match(atLeastOneLowercase),
    number: user.password.match(atLeastOneNumeric),
    specialChar: user.password.match(atLeastOneSpecialChar),
    eightCharsOrGreater: user.password.match(eightCharsOrMore),
  };

  const passwordStrength = Object.values(passwordTracker).filter(
    (value) => value
  ).length;

  return (
    <>
      <Modal
        size="lg"
        show={props.show}
        onHide={() => props.onHide()}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Create Account
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            noValidate
            validated={validated}
            onChange={(e) => handleSubmit(e)}
          >
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter name"
                value={user.first_name}
                onChange={(e) =>
                  SetUser({ ...user, first_name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter name"
                value={user.last_name}
                onChange={(e) =>
                  SetUser({ ...user, last_name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter email"
                value={user.email}
                onChange={(e) => SetUser({ ...user, email: e.target.value })}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter username"
                value={user.username}
                onChange={(e) => SetUser({ ...user, username: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onFocus={() => setMeter(true)}
                type={showPassword}
                placeholder="Password"
                value={user.password}
                onChange={(e) => SetUser({ ...user, password: e.target.value })}
              />
            </Form.Group>
            {meter && (
              <div>
                <div className="password-strength-meter"></div>
                <div>
                  {passwordStrength < 5 && "Must contain "}
                  {!passwordTracker.uppercase && "uppercase, "}
                  {!passwordTracker.lowercase && "lowercase, "}
                  {!passwordTracker.specialChar && "special character, "}
                  {!passwordTracker.number && "number, "}
                  {!passwordTracker.eightCharsOrGreater &&
                    "eight characters or more"}
                </div>
              </div>
            )}
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Show Password"
                onClick={() =>
                  showPassword === "password"
                    ? setShowPassword("text")
                    : setShowPassword("password")
                }
              />
              <label style={{ color: "red", fontWeight: "bold" }}>
                {showMessage}
              </label>
            </Form.Group>
            <Button
              variant="primary"
              onClick={() => {
                postNewUser();
              }}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <style jsx>
        {`
          .password-strength-meter {
            height: 0.3rem;
            background-color: lightgrey;
            border-radius: 3px;
            margin: 0.5rem 0;
          }

          .password-strength-meter::before {
            content: "";
            background-color: ${[
              "red",
              "orange",
              "#03a2cc",
              "#03a2cc",
              "#0ce052",
            ][passwordStrength - 1] || ""};
            height: 100%;
            width: ${(passwordStrength / 5) * 100}%;
            display: block;
            border-radius: 3px;
            transition: width 0.2s;
          }
        `}
      </style>
    </>
  );
}

export default SignUpModal;
