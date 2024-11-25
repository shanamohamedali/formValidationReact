import React from 'react'

export function TextInput({label,type,id,name,placeholder,onChange,onBlur,errorField,errorMessage}) {
  console.log("....",errorField)
  return (
     
    <div>
      <div className='form-fields'>
        <label htmlFor='{id}'>{label}</label>
        <input type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        />
        {errorField && <p className='danger'>{errorMessage}</p>}
      </div>
    </div>
  )
}



 
