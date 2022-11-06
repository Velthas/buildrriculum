import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.text || "", 
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    })
  }

  render() {
    const { label, type, id, placeholder, length } = this.props;
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
          value={this.state.value}
          onChange={(e) => this.handleChange(e)}
        >
        </input>
      </>
    );
  }
}

export default Input;
