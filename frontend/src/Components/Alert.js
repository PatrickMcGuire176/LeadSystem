import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

export function AlertFullSuccess({ message, apiMessage, hideAlertCallback }) {
    const [thisMessage, setMessage] = useState(message);
    const [thisApiMessage, setApiMessage] = useState(apiMessage);
    const [childState, setChildState] = useState(0);
  return (
    <div>
      <Alert variant="success alert-success">
        <button type="button" className="close" onClick={hideAlertCallback}>
          X
        </button>
        {/* <p className="float-end" style={{marginTop:"-15px"}}>X</p> */}
        <Alert.Heading>{message}!</Alert.Heading>
        <Alert.Heading>{thisApiMessage}!</Alert.Heading>
      </Alert>
    </div>
  );
}

export function AlertPartialSuccess ({ message, apiMessage, hideAlertCallback }) {
    const [thisMessage, setMessage] = useState(message);
    const [thisApiMessage, setApiMessage] = useState(apiMessage);
    const [childState, setChildState] = useState(0);
  
    const onSliderChangeHandler = (e) => {
      //pass slider's event value to child's state
      setChildState(e.target.value);
    };
  
    return (
      <div>
          <Alert variant="warning alert-warning">
          <button type="button" className="close" onClick={hideAlertCallback}>
            X
          </button>
          {/* <p className="float-end" style={{marginTop:"-15px"}}>X</p> */}
          <Alert.Heading>{thisMessage}!</Alert.Heading>
          <Alert.Heading>{thisApiMessage}!</Alert.Heading>
        </Alert>
      </div>
    );
  }

export function AlertFullFailure({ message, apiMessage, hideAlertCallback }) {
  const [thisMessage, setMessage] = useState(message);
  const [thisApiMessage, setApiMessage] = useState(apiMessage);
  const [childState, setChildState] = useState(0);

  const onSliderChangeHandler = (e) => {
    //pass slider's event value to child's state
    setChildState(e.target.value);
  };

  return (
    <div>
      <Alert variant="danger alert-danger">
        <button type="button" className="close" onClick={hideAlertCallback}>
          X
        </button>
        {/* <p className="float-end" style={{marginTop:"-15px"}}>X</p> */}
        <Alert.Heading>{thisMessage}!</Alert.Heading>
        <Alert.Heading>{thisApiMessage}!</Alert.Heading>
      </Alert>
    </div>
  );
}
