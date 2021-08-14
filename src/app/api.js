import axios from "axios";
import queryString from 'query-string';

const myaxios = axios.create({
  baseURL: "https://qlbvxk.herokuapp.com/api/",
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params),
});

export default myaxios;