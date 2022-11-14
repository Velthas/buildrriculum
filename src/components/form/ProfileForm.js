import React from 'react';
import Textarea from './inputs/Textarea';

const ProfileForm = (props) => {
  const {toggleEdit, handleSubmit} = props;

  const submitForm = (e) => {
    e.preventDefault();

    const text = document
      .querySelector('#profile-form textarea')
      .value;

    handleSubmit('profile', text);
    toggleEdit();
  }

  return (
    <div className="form">
        <form id="profile-form">

          <Textarea label={'Profile Text'}
          id="profile-text"
          placeholder="This is where a description should go,
          or perhaps even would go, if you dared to insert it"
          maxLength="450" />

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

export default ProfileForm;
