import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
// import {addContactCompany,getAllContacts} from "../api/api";
import { addContactCompany } from "../api/api";
import { AlertSuccess, AlertFailure } from "../Components/Alert";

function AddContact({ onAddClick, onCancelClick }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompany] = useState("");
  const [notes, setNotes] = useState("");
  const [toggleAlert, setToggleAlert] = useState(false);
  const [companyAddSuccess, setCompanyAddSuccess] = useState(null);
  const [contactAddSuccess, setContactAddSuccess] = useState(null);

  const buildContactCompanyPost = () => {
    console.log("buildContactCompany start");
    const headers = addContactCompany(
      firstName,
      lastName,
      email,
      companyName,
      notes
    ).then((response) => {
      if (response.company == "Added") {
        setCompanyAddSuccess(true);
      }
      if (response.contact == "Added") {
        setContactAddSuccess(true);
      }
      if (response.company == "Not Added") {
        setCompanyAddSuccess(false);
      }
      if (response.contact == "Not Added") {
        setContactAddSuccess(false);
      }
    });
    // .then(() => {
    //   console.log("Use State Data start");
    //   console.log(companyAddSuccess);
    //   console.log(contactAddSuccess);
    //   console.log("Use State Data end");
    // });
  };

  // const displayAlertLogic = () => {
  //   setHeaders(buildContactCompanyPost().headers.get("Company"));
  //   // console.log("headers");
  //   // console.log(headers);
  //   //AlertDismissible("asdfasdf", true);
  // };

  const testButton = () => {
    console.log(companyAddSuccess);
    console.log(contactAddSuccess);
    setContactAddSuccess(false);
    setCompanyAddSuccess(false);
  };

  const toggleAlertMethod = () => {
    // 👇️ passed function to setState
    setToggleAlert((current) => !current);
  };

  return (
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
        {companyAddSuccess === true && contactAddSuccess === true && (          
          <div>
          <AlertSuccess message="Contact saved"></AlertSuccess>
          <AlertSuccess message="Company saved"></AlertSuccess>
          </div>
          // <AlertDismissible thisMessage="Double Success" thisSuccess={true} thisShow={true}></AlertDismissible>        
        )}
        {contactAddSuccess === false && companyAddSuccess === true  && (          
          <div>
          <AlertFailure message="Contact not saved"></AlertFailure>
          <AlertSuccess message="Company saved"></AlertSuccess>         
          </div>
        )}
        {contactAddSuccess === true && companyAddSuccess === false &&  (          
          <div>
          <AlertSuccess message="Contact saved"></AlertSuccess>
          <AlertFailure message="Company not saved"></AlertFailure>
          </div>
        )}
        {contactAddSuccess === false && companyAddSuccess === false &&  (          
          <div>
          <AlertFailure message="Contact not saved"></AlertFailure>
          <AlertFailure message="Company not saved"></AlertFailure>
          </div>
        )}

        <Button
          variant="primary"
          onClick={() => {
            //displayAlertLogic();
            buildContactCompanyPost();
            // toggleAlertMethod();
            // AlertDismissible("asdfasdf", true);
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
        <Button
          style={{ marginLeft: "10px" }}
          variant="danger"
          onClick={testButton}
        >
          Test
        </Button>
      </fieldset>
    </Form>
  );
}

export default AddContact;
