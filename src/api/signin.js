import axios from 'axios';

export const signin = loginValue => {
  axios
    .post('/auth/signin', loginValue, {
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
