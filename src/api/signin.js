import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

export const signin = loginValue => {
  axios
    .post(`${baseURL}/auth/signin`, loginValue, {
      headers: {
        withCredentials: true,
        'Content-Type': `application/json`,
      },
    })
    .then(res => {
      localStorage.setItem('access_token', res.data.access_token);
      window.location = '/todo';
    })
    .catch(err => {
      alert(
        `로그인에 실패하였습니다. ( 사유 : ${err.response.status} ${err.response.data.message} )`,
      );
    });
};
