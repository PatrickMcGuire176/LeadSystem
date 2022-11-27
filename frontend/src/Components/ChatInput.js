import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const Input = ({ onSendMessage, passedMessages }) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = () => {
    setText("");
    onSendMessage(text);
  };

  //Prevents page from refreshing
  const formSubmit = event => {
    event.preventDefault();
  };

  return (
    <div className="message-input">
      <Form onSubmit={formSubmit}>
        <Form.Group
          className="mb-3"      
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Control
           as="textarea" 
           rows={3}
           value={passedMessages}/>
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="input"          
                placeholder="Enter a message"
                value={text}
                onChange={(e) => onChange(e)}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    onSubmit(text);
                  }
                }}
              />
            </Form.Group>
          </Col>
          <Col className="col-2">
            <Button
              className="ms-auto float-end"
              variant="primary"
              size="md"
              onClick={onSubmit}
            >
              Send
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Input;
