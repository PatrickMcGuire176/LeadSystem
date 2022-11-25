import React, { Fragment, useEffect, useCallback, useState } from "react";
import { useGlobalFilter } from "react-table";
//import Navbar from "../Components/Navbar";
import { Col, Row, Table, Button, InputGroup, Form, Pagination } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import AddContact from "../Components/AddContact";
import ChatBox from "../Components/ChatBox";
import ChatWebSocket from "../Services/ChatWebSocket";

import { getAllContacts } from "../api/api";
import ArrowPointingRight from "../Assets/Icons/ArrowPointingRight.png";
import ArrowPointingLeft from "../Assets/Icons/ArrowPointingLeft.png";


function ContactList() {
  const [dataPaginationValue, setDataPaginationValue] = useState(0);
  const [data, setData] = useState([]);
  const [addContactForm, setAddContactForm] = useState(false);
  const [dataChanged, setDataChanged] = useState(null);

  // Search Filter States
  const [searchedVal, setSearchedVal] = useState("");
  const [searchedFirstNameVal, setSearchedFirstNameVal] = useState("");
  const [searchedLastNameVal, setSearchedLastNameVal] = useState("");
  const [searchedEmailVal, setSearchedEmailVal] = useState("");
  const [searchedCompanyVal, setSearchedCompanyVal] = useState("");
  const [searchedStatusVal, setSearchedStatusVal] = useState("");

  //Row Values
  const [rowFirstName, setRowFirstName] = useState("");
  const [rowLastName, setRowLastName] = useState("");
  const [rowEmail, setRowEmail] = useState("");
  const [rowCompany, setRowCompany] = useState("");

  useEffect(() => {
    getAllContacts().then((res) => setData(res.data));
  }, [JSON.stringify(data)]);

  const updateTableData = useCallback(() => {
    getAllContacts().then((res) => setData(res.data));
  });

  const toggleAddContact = () => {
    setAddContactForm((current) => !current);
  };

  const renderTableData = () => {
    {
      return data
        .filter(
          (row) =>            
            row.contact.email
            .toString()
            .toLowerCase()          
            .includes(searchedVal.toString().toLowerCase())
            &&
            row.contact.firstName
              .toString()
              .toLowerCase()
              .includes(searchedFirstNameVal.toString().toLowerCase())
            &&
            row.contact.lastName
              .toString()
              .toLowerCase()
              .includes(searchedLastNameVal.toString().toLowerCase())
            &&
            row.contact.email
              .toString()
              .toLowerCase()          
              .includes(searchedEmailVal.toString().toLowerCase())
            &&
            row.company.name
              .toString()
              .toLowerCase()
              .includes(searchedCompanyVal.toString().toLowerCase())
            &&
            row.status
              .toString()
              .toLowerCase()
              .includes(searchedStatusVal.toString().toLowerCase())            
        )
        
        .slice(dataPaginationValue, dataPaginationValue + 20)
        .map((val) => (
          <tr 
            key={val.id} 
            rowid={val.id}
            onClick={() => 
              {
                setAddContactForm(true)
                setRowFirstName(val.contact.firstName)
                setRowLastName(val.contact.lastName)
                setRowEmail(val.contact.email)
                setRowCompany(val.company.name)              
              }}
            >
              <td>{val.contact.firstName}</td>
              <td>{val.contact.lastName}</td>
              <td>{val.contact.email}</td>
              <td>{val.company.name}</td>
              <td>{val.status.toString()}</td>
          </tr>
        ));
    }
  };

  function dataChangedMethod() {
    setDataChanged((current) => !current);
  }

  return (
    <div id="root">
      {/* <div className="container-sm">
        <Navbar/>
      </div> */}
      <Button
        onClick={() => {
          console.log(dataPaginationValue);
        }}
      >
        Hi!
      </Button>
      <ChatWebSocket></ChatWebSocket>
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
                  <th>
                    First Name
                    <br />
                    <InputGroup>
                      <Form.Control
                        aria-describedby="basic-addon2"                        
                        onChange={(e) => {
                          setSearchedFirstNameVal(e.target.value)
                          setDataPaginationValue(0)
                        }}
                      />
                    </InputGroup>
                  </th>
                  <th>
                    Last Name
                    <br />
                    <InputGroup>
                      <Form.Control
                        aria-describedby="basic-addon2"
                        onChange={(e) => {
                          setSearchedLastNameVal(e.target.value)
                          setDataPaginationValue(0)
                        }}
                      />
                    </InputGroup>
                  </th>
                  <th>
                    Email
                    <br />
                    <InputGroup>
                      <Form.Control
                        aria-describedby="basic-addon2"
                        onChange={(e) => {
                          setSearchedEmailVal(e.target.value)
                          setDataPaginationValue(0)
                        }}
                      />
                    </InputGroup>
                  </th>
                  <th>
                    Company
                    <br />
                    <InputGroup>
                      <Form.Control
                        aria-describedby="basic-addon2"
                        onChange={(e) => {
                          setSearchedCompanyVal(e.target.value)
                          setDataPaginationValue(0)
                        }}
                      />
                    </InputGroup>
                  </th>
                  <th>
                    Status
                    <br />
                    <InputGroup>
                      <Form.Control
                        aria-describedby="basic-addon2"
                        onChange={(e) => {
                          setSearchedStatusVal(e.target.value)
                          setDataPaginationValue(0)
                        }}
                      />
                    </InputGroup>
                  </th>
                </tr>
              </thead>
              <tbody>
                {renderTableData()}
              </tbody>
            </Table>
          </Col>
          {addContactForm === true && (
            <Fragment>
              <Col xs={4}>
                <AddContact
                  onCancelClick={() => setAddContactForm(false)}
                  onAddClick={() => setAddContactForm(true)}
                  updateTableDataProp={() => updateTableData()}
                  passedFirstName={rowFirstName}
                  passedLastName={rowLastName}
                  passedEmail={rowEmail}
                  passedCompany={rowCompany}
                />
              </Col>
            </Fragment>
          )}
        </Row>        
        <Row>
          <Col></Col>
          <Col className="text-center" style={{}}>
            <img
              src={ArrowPointingLeft}
              alt="arrowPointingLeft"
              style={{ width: "30px", height: "30px", cursor: "pointer" }}
              onClick={() => setDataPaginationValue(dataPaginationValue - 20)}
            />
            Page {dataPaginationValue / 20 + 1} of{" "}
            {Math.floor(data.length / 10) - 1}
            <img
              src={ArrowPointingRight}
              alt="arrowPointingRight"
              style={{ width: "30px", height: "30px", cursor: "pointer" }}
              onClick={() => setDataPaginationValue(dataPaginationValue + 20)}
            />
          </Col>
          <Col></Col>
        </Row>
      </div>
    </div>
  );
}
export default ContactList;
