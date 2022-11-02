import React, {Component} from 'react';
import uniqid from 'uniqid';

import trashcan from '../images/trashcan.svg';

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      buttons: false,
      trashcans: false,
    };

    const {addSkill, deleteSkill} = this.props;
    this.addSkill = addSkill;
    this.deleteSkill = deleteSkill;
  }

  render() {
    return (
      <div className="cv-section flex-column centered-both languages"
        onMouseEnter={() => this.setState({buttons: true})}
        onMouseLeave={() => this.setState({buttons: false})}>

        { this.state.buttons &&
         <button className="edit-button absolute-top-right"
           onClick={() => this.setState({edit: !this.state.edit})}>
            Add
         </button> }

        <h3 className="section-header">Skills</h3>
        <ul onMouseEnter={() => this.setState({trashcans: true})}
          onMouseLeave={() => this.setState({trashcans: false})}>
          {this.props.skills.map((skill) => {
            return <li key={skill.id}>
              <p>{skill.name}</p>
              { this.state.trashcans &&
               <img src={trashcan} className="trashcan" onClick={() => {
                 this.deleteSkill('skills', skill.id);
               }}></img> }
            </li>;
          })}
        </ul>

        { this.state.edit &&
        <div className="form">
          <form id="skill-form">
            <label htmlFor="skill-name">{'Skill'}</label>
            <input type="text" placeholder="Demolishing Pizzas" id="skill-name"></input>

            <div className="flex-row">
              <button className="button-cancel"
                type="button"
                onClick={() => this.setState({edit: !this.state.edit})}>
                  Cancel
              </button>
              <button className="button-submit" type="submit" onClick={(e) => {
                e.preventDefault();
                const name = document
                    .querySelector('#skill-name')
                    .value;
                const id = uniqid();
                this.addSkill('skills', {name, id});
                this.setState({edit: !this.state.edit});
              }}>
                Confirm
              </button>
            </div>
          </form>
        </div> }

      </div>
    );
  }
}

export default Skills;
