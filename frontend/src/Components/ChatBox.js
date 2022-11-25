import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const LoginForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  let handleUserNameChange = (event) => setUsername(event.target.value);

  let handleSubmit = () => {
    onSubmit(username);
  };

  return (
    <div>
      <Form id="AddContactForm">
        <fieldset>
          <Form.Group className="mb-3" controlId="">
            <Form.Label className="required">First Name</Form.Label>
            <Form.Control
              label="Type your username"
              placeholder="Username"
              onChange={handleUserNameChange}
              type="input"
              style={{ height: "30px", width: "80%" }}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  handleSubmit();
                }
              }}
            />
          </Form.Group>
        </fieldset>
      </Form>

      <br />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Login
      </Button>
    </div>
  );
};

export default LoginForm;
