import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from "../Components/Navbar";
import Table from 'react-bootstrap/Table';
import Api from "../api/api";
import axios from "axios";


export default class ContactList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null,
      };
    }

    componentDidMount() {
        const api = new Api()  
        console.log("test");
        console.log(api.getAllContacts);

    }

  
    render() {
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
          <tr>            
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td></td>
            <td></td>
          </tr>
          <tr>            
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td></td>
            <td></td>
          </tr>
          <tr>        
            <td>Larry</td>
            <td>The Bird</td>
            <td>@twitter</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      </div>
      )
    }
  }