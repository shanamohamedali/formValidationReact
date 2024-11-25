import React, { useState } from "react";
import { TextInput } from "./TextInput";

export function Form2() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    country: "",
    skills: [],
  });

  const [errorField, setErrorFields] = useState({
    name: false,
    email: false,
    country: false,
    skills: false,
  });
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    email: "",
    country: "",
    skills: "",
  });

  const handleCheckbox = (event) => {
    let newSkills = [...fields.skills];
    if (event.target.checked) {
      newSkills.push(event.target.value);
    } else {
      newSkills = newSkills.filter((skill) => skill != event.target.value);
    }
    setFields((prev) => ({
      ...prev,
      [event.target.name]: newSkills,
    }));
  isValidOnHandleChange(event);
  };

  const onHandleChange = (event) => {
    const { name, value } = event.target;
    setFields((prev) => ({
      ...prev,
      [name]: value,
    }));
    isValidOnHandleChange(event);
  };

  const isValidOnHandleChange = (event) => {
    const { name, value } = event.target;
    const emailPattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   
    let error = false;
    if (name === "name" && value === "") {
      error = true;
      setErrorMessage((prev) => ({
        ...prev,
        [name]: "This Field is required",
      }));
    }
    if (name === "email" && !emailPattern.test(value)) {
      error = true;
      setErrorMessage((prev) => ({
        ...prev,
        [name]: "Invalid Format",
      }));
    }
    if (name === "country" && value === "") {
      error = true;
      setErrorMessage((prev) => ({
        ...prev,
        [name]: "This Field is required",
      }));
    }
    if (name === "skills" && event.target.checked === false) {
      error = true;
      setErrorMessage((prev) => ({
        ...prev,
        [name]: "This Field is required",
      }));
    }
    console.log("....heeeyyy", name, value);
    setErrorFields((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) 
      {
      console.log("Form is valid");
      
    }
    console.log("Invalid Form");
  };

  const isFormValid = () => {
    const errors = {
      name: false,
      email: false,
      country: false,
      skills: false,
    }
    if (fields.name === "") {
      errors.name = true;
    }
    if (fields.email === "") {
      errors.email = true;
    }
    if (fields.country === "") {
      errors.country = true;
    }
    if (fields.skills.length === 0) {
      errors.skills = true;
    }
    setErrorFields(errors);
    console.log("errrrors",errors)
    if (Object.values(errors).some((error) => error.value === true)) {
      return true;
    }
    return false;
  };

  console.log(fields);

  return (
    <div className="form-container">
      <h2>Form 2</h2>
      <p className="subheading">Form Validation on change</p>
      <form onSubmit={onSubmit}>
        <TextInput
          label="Name"
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          onChange={onHandleChange}
          errorField={errorField.name}
          errorMessage={errorMessage.name}
        />

        <TextInput
          label="Email"
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          onChange={onHandleChange}
          errorField={errorField.email}
          errorMessage={errorMessage.email}
        />
        <div className="form-fields">
          <label htmlFor="country">Country</label>
          <select name="country" id="country" onChange={onHandleChange}>
            <option value="">Select</option>
            <option value="uae">UAE</option>
            <option value="qatar">Qatar</option>
            <option value="oman">Oman</option>
            <option value="india">India</option>
          </select>
          {errorField.country && (
            <p className="danger">{errorMessage.country}</p>
          )}
        </div>

        <div className="form-fields">
          <label>Skills</label>
          <div className="group-input">
            <input
              type="checkbox"
              id="html"
              name="skills"
              onChange={handleCheckbox}
              value="html"
            />
            <label htmlFor="html">HTML</label>
            <input
              type="checkbox"
              id="css"
              name="skills"
              onChange={handleCheckbox}
              value="css"
            />
            <label htmlFor="css">CSS</label>
            <input
              type="checkbox"
              id="javascript"
              name="skills"
              onChange={handleCheckbox}
              value="javascript"
            />
            <label htmlFor="javascript">Java Script</label>
            <input
              type="checkbox"
              id="php"
              name="skills"
              onChange={handleCheckbox}
              value="php"
            />
            <label htmlFor="php">PHP</label>
          </div>
          {errorField.skills && <p className="danger">{errorMessage.skills}</p>}
        </div>
        <button type="submit">Submit</button>
       
      </form>
    </div>
  );
}
