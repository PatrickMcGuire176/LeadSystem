import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { addContactCompany } from "../api/api";
import {
  AlertFullSuccess,
  AlertFullFailure,
  AlertPartialSuccess,
} from "../Components/Alert";

function AddContact({onCancelClick, updateTableDataProp, passedFirstName, passedLastName, passedEmail, passedCompany}) {
  const [firstName, setFirstName] = useState(passedFirstName);
  const [lastName, setLastName] = useState(passedLastName);
  const [email, setEmail] = useState(passedEmail);
  const [companyName, setCompany] = useState(passedCompany);
  const [notes, setNotes] = useState("asdf");
  const [toggleAlert, setToggleAlert] = useState(false);
  const [companyAddSuccess, setCompanyAddSuccess] = useState(null);
  const [contactAddSuccess, setContactAddSuccess] = useState(null);
  const [
    contactCompanyPostResponseMessage,
    setContactCompanyPostResponseMessage,
  ] = useState("");

  useEffect(() => {
    setFirstName(passedFirstName);
    setLastName(passedLastName);
    setEmail(passedEmail);
    setCompany(passedCompany)
  
    console.log("it ran");
  }, [passedFirstName, passedLastName, passedEmail, passedCompany] );

  const buildContactCompanyPost = () => {
    if (!firstName || !lastName || !email || !companyName || !notes) {
      return null;
    }

    const headers = addContactCompany(
      firstName,
      lastName,
      email,
      companyName,
      notes
    ).then((response) => {
      if (response.headers.company === "Added") {
        setCompanyAddSuccess(true);
      }
      if (response.headers.contact === "Added") {
        setContactAddSuccess(true);
      }
      if (response.headers.company === "Not Added") {
        setCompanyAddSuccess(false);
      }
      if (response.headers.contact === "Not Added") {
        setContactAddSuccess(false);
      }
      setContactCompanyPostResponseMessage(response.data);
    }).then(() => {
      updateTableDataProp();
    });
  };
  return (
    <div>
      <Form id="AddContactForm">
        <fieldset>
          <Form.Group className="mb-3" controlId="addContactFormFirstName">
            <Form.Label className="required">First Name</Form.Label>
            <Form.Control
              type="input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter First Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="addContactFormLastName">
            <Form.Label className="required">Last Name</Form.Label>
            <Form.Control
              type="input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter Last Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="addContactFormEmail">
            <Form.Label className="required">Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="addContactFormCompany">
            <Form.Label className="required">Company</Form.Label>
            <Form.Control
              type="input"
              value={companyName}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Enter Company"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="addContactFormNotes">
            <Form.Label className="required">Notes</Form.Label>
            <Form.Control
              as="textarea"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Enter Notes"
              required
            />
          </Form.Group>

          {contactAddSuccess === true && companyAddSuccess === true && (
            <div>
              <AlertFullSuccess
                message="Contact and Company saved successfully"
                apiMessage={contactCompanyPostResponseMessage}
                hideAlertCallback={setContactAddSuccess}
              ></AlertFullSuccess>
            </div>
          )}

          {contactAddSuccess === true && companyAddSuccess === false && (
            <div>
              <AlertPartialSuccess
                message="Partial"
                apiMessage={contactCompanyPostResponseMessage}
                hideAlertCallback={setContactAddSuccess}
              ></AlertPartialSuccess>
            </div>
          )}

          {contactAddSuccess === false && companyAddSuccess === true && (
            <div>
              <AlertPartialSuccess
                message="Partial"
                apiMessage={contactCompanyPostResponseMessage}
                hideAlertCallback={setContactAddSuccess}
              ></AlertPartialSuccess>
            </div>
          )}

          {contactAddSuccess === false && companyAddSuccess === false && (
            <div>
              <AlertFullFailure
                message="Contact and Company not saved"
                apiMessage={contactCompanyPostResponseMessage}
                hideAlertCallback={setContactAddSuccess}
              ></AlertFullFailure>
            </div>
          )}

          <Button
            style={{ marginLeft: "10px" }}
            variant="success"
            onClick={() => {
              buildContactCompanyPost();
            }}
          >
            Add
          </Button>

          <Button
            style={{ marginLeft: "10px" }}
            variant="danger"
            onClick={onCancelClick}
          >
            Cancel
          </Button>
        </fieldset>
      </Form>
    </div>
  );
}

export default AddContact;
