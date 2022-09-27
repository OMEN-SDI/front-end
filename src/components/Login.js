import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

export const Login = () => {
  let email = "";
  return (
    <Container>
      <Form
        style={{
          backgroundColor: "#696777",
          textAlign: "center",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          // Fetch user login info
          // **Truthy"" || **Falsy** userLogin ? 'success' : 'get out of here'
          // ?? Maybe cookie session or back-end
          console.log(e.target.value);
        }}
      >
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          style={{ alignItems: "center" }}
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            style={{ width: "25%", textAlign: "center" }}
            type="email"
            onChange={(e) => console.log(e.target.value)}
            // Current default validation
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">Bo has a cool mustache</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            style={{ width: "25%", textAlign: "center" }}
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
    </Container>
  );
};
