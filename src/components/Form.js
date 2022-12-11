import {useEffect, useState} from 'react';
import {Input} from '../components/Input';
import {validEmail, validPassword} from '../libs/checkValidation';

export const Form = ({submit, type}) => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const [isValid, setIsValid] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    submit(userInfo);
  };

  // 유효성 검사
  useEffect(() => {
    if (validEmail(userInfo.email) && validPassword(userInfo.password)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [userInfo]);

  return (
    <form className="flex flex-col space-y-3 items-end" onSubmit={onSubmit}>
      <Input
        type={'email'}
        label={'이메일'}
        setValue={setUserInfo}
        value={userInfo.email}
        placeholder={'이메일을 입력해주세요.'}
      />
      <Input
        type={'password'}
        label={'비밀번호'}
        setValue={setUserInfo}
        value={userInfo.password}
        placeholder={'8자리 이상 비밀번호를 입력해주세요.'}
      />
      <button
        type="submit"
        className="bg-yellow-500 p-2 rounded-md disabled:bg-slate-100
          disabled:text-gray-400
          w-full
          "
        disabled={!isValid}
      >
        {type}
      </button>
    </form>
  );
};
