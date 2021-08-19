import axios from 'axios';

const API = process.env.REACT_APP_DEV_API_URL;

console.log('HELLLOOO')

const instance = axios.create({
  baseURL: API,
  withCredentials: true,
});

export default instance;
