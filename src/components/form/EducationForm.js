import React from 'react';
import uniqid from 'uniqid';

import Input from './inputs/Input';
import Textarea from './inputs/Textarea';

const EducationForm = (props) => {
  const {education, toggleEdit, handleSubmit} = props;

  const submitForm = (e) => {
    e.preventDefault();

    const info =
      Array.from(document.querySelectorAll('#education-form input'))
      .map((input) => input.value);
    const [title, institution, start, end] = info;

    const description = document
      .querySelector('#education-form textarea')
      .value;
    const id = education ? education.id : uniqid();

    handleSubmit('education', {title, institution, start, end, description, id});
    toggleEdit();
  }

  return (
    <div className="form absolute-top-right">
        <form id="education-form">

          <Input label={'Education Title'}
          type={"text"}
          id="education-title"
          placeholder="MSc Rubik Cube Engineering"
          maxLength="40"
          text={education ? education.title : ""}
          />

          <Input label={'Issuing Institution'}
          type={"text"}
          id="institution"
          placeholder="Harvard University"
          maxLength="40"
          text={education ? education.institution : ""}
          />

          <Input label={'Start Date'}
          type={"text"}
          id="start-ed"
          placeholder="12/05"
          maxLength="11"
          text={education ? education.start : ""}
          />

          <Input label={'End Date'}
          type={"text"}
          id="end-ed"
          placeholder="Ongoing"
          maxLength="11"
          text={education ? education.end : ""}
          />

          <Textarea label={'Profile Text'}
          id="edu-description"
          placeholder="This is where you insert information about your education venture: remember to keep it short and memorable, maybe use bullet points for brevity."
          maxLength="500"
          text={education ? education.description : ""} />

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

export default EducationForm;
