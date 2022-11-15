import React from 'react';
import uniqid from 'uniqid';

import Input from './inputs/Input';
import Textarea from './inputs/Textarea';

const WorkForm = (props) => {
  const {work, toggleEdit, handleSubmit, setWork} = props;

  const submitForm = (e) => {
    e.preventDefault();

    const info = Array
      .from(document.querySelectorAll('#job-form input'))
      .map((input) => input.value);

    const [position, company, start, end] = info;
    const description = document
      .querySelector('#job-form textarea')
      .value;
    const id = work ? work.id : uniqid();

    handleSubmit(setWork, {position, company, start, end, description, id});
    toggleEdit();
  }

  return (
    <div className="form absolute-top-right">
        <form id="job-form">

          <Input label={'Position'}
            type={"text"}
            id="position"
            placeholder="Pizza Ingurgitation Specialist"
            length="40"
            text={work ? work.position : ""}
          />

          <Input label={'Company'}
            type={"text"}
            id="company"
            placeholder="Awesome Pizza Place"
            length="30"
            text={work ? work.company : ""}
          />

          <Input label={'Start Date'}
            type={"text"}
            id="start"
            placeholder="12/05"
            length="11"
            text={work ? work.start : ""}
          />

          <Input label={'End Date'}
            type={"text"}
            id="end"
            placeholder="Ongoing"
            length="11"
            text={work ? work.end : ""}
          />

          <Textarea label={'Profile Text'}
            id="job-description"
            placeholder="This is where you insert information about your employement venture: remember to keep it short and memorable, maybe use bullet points for brevity."
            maxLength="500"
            text={work ? work.description : ""} />

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

export default WorkForm;
