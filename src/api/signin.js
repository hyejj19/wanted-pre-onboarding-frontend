import {client} from '../libs/client';

export const signin = loginValue => {
  client
    .post('/auth/signin', loginValue)
    .then(res => {
      localStorage.setItem('access_token', res.data.access_token);
      window.location.href = '/todo';
    })
    .catch(err => {
      alert(
        `로그인에 실패하였습니다. ( 사유 : ${err.response.status} ${err.response.data.message} )`,
      );
    });
};
