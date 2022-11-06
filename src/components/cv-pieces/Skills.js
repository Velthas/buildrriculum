import React, { Component } from 'react';

import SkillsForm from '../form/SkillsForm';
import SkillItem from './entries/SkillItem';

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      add: false,
      buttons: false,
    };

    this.toggleAdd = this.toggleAdd.bind(this);
  }

  toggleAdd() {
    this.setState({ add: !this.state.add });
  }

  render() {
    const {editSkill, addSkill, deleteSkill} = this.props;

    return (
      <div
        className="cv-section flex-column centered-both languages"
        onMouseEnter={() => this.setState({ buttons: true })}
        onMouseLeave={() => this.setState({ buttons: false })}>

        { this.state.buttons
         && (
         <button
           className="edit-button absolute-top-right"
           onClick={() => this.setState({ add: !this.state.add })}>
           Add
         </button>
         ) }

        <h3 className="section-header">Skills</h3>

        <ul>
          {this.props.skills.map((skill) => (
            <SkillItem
              editSkill={editSkill}
              deleteSkill={deleteSkill}
              skill={skill}
              key={skill.id}/>
          ))}
        </ul>

        { this.state.add
        && (
        <SkillsForm
          handleSubmit={addSkill}
          toggleEdit={this.toggleAdd}
        />
        ) }

      </div>
    );
  }
}

export default Skills;
