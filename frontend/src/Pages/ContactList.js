import React, { Fragment, useEffect, useState } from "react";
import { useGlobalFilter } from "react-table";
//import Navbar from "../Components/Navbar";
import {
  Col,
  Row,
  Table,
  Button,
  InputGroup,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AddContact from "../Components/AddContact";
//import { DropdownFilter, TextSearchFilter } from "react-table";
import axios from "axios";
import { getAllContacts } from "../api/api";

//const DynamicComponent = React.lazy(() => import("../Components/AddContact"));

function ContactList() {
  const [data, setData] = useState([]);
  const [addContactForm, setAddContactForm] = useState(false);
  const [searchedVal, setSearchedVal] = useState("");

  useEffect(() => {
    getAllContacts().then((res) => setData(res.data));
    console.log("use effect on contact list ht");
  }, [data]);

  const toggleAddContact = () => {
    setAddContactForm((current) => !current);
  };
  
  const renderTableData = () => {
    {return data
      .filter((row) =>
        !searchedVal.length || row.contact.email
          .toString()
          .toLowerCase()
          .includes(searchedVal.toString().toLowerCase()) 
      ).map((val, i) => (
        <tr key={i}>
          <td>{val.contact.firstName}</td>
          <td>{val.contact.lastName}</td>
          <td>{val.contact.email}</td>
          <td>{val.company.name}</td>
          <td>{val.status.toString()}</td>
        </tr>
      ))}};


  
  return (
    <div id="root">
      {/* <div className="container-sm">
        <Navbar/>
      </div> */}
      <div className="container-xl">
        <Row>
          <h1 style={{ marginBottom: "20px" }}>LeadSystem</h1>
        </Row>
        <Row style={{ marginBottom: "20px" }}>
          <Col>
            <InputGroup className="foat-start" style={{ width: "800px" }}>
              <Form.Control
                placeholder="Recipient's email"
                aria-label="Recipient's email"
                aria-describedby="basic-addon2"
                onChange={(e) => setSearchedVal(e.target.value)}
              />
              <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
            </InputGroup>
          </Col>
          <Col>
            <Button
              className="ms-auto float-end"
              variant="primary"
              size="md"
              onClick={toggleAddContact}
            >
              Add Contact
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Company</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>{renderTableData()}</tbody>
            </Table>
          </Col>
          {addContactForm === true && (
            <Fragment>
              <Col xs={4}>
                <AddContact onCancelClick={() => setAddContactForm(false)} />
              </Col>
            </Fragment>
          )}
        </Row>
      </div>
    </div>
  );
}
export default ContactList;
