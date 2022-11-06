import React, {Component} from 'react';
import uniqid from 'uniqid';

import Input from './inputs/Input';

class LanguageForm extends Component {
  constructor(props) {
    super(props);
  }

  submitForm(e) {
    const {lang, toggleEdit, handleSubmit} = this.props;

    e.preventDefault();
    const info = Array
    .from(document.querySelectorAll('#language-form input'))
    .map((input) => input.value);
    const [language, fluency] = info
    const id = lang ? lang.id : uniqid();
    const newEntry = {
      language, fluency, id
    };

    handleSubmit('languages', newEntry);
    toggleEdit();
  }

  render() {
    const { toggleEdit, lang } = this.props;

    return (
      <div className="form">
          <form id="language-form">

            <Input label={'Language'}
            type={"text"}
            id="language-name"
            placeholder="English"
            maxLength="30"
            text={lang ? lang.language : ""}
            />

            <Input label={'Fluency'}
            type={"text"}
            id="language-fluency"
            placeholder="Fluent"
            maxLength="30"
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

export default LanguageForm;
