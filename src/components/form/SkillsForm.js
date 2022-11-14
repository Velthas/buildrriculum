import React from 'react';
import uniqid from 'uniqid';

import Input from './inputs/Input';

const SkillsForm = (props) => {
  const {toggleEdit, handleSubmit, skill} = props;

  const submitForm = (e) => {
    e.preventDefault();

    const name = document
      .querySelector('#skill-name')
      .value;
    const id = skill ? skill.id : uniqid();

    handleSubmit('skills', {name, id});
    toggleEdit();
  }
  
  return (
    <div className="form">
        <form id="skill-form">

          <Input label={'Skill'}
            type={'text'}
            id="skill-name"
            placeholder="Pizza Ingurgitation Specialist"
            length="25"
            text={skill ? skill.name : ""}
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
              onClick={ (e) => submitForm(e) }
            >
              Confirm
            </button>
          </div>

        </form>
      </div>
  )
}

export default SkillsForm;
