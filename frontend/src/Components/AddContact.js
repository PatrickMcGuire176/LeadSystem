import {
  Container,
  Col,
  Row,
  Table,
  Button,
  InputGroup,
  Form,
} from "react-bootstrap";

function AddContact({onAddClick, onCancelClick}) {
  return (
    <Form id="AddContactForm">
      <Form.Group className="mb-3" controlId="addContactFormFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="input" placeholder="Enter First Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="addContactFormLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="input" placeholder="Enter Last Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="addContactFormEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="addContactFormCompany">
        <Form.Label>Company</Form.Label>
        <Form.Control type="input" placeholder="Enter Company" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="addContactFormNotes">
        <Form.Label>Notes</Form.Label>
        <Form.Control as="textarea" placeholder="Enter Notes" />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={onAddClick}>
        Add
      </Button>
      <Button style={{marginLeft:"10px"}} variant="danger" onClick={onCancelClick}>
        Cancel
      </Button>
    </Form>
  );
}

export default AddContact