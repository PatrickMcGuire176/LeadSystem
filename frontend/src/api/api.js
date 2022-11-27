import axios from "axios";

const {REACT_APP_API_BASE_URL} = process.env;

export async function getAllContacts() {
  return axios.get(REACT_APP_API_BASE_URL + 'api/v1/contact/getAllContacts')
        .then((response) => {
          return response;
        })
}

export async function getUserPassword(email){
  return axios.get(REACT_APP_API_BASE_URL + 'api/v1/user/login/' + email)
        .then((response) => {
          return response;
        })
};

export async function addContactCompany(firstName, lastName, email, companyName, notes) {
  return await axios({
    method: "post",
    url: REACT_APP_API_BASE_URL + "api/v1/contactCompany/addContactCompany",
    headers: {},
    data: {
      firstName,
      lastName,
      email,
      companyName,
      notes,
    },
  })
  .then((response) => {
    return response;
  })
    .catch((error) => console.log(error));
};


export const chatAPI = {
  getMessages: (groupId) => {
      console.log('Calling get messages from API');
      return axios.get(`messages/${groupId}`);
  },

  sendMessage: (username, text) => {
      let msg = {
          sender: username,
          content: text
      }
      console.log("api called");
      return axios.post(REACT_APP_API_BASE_URL + 'kafka/api/send', msg);
  }
}

