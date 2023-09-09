import { notify } from "./notification";

const nameRegex = /^([a-zA-Z ]){2,30}$/;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
const cityRegex =
  /^[a-zA-Z\u0080-\u024F]+(?:([\ \-\']|(\.\ ))[a-zA-Z\u0080-\u024F]+)*$/;
const pinRegex = /^([0-9]{4}|[0-9]{6})$/;

const validateName = (name) => {
  return nameRegex.test(name.trim());
};

const validateEmail = (email) => {
  return emailRegex.test(email.trim());
};

const validatePhone = (mobile) => {
  return phoneRegex.test(mobile.trim());
};

const validateCity = (city) => {
  return cityRegex.test(city.trim());
};

const validateState = (state) => {
  return state.trim();
};

const validateCountry = (country) => {
  return country.trim();
};

const validatePin = (pinCode) => {
  return pinRegex.test(pinCode.trim());
};

// Function for validating form
export const validateForm = (userData) => {
  const { firstName, lastName, email, mobile, city, state, country, pinCode } =
    userData;

  // Validating Name
  if (!validateName(firstName)) {
    return { err: "Please enter your first name!" };
  }

  if (!validateName(lastName)) {
    return { err: "Please enter your last name!" };
  }
  // Validating Email
  if (!validateEmail(email)) {
    return { err: "Please enter a valid email!" };
  }

  // Validating phone number
  if (!validatePhone(mobile)) {
    return { err: "Please enter a valid phone number!" };
  }

  // Validating city name
  if (!validateCity(city)) {
    return { err: "Please enter a valid city name!" };
  }

  // Validating state name
  if (!validateState(state)) {
    return { err: "Please enter your state!" };
  }

  // Validating pin code
  if (!validatePin(pinCode)) {
    return { err: "Please enter a valid pin code!" };
  }

  // Validating country name
  if (!validateCountry(country)) {
    return { err: "Please enter your country!" };
  }

  // If everything is ok
  return { ok: true };
};
