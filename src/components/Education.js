import React, { Component } from 'react';
import uniqid from 'uniqid';

import trashcan from '../images/trashcan.svg';

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttons: false,
      edit: false,
      trashcans: false,
    }

    const {displayButtons, hideButtons, toggleEdit} = this.props
    this.toggleEdit = toggleEdit.bind(this);
    this.displayButtons = displayButtons.bind(this);
    this.hideButtons = hideButtons.bind(this);
    this.displayDeleteImg = this.displayDeleteImg.bind(this);
    this.hideDeleteImg = this.hideDeleteImg.bind(this);
  }

  displayDeleteImg() {
    this.setState({
      trashcans: true,
    })
  }

  hideDeleteImg() {
    this.setState({
      trashcans: false,
    })
  }

  render() {
    const {education, addEducation, deleteEducation} = this.props;

    return (
    <div className="cv-section flex-column education" onMouseEnter={this.displayButtons} 
    onMouseLeave={this.hideButtons}>

    { this.state.buttons && <button className="edit-button absolute-top-right" onClick={this.toggleEdit}>Add</button> }

    <h3 className='section-header'>Education</h3>

    <div onMouseEnter={this.displayDeleteImg} onMouseLeave={this.hideDeleteImg}>
    { education.map((education, index) => {
      return <div key={uniqid()} className="work-entry flex-column">

        { this.state.trashcans && <img src={trashcan} className='absolute-position absolute-bottom-right trashcan' onClick={() => { deleteEducation('education', index) }}></img> }

        <h4>{ education.title }</h4>
        <div className="flex-row space-between job-info">
          <p>{ education.institution }</p>
          <p>{ education.start + ' - ' + education.end }</p>   
        </div>
        <p>{ education.description }</p>
      </div>
    })}
    </div>
    
    {this.state.edit && 
     <div className="form">
     <form id="education-form" className="flex-column">

       <label for="degree">{'Education Title'}</label>
       <input type="text" maxLength="35" placeholder="Rubik Cube Engineering" id="degree"></input>
       <label for="institution">{'Issuing Institution'}</label>
       <input type="text" maxLength="30" placeholder="Harvard University" id="institution"></input>
       <label for="start-ed">{'Start Date'}</label>
       <input type="text" maxLength="11" placeholder="01/12" id="start-ed"></input>
       <label for="end-ed">{'End Date'}</label>
       <input type="text" maxLength="11" placeholder="05/13" id="end-ed"></input>
       <label for="edu-description">{'Education Description'}</label>
       <textarea maxLength="500" placeholder="GPA: 4" id="edu-description"></textarea>

       <div className="flex-row">
         <button class="button-cancel" type="button" onClick={this.toggleEdit}>Cancel</button>
         <button class="button-submit" type="submit" onClick={(e) => {
           e.preventDefault();
           const jobInfo = Array.from(document.querySelectorAll('#education-form input')).map(input => input.value);
           const [title, institution, start, end] = jobInfo;
           const description = document.querySelector('#education-form textarea').value
           addEducation('education', {title, institution, start, end, description})
           this.toggleEdit();
         }}>Confirm</button>
       </div>
     </form>
   </div>}
  </div>)
  }
}

export default Education;