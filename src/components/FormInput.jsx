import React from "react";

const FormInput = ({ type, name, placeholder }) => {
  return (
    <>
      <input type={type} name={name} placeholder={placeholder} />
    </>
  );
};

export default FormInput;
