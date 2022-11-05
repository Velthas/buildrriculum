import React, {Component} from 'react';

class Textarea extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { label, id, placeholder, maxLength, value } = this.props;
    return (
      <label htmlFor={id}>
        {label}
        <textarea
        id={id}
        placeholder={placeholder}
        maxLength={ maxLength || ""}>
          { value || ""}
        </textarea>
      </label>
    )
  }
}

export default Textarea
