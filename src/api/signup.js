import axios from 'axios';

export const signup = loginValue => {
  axios
    .post('/auth/signup', loginValue, {
      headers: {
        'Content-Type': `application/json`,
      },
    })
    .then(res => {
      localStorage.setItem('access_token', res.data.access_token);
      alert('회원가입에 성공하였습니다! 로그인 페이지로 이동합니다.');
      window.location.href = '/';
    })
    .catch(err => {
      alert(
        `회원가입에 실패하였습니다. ( 사유 : ${err.response.status} ${err.response.data.message} )`,
      );
    });
};
