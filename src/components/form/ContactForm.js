import React from 'react';

import Input from './inputs/Input';

function ContactForm(props) {
  const { toggleEdit, handleSubmit, setContacts } = props;

  const submitForm = (e) => {
    e.preventDefault();

    const info = Array
      .from(document.querySelectorAll('#contacts-form input'))
      .map((input) => input.value);
    const [telephone, mail, website] = info;
    handleSubmit(setContacts, [{ telephone, mail, website }]);
    toggleEdit();
  };

  return (
    <div className="form">
      <form id="contacts-form">

        <Input
          label="Telephone Number"
          type="tel"
          id="contacts-tel"
          placeholder="3334445555"
          length="25"
        />

        <Input
          label="Email"
          type="email"
          id="contacts-email"
          placeholder="example@provider.com"
          length="50"
        />

        <Input
          label="Website"
          type="url"
          id="contacts-web"
          placeholder="github.com/myPage"
          length="50"
        />

        <div className="flex-row">
          <button
            className="button-cancel"
            type="button"
            onClick={toggleEdit}
          >
            Cancel
          </button>
          <button
            className="button-submit"
            type="submit"
            onClick={(e) => submitForm(e)}
          >
            Confirm
          </button>
        </div>

      </form>
    </div>
  );
}

export default ContactForm;
