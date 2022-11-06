import React, { Component } from 'react';

import SkillsForm from '../../form/SkillsForm';

import trashcan from '../../../images/trashcan.svg';
import pencil from '../../../images/pencil.svg';

class SkillItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      icons: false,
    };

    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  render() {
    const { editSkill, deleteSkill, skill } = this.props;

    return (
      <>
        <li
          onMouseEnter={() => this.setState({ icons: true })}
          onMouseLeave={() => this.setState({ icons: false })}>
          <p>{skill.name}</p>
          { this.state.icons
            && (
            <div className="icon-container">
              <img
                src={pencil}
                className="edit-icon"
                onClick={() => this.setState({ edit: true })}
              />
              
              <img
                src={trashcan}
                className="edit-icon"
                onClick={() => {
                  deleteSkill('skills', skill.id);
                }}
              />
            </div>
            )}
        </li>

        { this.state.edit
          && (
          <SkillsForm
            handleSubmit={editSkill}
            toggleEdit={this.toggleEdit}
            skill={skill}
          />
          ) }
      </>
    );
  }
}

export default SkillItem;
