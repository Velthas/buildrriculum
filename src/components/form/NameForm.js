import React, {Component} from 'react';

import Input from './inputs/Input';

class NameForm extends Component {
  constructor(props) {
    super(props);
  }

  submitForm(e) {
    const {toggleEdit, handleSubmit} = this.props;

    e.preventDefault();
    const info = Array
        .from(document.querySelectorAll('#name-form input'))
        .map((input) => input.value);
    const [userName, role] = info;
    handleSubmit('name', userName);
    handleSubmit('title', role);
    toggleEdit();
  }

  render() {
    const { toggleEdit } = this.props;

    return (
      <div className="form">
          <form id="name-form">

            <Input label={'Full Name'}
            type={"text"}
            id="person-name"
            placeholder="John Smith"
            maxLength="30"
            />

            <Input label={'Position'}
            type={"text"}
            id="person-role"
            placeholder="Executive Pizza Officer"
            maxLength="50"
            />

            <div className="flex-row">
              <button className="button-cancel"
                type="button"
                onClick={toggleEdit}
                >
                 Cancel
              </button>
              <button className="button-submit"
                type="submit"
                onClick={(e) => this.submitForm(e)}
              >
                Confirm
              </button>
            </div>

          </form>
        </div>
    )
  }
}

export default NameForm;
