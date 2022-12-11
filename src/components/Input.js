export const Input = ({type, label, value, setValue, placeholder}) => {
  const onChange = e => {
    setValue(prev => {
      return {...prev, ...{[type]: e.target.value}};
    });
  };

  return (
    <>
      <fieldset className="flex items-center space-x-3 w-96">
        <label className="w-32" htmlFor={type}>
          {label}
        </label>
        <input
          className="border placeholder:text-sm w-full p-2"
          type={type}
          id={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </fieldset>
    </>
  );
};
