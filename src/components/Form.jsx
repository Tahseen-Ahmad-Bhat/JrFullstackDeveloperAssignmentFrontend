import React from "react";
import "./Form.css";
import FormInput from "./FormInput";

const Form = () => {
  return (
    <div className="form__container">
      <h2>User Form</h2>
      <form onSubmit="">
        <FormInput
          type="text"
          name="firstName"
          placeholder="Enter your first name"
        />
        <FormInput
          type="text"
          name="lastName"
          placeholder="Enter your last name"
        />
        <FormInput type="email" name="email" placeholder="Enter your email" />
        <FormInput
          type="tel"
          name="mobile"
          placeholder="Enter your mobile number"
        />
        <FormInput type="text" name="city" placeholder="Enter your city name" />
        <FormInput
          type="text"
          name="state"
          placeholder="Enter your state name"
        />
        <FormInput
          type="text"
          name="pinCode"
          placeholder="Enter your pin code"
        />
        <FormInput
          type="text"
          name="country"
          placeholder="Enter your country name"
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
