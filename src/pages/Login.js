import {Input} from '../components/Input';

export const Login = () => {
  return (
    <main className="flex justify-center items-center h-screen w-screen">
      <form className="flex flex-col space-y-3 items-end">
        <Input type={'email'} label={'이메일'} />
        <Input type={'password'} label={'비밀번호'} />
        <button type="submit" className="bg-gray-200 p-2 rounded-md">
          Login
        </button>
      </form>
    </main>
  );
};
