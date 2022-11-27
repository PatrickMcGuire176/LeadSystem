import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

export function AlertFullSuccess({ message, apiMessage, hideAlertCallback }) {
    const [thisApiMessage, setApiMessage] = useState(apiMessage);
  return (
    <div>
      <Alert variant="success alert-success">
        <button type="button" className="close" onClick={hideAlertCallback}>
          X
        </button>
        <Alert.Heading>{message}!</Alert.Heading>
        <Alert.Heading>{thisApiMessage}!</Alert.Heading>
      </Alert>
    </div>
  );
}

export function AlertPartialSuccess ({ message, apiMessage, hideAlertCallback }) {
    const [thisMessage, setMessage] = useState(message);
    const [thisApiMessage, setApiMessage] = useState(apiMessage);
  
    return (
      <div>
          <Alert variant="warning alert-warning">
          <button type="button" className="close" onClick={hideAlertCallback}>
            X
          </button>
          <Alert.Heading>{thisMessage}!</Alert.Heading>
          <Alert.Heading>{thisApiMessage}!</Alert.Heading>
        </Alert>
      </div>
    );
  }

export function AlertFullFailure({ message, apiMessage, hideAlertCallback }) {
  const [thisMessage, setMessage] = useState(message);
  const [thisApiMessage, setApiMessage] = useState(apiMessage);

  return (
    <div>
      <Alert variant="danger alert-danger">
        <button type="button" className="close" onClick={hideAlertCallback}>
          X
        </button>
        <Alert.Heading>{thisMessage}!</Alert.Heading>
        <Alert.Heading>{thisApiMessage}!</Alert.Heading>
      </Alert>
    </div>
  );
}
