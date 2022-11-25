import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Input = ({ onSendMessage }) => {
  const [text, setText] = useState("");

  let onChange = (e) => {
    setText(e.target.value);
  };

  let onSubmit = () => {
    setText("");
    onSendMessage(text);
  };

  return (
    <div className="message-input">
      <Form id="AddContactForm">
        <fieldset>
          <Form.Group className="mb-3" controlId="Chat">
            <Form.Label className="required">First Name</Form.Label>
            <Form.Control            
              type="input"
              value={text}
              label="Type your message here..."
              placeholder="Enter your message and press ENTER"
              required
              style={{ height: "30px", width: "80%" }}

              onChange={(e) => onChange(e)}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  onSubmit(text);
                }
              }}
            />
          </Form.Group>
        </fieldset>
      </Form>
      <Button variant="contained" color="primary" onClick={onSubmit}>
        Send
      </Button>
    </div>
  );
};

export default Input;
