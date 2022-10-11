import React  from "react";
import axios from "axios";

export default class Api {
    getAllContacts () {      
      return axios.get('http://localhost:8080/api/v1/contact/getAllContacts')
        .then((response) => {
          return response;
        }
    )};
  }