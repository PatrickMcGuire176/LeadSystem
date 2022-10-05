import React, { useState } from "react";
import { Form, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  
  const testGet = () => {
    console.log("hit testGet");
    axios.get("http://localhost:8080/api/v1/user/patrick176@gmail.com").then(res=> {
    console.log(res);
    }
  )};

  // const fetchUserProfiles = () => {
  //   axios.get("http://localhost:8080/api/v1/user-profile").then(res=> {
  //     console.log(res);
  //   });
  // }
  // // useEffect(()=> {
  // //   fetchUserProfiles();
  // // }, []);

  return (
    <div className="LoginStyling">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button className="container LoginButtonStyling" type="submit" disabled={!validateForm()}>
          Login
        </Button>
        <Button className="container LoginButtonStyling" onClick={testGet}>
          TestPost
        </Button>
      </Form>
    </div>
  );
}
export default Login