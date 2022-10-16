import React, { Fragment, useEffect, useState, Suspense } from "react";
import Navbar from "../Components/Navbar";
import {
  Container,
  Col,
  Row,
  Table,
  Button,
  InputGroup,
  Form,
} from "react-bootstrap";
import Api from "../api/api";
import "D:/MintDownloadsFolder/leadsystem/frontend/src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddContact from "../Components/AddContact";
import { DropdownFilter, TextSearchFilter } from "react-table";
import axios from "axios";

const DynamicComponent = React.lazy(() => import("../Components/AddContact"));

function ContactList() {
  const [data, setData] = useState([]);
  const [addContactForm, setAddContactForm] = useState(false);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const api = new Api();
    api
      .getAllContacts()
      .then((res) => setData(res.data))
      .then((res) => console.log(data));
  }, []);

  const toggleAddContact = () => {
    // 👇️ passed function to setState
    setAddContactForm((current) => !current);
  };

  const ColumnFilter = ({ column }) => {
    const { filterValue, setFilter } = column;
    return (
      <span>
        Search:{" "}
        <input
          value={filterValue || ""}
          onChange={(e) => setFilter(e.target.value)}
        />
      </span>
    );
  };

  const renderTableData = () => {
    return data.map((val) => (
      <tr>
        <td>{val.contact.firstName}</td>
        <td>{val.contact.lastName}</td>
        <td>{val.contact.email}</td>
        <td>{val.company.name}</td>
        <td>{val.status.toString()}</td>
      </tr>
    ));
  };

  const testGet = () => {
    axios
      .get(
        "http://localhost:8080/api/v1/contact/getContact/pmcguire@gmail2.com"
      )
      .then((res) => {
        console.log(res.data.message);
      });
  };

  return (
    <div id="root">
      {/* <div className="container-sm">
        <Navbar/>
      </div> */}
      <div className="container-xl">
        <Row>
          <h1 style={{ marginBottom: "20px" }}>LeadSystem</h1>
        </Row>
        <Row>
          <Button
            style={{
              width: "150px",
              height: "50px",
              marginBottom: "20px",
              marginLeft: "20px",
              float: "right",
            }}
            onClick={testGet}
          ></Button>
        </Row>
        <Row style={{ marginBottom: "20px" }}>
          <Col>
            <InputGroup className="foat-start" style={{ width: "800px" }}>
              <Form.Control
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
              <Button variant="outline-secondary" id="button-addon2">
                Search
              </Button>
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
          {addContactForm == true && (
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
