import React, {Component} from 'react';

class Input extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { label, type, id, placeholder, length, text} = this.props;
    const stringCopy = text
    return (
      <>
        <label htmlFor={id}>
          {label}
        </label>
          <input
          type={type}
          id={id}
          placeholder={placeholder}
          maxLength={length || ""}>
          </input>
      </>
    )
  }
}

export default Input;
