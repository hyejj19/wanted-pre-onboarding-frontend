import axios from 'axios';
const access_token = localStorage.getItem('access_token') || '';

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `Bearer ${access_token}`,
    withCredentials: true,
    'Content-Type': `application/json`,
  },
});
