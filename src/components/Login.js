import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Styled from "styled-components";

const ContainerDiv = Styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;

const LoginContainerDiv = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70vh;
    background-color: rgb(105, 103, 119);
    text-align: center;
    padding: 20px;
    height: 40vh;
    margin-bottom: 10%;
`;

export const Login = () => {
  let email = "";
  return (
    <ContainerDiv>
      <LoginContainerDiv>
        <Form
          style={{
            backgroundColor: "#696777",
            textAlign: "center",
            padding: "20px",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            // Fetch user login info
            // **Truthy"" || **Falsy** userLogin ? 'success' : 'get out of here'
            // ?? Maybe cookie session or back-end
          }}
        >
          <Form.Group
            style={{ width: "60vh" }}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control
              style={{ width: "50%", textAlign: "center", marginLeft: "27%" }}
              className="align-center"
              type="email"
              onChange={(e) => console.log(e.target.value)}
              // Current default validation
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              style={{ width: "50%", textAlign: "center", marginLeft: "27%" }}
              type="password"
              onChange={(e) => console.log(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>{" "}
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </LoginContainerDiv>
    </ContainerDiv>
  );
};
