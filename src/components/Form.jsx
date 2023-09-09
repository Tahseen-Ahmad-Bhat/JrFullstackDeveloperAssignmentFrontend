import React, { useState } from "react";
import "./Form.css";
import FormInput from "./FormInput";
import { validateForm } from "../util/validate";
import { createUser } from "../api/user";
import { notify } from "../util/notification";

const initialUserData = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  city: "",
  state: "",
  pinCode: "",
  country: "",
};

const Form = () => {
  const [userData, setUserData] = useState(initialUserData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // function for validating user data
    const { ok, err } = validateForm(userData);

    if (err) return notify("error", err);

    // function to send request to backend for the creation of user
    const { error, data } = await createUser(userData);

    if (error) return notify("error", error);

    console.log(data);
    setUserData({ ...initialUserData });

    notify("success", data.message);
  };

  const { firstName, lastName, email, mobile, city, state, pinCode, country } =
    userData;

  return (
    <div className="form__container">
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="firstName"
          value={firstName}
          placeholder="Enter your first name"
          onChange={handleChange}
        />
        <FormInput
          type="text"
          name="lastName"
          value={lastName}
          placeholder="Enter your last name"
          onChange={handleChange}
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          placeholder="Enter your email"
          onChange={handleChange}
        />
        <FormInput
          type="tel"
          name="mobile"
          value={mobile}
          placeholder="Enter your mobile number"
          onChange={handleChange}
        />
        <FormInput
          type="text"
          name="city"
          value={city}
          placeholder="Enter your city name"
          onChange={handleChange}
        />
        <FormInput
          type="text"
          name="state"
          value={state}
          placeholder="Enter your state name"
          onChange={handleChange}
        />
        <FormInput
          type="text"
          name="pinCode"
          value={pinCode}
          placeholder="Enter your pin code"
          onChange={handleChange}
        />
        <FormInput
          type="text"
          name="country"
          value={country}
          placeholder="Enter your country name"
          onChange={handleChange}
        />

        <button type="submit" className="btn btn-primary">
          {/* {!isDisabled ? "Submit Form" : <ImSpinner2 className="spinner" />} */}
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default Form;
