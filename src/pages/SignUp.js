import {signup} from '../../api/signup';
import {useNavigate} from 'react-router-dom';
import {Form} from '../components/Form';

export const SignUp = () => {
  const navigate = useNavigate();

  return (
    <main className="flex justify-center items-center h-screen flex-col space-y-5">
      <h1 className="text-xl font-bold">회원가입</h1>
      <Form submit={signup} type={'Sign Up'} />
      <section className="flex space-x-3">
        <span className="text-sm text-gray-300">이미 회원이신가요?</span>
        <span
          className="text-sm text-blue-400 cursor-pointer hover:text-blue-800"
          onClick={() => navigate('/')}
        >
          로그인하기
        </span>
      </section>
    </main>
  );
};
