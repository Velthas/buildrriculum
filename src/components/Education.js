import React, {Component} from 'react';
import uniqid from 'uniqid';

import trashcan from '../images/trashcan.svg';

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttons: false,
      edit: false,
      trashcans: false,
    };
  }

  render() {
    const {education, addEducation, deleteEducation} = this.props;

    return (
      <div className="cv-section flex-column education"
        onMouseEnter={() => this.setState({buttons: true})}
        onMouseLeave={() => this.setState({buttons: false})}>

        { this.state.buttons &&
         <button className="edit-button absolute-top-right"
           onClick={() => this.setState({edit: !this.state.edit})}>
            Add
         </button> }

        <h3 className='section-header'>Education</h3>

        <div onMouseEnter={() => this.setState({trashcans: true})}
          onMouseLeave={() => this.setState({trashcans: false})}>
          { education.map((education) => {
            return <div key={education.id} className="work-entry flex-column">

              { this.state.trashcans &&
               <img src={trashcan}
                 className='absolute-position absolute-bottom-right trashcan'
                 onClick={() => { deleteEducation('education', education.id); }}>
               </img> }

              <h4>{ education.title }</h4>
              <div className="flex-row space-between job-info">
                <p>{ education.institution }</p>
                <p>{ education.start + ' - ' + education.end }</p>
              </div>
              <p>{ education.description }</p>
            </div>;
          })}
        </div>

        {this.state.edit &&
     <div className="form">
       <form id="education-form" className="flex-column">

         <label htmlFor="degree">{'Education Title'}</label>
         <input type="text"
           maxLength="35"
           placeholder="Rubik Cube Engineering"
           id="degree">
         </input>

         <label htmlFor="institution">{'Issuing Institution'}</label>
         <input type="text"
           maxLength="30"
           placeholder="Harvard University"
           id="institution">
         </input>

         <label htmlFor="start-ed">{'Start Date'}</label>
         <input type="text"
           maxLength="11"
           placeholder="01/12"
           id="start-ed">
         </input>

         <label htmlFor="end-ed">{'End Date'}</label>
         <input type="text"
           maxLength="11"
           placeholder="05/13"
           id="end-ed">
         </input>

         <label htmlFor="edu-description">{'Education Description'}</label>
         <textarea maxLength="500"
           placeholder="GPA: 4"
           id="edu-description">
         </textarea>

         <div className="flex-row">
           <button className="button-cancel"
             type="button"
             onClick={() => this.setState({edit: !this.state.edit})}>
               Cancel
           </button>
           <button className="button-submit" type="submit" onClick={(e) => {
             e.preventDefault();
             const jobInfo = Array
                 .from(document.querySelectorAll('#education-form input'))
                 .map((input) => input.value);
             const [title, institution, start, end] = jobInfo;
             const description = document
                 .querySelector('#education-form textarea')
                 .value;
             const id = uniqid();
             addEducation('education',
                 {title, institution, start, end, description, id});
             this.setState({edit: !this.state.edit})
           }}>
             Confirm
           </button>
         </div>
       </form>
     </div>}

      </div>);
  }
}

export default Education;
