import React, { useState } from "react";
import "./Form.css";


function Form1() {
  const [field, setField] = useState({
    name: "",
    email: "",
    gender: "",
    country: "",
    course: [],
    dob: "",
  });

  const [errorField, setErrorField] = useState({
    name: false,
    email: false,
    gender: false,
    country: false,
    course: false,
    dob: false,
  });


  //all inputfield handling
  const onHandleChange = (e) => {
    setField((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(field);
  //checkbox handling
  const handleCheckbox = (event) => {
    let newCourse = [...field.course];

    if (event.target.checked) {
      newCourse.push(event.target.value);
    } else {
      newCourse = newCourse.filter((course) => course !== event.target.value);
    }
    setField((prev) => ({
      ...prev,
      [event.target.name]: newCourse,
    }));
    console.log("...", newCourse);
  };
  //validation onsubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      console.log("Valid to submit");
      return;
    }
    console.log("Invalid");
  };

  //validation on blur
const onBlurValidation = (event) => {
    const { name, value } = event.target;
    let error = false;
    if (name === "name" && value === "") {
      error = true;
      
    }
    if (name === "email" && value === "") {
      error = true;
    }
    if (name === "gender" && value === "") {
      error = true;
    }
    if (name === "country" && value === "") {
      error = true;
    }
    if (name === "course" && event.target.checked===false) {
      error = true;
    }
    if (name === "dob" && value === "") {
      error = true;
     
    }
    setErrorField((prev) => ({
      ...prev,
      [name]: error,
    }));
  };


  
  const isFormValid = () => {
    const errors = {
      name: false,
      email: false,
      gender: false,
      country: false,
      course: false,
      dob: false,
    };
    if (field.name === "") {
      errors.name = true;
    }
    if (field.email === "") {
      errors.email = true;
    }
    if (field.gender === "") {
      errors.gender = true;
    }
    if (field.country === "") {
      errors.country = true;
    }
    if (field.course.length === 0) {
      errors.course = true;
    }
    if (field.dob === "") {
      errors.dob = true;
    }
    setErrorField(errors); // this is to show error msg in ui
    if (Object.values(errors).some((error) => error == true)) {
      //checking anyof the value true in errors obj(form submit val)
      return false;
    }
    return true;
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Form 1</h2>
        <p className="subheading">*Form Validation on Blur & Submit</p>
        <div className="form-fields">
          <label htmlFor="name">Name:</label>
          <input
            className="inputField"
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Name"
            onChange={onHandleChange}
            onBlur={onBlurValidation}
          />
          {errorField.name && <p className="danger">This field is required </p>}
        </div>
        <div className="form-fields">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            onChange={onHandleChange}
            onBlur={onBlurValidation}
          />
          {errorField.email && (
            <p className="danger">This field is required </p>
          )}
        </div>
        <div className="form-fields">
          <label>Gender:</label>
          <div className="group-input" onBlur={onBlurValidation}>
            <input
              type="radio"
              name="gender"
              id="male"
              onChange={onHandleChange}
              value="male"
            />

            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="female"
              onChange={onHandleChange}
              onBlur={onBlurValidation}
              value="female"
            />
            <label htmlFor="female">Female</label>
          </div>

          {errorField.gender && (
            <p className="danger">This field is required</p>
          )}
        </div>
        <div className="form-fields">
          <label htmlFor="country">Country</label>
          <select
            name="country"
            id="country"
            onChange={onHandleChange}
            onBlur={onBlurValidation}
          >
            <option value="">Select</option>
            <option value="uae">UAE</option>
            <option value="qatar">Qatar</option>
            <option value="oman">Oman</option>
            <option value="india">India</option>
          </select>
          {errorField.country && (
            <p className="danger">This field is required</p>
          )}
        </div>

        <div className="form-fields">
          <label>Course</label>
          <div className="group-input">
            <input
              type="checkbox"
              id="html"
              name="course"
              onChange={handleCheckbox}
              onBlur={onBlurValidation}
              value="html"
            />
            <label htmlFor="html">HTML</label>
            <input
              type="checkbox"
              id="css"
              name="course"
              onChange={handleCheckbox}
              onBlur={onBlurValidation}
              value="css"
            />
            <label htmlFor="css">CSS</label>
            <input
              type="checkbox"
              id="javascript"
              name="course"
              onChange={handleCheckbox}
              onBlur={onBlurValidation}
              value="javascript"
            />
            <label htmlFor="javascript">Java Script</label>
            <input
              type="checkbox"
              id="php"
              name="course"
              onChange={handleCheckbox}
              onBlur={onBlurValidation}
              value="php"
            />
            <label htmlFor="php">PHP</label>
          </div>
          {errorField.course && (
            <p className="danger">This field is required</p>
          )}
        </div>
        <div className="form-fields">
          <label htmlFor="dob">DOB:</label>
          <input
            type="text"
            name="dob"
            id="dob"
            placeholder="Enter Your Date of Birth"
            onChange={onHandleChange}
            onBlur={onBlurValidation}
          />
          {errorField.dob && <p className="danger">This field is required</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form1;
