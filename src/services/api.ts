import axios from 'axios';

const api = axios.create({
  baseURL: 'http://104.248.113.66',
});

export default api;
