import React from 'react';

import Input from './inputs/Input';

function PictureForm(props) {
  const { toggleEdit, handleSubmit, setPicture } = props;

  const submitForm = (e) => {
    e.preventDefault();

    const newUrl = document
      .querySelector('#img-form input')
      .value;

    handleSubmit(setPicture, newUrl);
    toggleEdit();
  };

  return (
    <div className="form">
      <form id="img-form">

        <Input
          label={'Image\'s URL'}
          type="url"
          id="img-url"
          length="3000"
          placeholder="https://my-example-url.com/picture.jpg"
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

export default PictureForm;
