import {useState} from 'react';

export const Input = ({type, label}) => {
  const [value, setValue] = useState('');
  const onChange = e => {
    setValue(e.target.value);
  };
  return (
    <>
      <section className="flex items-center space-x-3">
        <label htmlFor={type}>{label}</label>
        <input
          className="border"
          type={type}
          id={type}
          value={value}
          onChange={onChange}
        />
      </section>
    </>
  );
};
