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
      <Form style={{ textAlign: "center", alignItems: "center" }}>
        <Form.Control
          //   style={{ width: "50%" }}
          className="justify-content-center"
        ></Form.Control>
        <input type="text" style={{ width: "25%" }}></input>
      </Form>

      <form style={{ textAlign: "center" }}>
        <input type="text" style={{ width: "25%" }}></input>
      </form>

      {/* <Form
        style={{
          backgroundColor: "#696777",
          textAlign: "center",
          alignItems:
    <Container style={{width: "35%"}} >
      <Form
        style={{
          backgroundColor: "#696777",
          textAlign: "center",
          padding: "20px"
        }}
        onSubmit={(e) => {
          e.preventDefault();
          // Fetch user login info
          // **Truthy"" || **Falsy** userLogin ? 'success' : 'get out of here'
          // ?? Maybe cookie session or back-end
        }}
      >
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            style={{ width: "50%", textAlign: "center", marginLeft: "27%" }}
            className="align-center" type="email"
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
      </Form> */}
    </Container>
  );
};
