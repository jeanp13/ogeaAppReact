import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ogea-api.jpavsys.dev.br',
  headers: { Authorization: 'Bearer ' + localStorage.getItem('@GoBarber:token') },
});

export default api;
