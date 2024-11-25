import React,{useState} from 'react'

export function Form3() {
    const [field, setField] = useState({
        name: "",
        email: "",
    })
    const [errorField, setErrorField] = useState({
        name: false,
        email: false,
    })

    const onHandleChange = (e) => {
        console.log('....',e.target.name)
        const { name, value } = e.target;
        const emailPattern=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        
    let error = false;
    if (name === "name" && value === "") {
      error = true;
    }
    if (name === "email" && !emailPattern.test(value)) {
      error = true;
      
    }
        setErrorField((prev)=>({
            ...prev,
            [name]:error
        })); 
        console.log(errorField.name)
        setField((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      };

  return (
      <div className="form-container">
      <form >
        <h2>Registration Form</h2>
        <p className="subheading">*Fill out the form</p>
        <div className="form-fields">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Name"
            onChange={onHandleChange}
           
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
            
          />
          {errorField.email && <p className="danger">Invalid Format </p>}
        </div>
        </form>
        </div>

  )
}

