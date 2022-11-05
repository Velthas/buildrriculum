import React, {Component} from 'react';

import SkillsForm from '../../form/SkillsForm';

import trashcan from '../../../images/trashcan.svg';
import pencil from '../../../images/pencil.svg';

class Skill extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      icons: false,
    };

    const {editSkill, deleteSkill, skill} = this.props; 
    this.deleteSkill = deleteSkill;
    this.editSkill = editSkill;
    this.skill = skill;

    this.toggleEdit = this.toggleEdit.bind(this);
  }
  
  toggleEdit() {
    this.setState({edit: !this.state.edit});
  }

  render() {
    return (
      <>
        <li 
        key={this.skill.id}
        onMouseEnter={() => this.setState({icons: true})}
        onMouseLeave={() => this.setState({icons: false})}>
          <p>{this.skill.name}</p>
          { this.state.icons &&
            <>
              <img src={trashcan} className="trashcan"
                onClick={() => {
                  this.deleteSkill('skills', this.skill.id);
                }}>
              </img>

              <img src={pencil} className="trashcan"
                onClick={()=> this.setState({edit: true})}></img>
            </>
          }
        </li>

          { this.state.edit &&
          <SkillsForm handleSubmit={this.editSkill}
          toggleEdit={this.toggleEdit} skill={this.skill} /> }
      </>
    );
  }
}

export default Skill;
