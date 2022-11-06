import React, {Component} from 'react';
import uniqid from 'uniqid';

import Input from './inputs/Input';


class SkillsForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {toggleEdit, handleSubmit, skill} = this.props;

    return (
      <div className="form">
          <form id="skill-form">

            <Input label={'Skill'}
            type={'text'}
            id="skill-name"
            placeholder="Pizza Ingurgitation Specialist"
            maxLength="25"
            text={skill ? skill.name : ""}
             />

            <div className="flex-row">
              <button className="button-cancel"
                type="button"
                onClick={toggleEdit}>
                 Cancel
              </button>
              <button className="button-submit"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  const name = 
                    document
                      .querySelector('#skill-name')
                      .value;
                  const id = skill ? skill.id : uniqid();
                  handleSubmit('skills', {name, id});
                  toggleEdit();
                }}>
                Confirm
              </button>
            </div>

          </form>
        </div>
    )
  }
}

export default SkillsForm;
