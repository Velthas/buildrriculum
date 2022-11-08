import React, {Component} from 'react';

class Textarea extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: this.props.text || ""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    })
  }

  render() {
    const { label, id, placeholder, maxLength } = this.props;
    return (
      <>
        <label htmlFor={ id }>
          { label }
        </label>
        <textarea
        id={id}
        placeholder={ placeholder }
        maxLength={ maxLength || ""}
        value={ this.state.value || ""}
        onChange={ (e) => this.handleChange(e)}>
        </textarea>
      </>
    )
  }
}

export default Textarea
