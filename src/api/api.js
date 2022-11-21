import axios from 'axios';

const API = axios.create({ baseURL: 'https://api.nobelprize.org/2.1/' });

export const getA = () => API.get('laureates');
export const getB = () => API.get('');
