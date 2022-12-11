import {useEffect, useState} from 'react';
import {Input} from '../components/Input';
import {validEmail, validPassword} from '../libs/checkValidation';
import {signin} from '../api/signin';

export const Signin = () => {
  const [loginValue, setLoginValue] = useState({
    email: '',
    password: '',
  });

  const [isValid, setIsValid] = useState(false);

  const onSubmitLogin = e => {
    e.preventDefault();
    signin(loginValue);
  };

  useEffect(() => {
    if (validEmail(loginValue.email) && validPassword(loginValue.password)) {
      setIsValid(true);
    }
  }, [loginValue]);

  return (
    <main className="flex justify-center items-center h-screen w-screen">
      <form
        className="flex flex-col space-y-3 items-end"
        onSubmit={onSubmitLogin}
      >
        <Input
          type={'email'}
          label={'이메일'}
          setValue={setLoginValue}
          value={loginValue.email}
        />
        <Input
          type={'password'}
          label={'비밀번호'}
          setValue={setLoginValue}
          value={loginValue.password}
        />
        <button
          type="submit"
          className="bg-gray-200 p-2 rounded-md disabled:bg-slate-100"
          disabled={!isValid}
        >
          Login
        </button>
      </form>
    </main>
  );
};
