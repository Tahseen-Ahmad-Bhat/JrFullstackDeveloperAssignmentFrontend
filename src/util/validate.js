const nameRegex = /^([a-zA-Z ]){2,30}$/;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const validateName = (name) => {
  return nameRegex.test(name.trim());
};

const validateEmail = (email) => {
  return emailRegex.test(email.trim());
};

// Function for validating form
export const validateForm = (userData) => {
  const { name, email } = userData;

  // Validating Name
  if (!validateName(name.value)) {
    return notify("error", "Please enter your name!");
  }
  // Validating Email
  if (!validateEmail(email.value)) {
    setIsDisabled(false);
    return notify("error", "Please enter your email!");
  }
};
