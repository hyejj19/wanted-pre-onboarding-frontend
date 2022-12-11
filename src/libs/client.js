import axios from 'axios';
const access_token = localStorage.getItem('access_token') || '';

export const client = axios.create({
  headers: {
    Authorization: `Bearer ${access_token}`,
    'Content-Type': `application/json`,
  },
});
