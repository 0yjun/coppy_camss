import axios from 'axios';

const client = axios.create();
client.defaults.baseURL = 'http://localhost:4000';

client.interceptors.response.use(
  response => {
    //todo
    return response;
  },
  error => {
    //todo
    return error;
  },
  post => {},
);

export default client;
