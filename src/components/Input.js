export const Input = ({type, label, value, setValue}) => {
  const onChange = e => {
    setValue(prev => {
      return {...prev, ...{[type]: e.target.value}};
    });
  };

  return (
    <>
      <fieldset className="flex items-center space-x-3">
        <label htmlFor={type}>{label}</label>
        <input
          className="border"
          type={type}
          id={type}
          value={value}
          onChange={onChange}
        />
      </fieldset>
    </>
  );
};
