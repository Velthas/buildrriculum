import React, {Component} from 'react';
import uniqid from 'uniqid';

import EducationItem from './entries/EducationItem';
import EducationForm from '../form/EducationForm';

import trashcan from '../../images/trashcan.svg';

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttons: false,
      add: false,
    };

    this.toggleAdd = this.toggleAdd.bind(this);
  }

  toggleAdd() {
    this.setState({
      add: !this.state.add
    })
  }

  render() {
    const {education, addEducation, deleteEducation, editEducation} = this.props;

    return (
      <div className="cv-section flex-column education"
        onMouseEnter={() => this.setState({buttons: true})}
        onMouseLeave={() => this.setState({buttons: false})}>

        { this.state.buttons &&
         <button className="edit-button absolute-top-right"
           onClick={this.toggleAdd}>
            Add
         </button> }

        <h3 className='section-header'>Education</h3>

        <div>
          { education.map((education) => {
            return (
              <EducationItem
              key={education.id}
              editEducation={editEducation}
              deleteEducation={deleteEducation}
              education={education}
               />
            )
          })}
        </div>

        {this.state.add &&
          <EducationForm 
          handleSubmit={addEducation}
          toggleEdit={this.toggleAdd}/>
     }

      </div>);
  }
}

export default Education;
