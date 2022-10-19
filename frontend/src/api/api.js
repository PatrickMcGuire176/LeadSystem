import axios from "axios";

export async function getAllContacts() {
  return axios.get('http://localhost:8080/api/v1/contact/getAllContacts')
        .then((response) => {
          return response;
        })
}

export async function addContactCompany(firstName, lastName, email, companyName, notes) {
  return await axios({
    method: "post",
    url: "http://localhost:8080/api/v1/contactCompany/addContactCompany",
    headers: {},
    data: {
      firstName,
      lastName,
      email,
      companyName,
      notes,
    },
  })
  // .then((response)=>{
  //     console.log(response.data);
  //     console.log(response.status);
  //     console.log(response.statusText);
  //     console.log(response.config);
  //     console.log(response.headers);
  //   })
  .then((response) => {
    return response.headers;
  })
    .catch((error) => console.log(error));
};
