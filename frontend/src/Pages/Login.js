import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button} from "react-bootstrap";
import { getUserPassword } from "../api/api";
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  
  function LoginUser() { 
    getUserPassword(email)
    .then(res=> {
      if(res.data===password){
        console.log("success")
        navigate("/ContactList");
      } else {
          console.log("Wrong");
        }
      }
    )};


  return (
    <div id="root" className="LoginStyling">
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
        <Button className="container LoginButtonStyling" type="submit" onClick={LoginUser} autoFocus disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}
export default Login