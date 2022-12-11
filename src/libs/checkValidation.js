export const validEmail = email => {
  return /[@]/.test(email);
};

export const validPassword = password => {
  return password && password.length >= 8;
};
