import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function SignUpModal(props) {
  const [user, SetUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState("password");
  const [showMessage, setShowMessage] = useState("");

  const postNewUser = () => {
    const URL = "http://localhost:8080/users";
    fetch(URL, {
      method: "POST", // or 'PUT'
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
  };

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
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={user.first_name}
                onChange={(e) => SetUser({ first_name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
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
                type="text"
                placeholder="Enter username"
                value={user.username}
                onChange={(e) => SetUser({ ...user, username: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type={showPassword}
                placeholder="Password"
                value={user.password}
                onChange={(e) => SetUser({ ...user, password: e.target.value })}
              />
            </Form.Group>
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
              // type="submit"
              onClick={() => {
                postNewUser();
                showMessage === "User Created!"
                  ? (props.show = true)
                  : props.onHide(false);
              }}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignUpModal;
