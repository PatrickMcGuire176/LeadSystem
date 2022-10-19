import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

export function AlertSuccess({ message }) {
  const [thisShow, setShow] = useState(false);
  const [thisMessage, setMessage] = useState(message);
  const [thisSuccess, setSuccess] = useState(false);
  return (
    <div>
      <Alert variant="success alert-success">
        <Alert.Heading>{thisMessage}!</Alert.Heading>
      </Alert>
    </div>
  );
}

export function AlertFailure({ message }) {
    const [thisShow, setShow] = useState(false);
    const [thisMessage, setMessage] = useState(message);
    const [thisSuccess, setSuccess] = useState(false);
    return (
      <div>
        <Alert variant="success alert-danger">
        <Alert.Heading>{thisMessage}!</Alert.Heading>
        </Alert>
      </div>
    );
  }
