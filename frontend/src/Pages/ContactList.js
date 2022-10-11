import { React, useEffect, useState}  from "react";
import BasicExample from "../Components/Navbar";
import {Button, Table} from "react-bootstrap";

import Api from "../api/api";

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

function ContactList() {

  const [data, setData] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const api = new Api();
    api.getAllContacts()
      .then(res => setData(res.data));
    // api.getAllContacts().then(res => console.log(res.data[0].id));
    // axios.get('http://localhost:8080/api/v1/contact/getAllContacts').then((res) => {
    // console.log(res.data[0].id)});
  }, []);

  const renderTableData = () => {
    return data.map((val) => (
        <tr>
            <td>{val.firstName}</td>
            <td>{val.lastName}</td>
            <td>{val.email}</td>
            <td>{val.company.name}</td>
            <td>{val.status.id}</td>
        </tr>))
  }
  
  return (
      <div id="root">
        <BasicExample/>
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
          <tbody>
            {renderTableData()}
          </tbody>
      </Table>
    </div>
    )
  }
  export default ContactList