import React, { useState } from 'react';

const Textarea = (props) => {
  const { text, label, id, placeholder, maxLength } = props;
  const [value, setValue] = useState(text || "");

  const handleChange = (e) => setValue(e.target.value);

  return (
    <>
      <label htmlFor={ id }>
        { label }
      </label>
      <textarea
        id={id}
        placeholder={ placeholder }
        maxLength={ maxLength || ""}
        value={ value || ""}
        onChange={ (e) => handleChange(e) }
      >
      </textarea>
    </>
  )
}

export default Textarea;
