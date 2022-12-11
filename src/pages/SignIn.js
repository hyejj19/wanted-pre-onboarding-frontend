import {signin} from '../../api/signin';
import {useNavigate} from 'react-router-dom';
import {Form} from '../components/Form';
import {useEffect} from 'react';

export const SignIn = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('access_token')) navigate('/todo');
  }, [navigate]);

  return (
    <main className="flex justify-center items-center h-screen flex-col space-y-5">
      <h1 className="text-xl font-bold">로그인</h1>
      <Form submit={signin} type={'Sign In'} />
      <section className="flex space-x-3">
        <span className="text-sm text-gray-300">아직 회원이 아니세요?</span>
        <span
          className="text-sm text-blue-400 cursor-pointer hover:text-blue-800"
          onClick={() => navigate('/signup')}
        >
          가입하기
        </span>
      </section>
    </main>
  );
};
