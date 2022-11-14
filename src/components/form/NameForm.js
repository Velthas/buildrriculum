import React from 'react';

import Input from './inputs/Input';

const NameForm = (props) => {
  const {toggleEdit, handleSubmit} = props;

  const submitForm = (e) => {
    e.preventDefault();

    const info = Array
        .from(document.querySelectorAll('#name-form input'))
        .map((input) => input.value);
    const [userName, role] = info;

    handleSubmit('name', userName);
    handleSubmit('title', role);
    toggleEdit();
  }

  return (
    <div className="form">
        <form id="name-form">

          <Input label={'Full Name'}
            type={"text"}
            id="person-name"
            placeholder="John Smith"
            length="30"
          />

          <Input label={'Position'}
            type={"text"}
            id="person-role"
            placeholder="Executive Pizza Officer"
            length="50"
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
              onClick={(e) => submitForm(e)}
            >
              Confirm
            </button>
          </div>

        </form>
      </div>
  )
}

export default NameForm;
