import { React, useEffect, useState } from "react";
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

import "bootstrap/dist/css/bootstrap.min.css";

import { DropdownFilter, TextSearchFilter } from "react-table";

function ContactList() {
  const [data, setData] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const api = new Api();
    api.getAllContacts().then((res) => setData(res.data));
    // api.getAllContacts().then(res => console.log(res.data[0].id));
    // axios.get('http://localhost:8080/api/v1/contact/getAllContacts').then((res) => {
    // console.log(res.data[0].id)});
  }, []);

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
        <td>{val.firstName}</td>
        <td>{val.lastName}</td>
        <td>{val.email}</td>
        <td>{val.company.name}</td>
        <td>{val.status.id}</td>
      </tr>
    ));
  };

  return (
    <div id="root">
      <Container fluid="md">
        <Row>
          <h1 style={{ marginBottom: "20px" }}>LeadSystem</h1>
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
            <Button className="ms-auto float-end" variant="primary" size="md">
              Large button
            </Button>
          </Col>
        </Row>
        <Row></Row>
        <Row>
          <Col style={{ backgroundColor: "white" }} xs={1}>
            <Navbar />
          </Col>
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
        </Row>
      </Container>
    </div>
  );
}
export default ContactList;
