import React, { useState } from 'react';

const Input = (props) => {
  const { text, label, type, id, placeholder, length } = props;
  const [value, setValue] = useState(text || "");

  const handleChange = (e) => setValue(e.target.value);

  return (
    <>
      <label htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        maxLength={length || 50}
        value={value}
        onChange={(e) => handleChange(e)}
      >
      </input>
    </>
  )
}

export default Input;
