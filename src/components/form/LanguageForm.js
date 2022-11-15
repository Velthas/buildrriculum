import React from 'react';
import uniqid from 'uniqid';

import Input from './inputs/Input';

const LanguageForm = (props) => {
  const {lang, toggleEdit, handleSubmit, setLanguages} = props;

  const submitForm = (e) => {
    e.preventDefault();

    const info = Array
      .from(document.querySelectorAll('#language-form input'))
      .map((input) => input.value);
    const [language, fluency] = info
    const id = lang ? lang.id : uniqid();

    handleSubmit(setLanguages, { language, fluency, id });
    toggleEdit();
  }

  return (
    <div className="form">
        <form id="language-form">

          <Input label={'Language'}
            type={"text"}
            id="language-name"
            placeholder="English"
            length="30"
            text={lang ? lang.language : ""}
          />

          <Input label={'Fluency'}
            type={"text"}
            id="language-fluency"
            placeholder="Fluent"
            length="30"
            text={lang ? lang.fluency : ""}
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

export default LanguageForm;
