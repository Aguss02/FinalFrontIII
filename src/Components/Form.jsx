import React from "react";
import { useState } from "react";
import style from "./Form.module.css"

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  // Validates if the email is in the format of string@string.string

  const regexEmail = /^\S+@\S+\.\S+$/;

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasError = name.length <= 5 || !regexEmail.test(email);
    setErrorVisible(hasError);
    setSuccessMessage(!hasError);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={style.form}>
        <input placeholder="Full Name" onChange={handleName} />
        <input placeholder="Email" onChange={handleEmail} />
        <button type="submit">Submit</button>
      </form>
      {errorVisible && (
        <div className={style.errorMessage}>
          Please check if the information submited is correct
        </div>
      )}
      {successMessage && (
        <div>Thank you {name}, we will be contacting you by email as soon as posible.</div>
      )}
    </div>
  );
};

export default Form;
