import React from 'react';
import '../Styles/InputFieldsPrefab.css'

export function InputFieldText({label, name, placeholder, value, onChange, }) {
  return (
    <div className='input-field-text'>
        <p>{label}</p>
        <input type='text' name={name} value={value} onChange={onChange}></input>
    </div>
  )
}

export function InputFieldEmail({label, name, placeholder, value, onChange, }) {
    return (
      <div className='input-field-text'>
          <p>{label}</p>
          <input type='email' name={name} value={value} onChange={onChange}></input>
      </div>
    )
  }

export function InputFieldTextArea({label, name, placeholder, value, onChange, }) {
    return (
      <div className='input-field-text'>
          <p>{label}</p>
          <textarea name={name} value={value} onChange={onChange}/>
      </div>
    )
  }
