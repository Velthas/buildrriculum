/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import uniqid from 'uniqid';
import trashcan from '../images/trashcan.svg';

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttons: false,
      edit: false,
      trashcans: false,
    };
  }

  render() {
    const {work, addExperience, deleteExperience} = this.props;

    return (
      <div
        className="cv-section flex-column work"
        onMouseEnter={() => this.setState({buttons: true})}
        onMouseLeave={() => this.setState({buttons: false})}>

        { this.state.buttons &&
         <button className="edit-button absolute-top-right"
           onClick={this.setState({edit: !this.state.edit})}>Add</button> }

        <h3 className='section-header'>Work Experience</h3>

        <div onMouseEnter={() => this.setState({trashcans: true})}
          onMouseLeave={() => this.setState({trashcans: false})}>
          { work.map((experience, index) => {
            return <div key={uniqid()} className="work-entry flex-column">

              { this.state.trashcans &&
               <img src={trashcan}
                 className='absolute-position absolute-bottom-right trashcan'
                 onClick={() => {
                   deleteExperience('work', index);
                 }}>
               </img> }

              <h4>{experience.position}</h4>
              <div className="flex-row space-between job-info">
                <p>{experience.company}</p>
                <p>{experience.start + ' - ' + experience.end}</p>
              </div>
              <p>{ experience.description }</p>
            </div>;
          })}
        </div>

        {this.state.edit &&
        <div className="form">
          <form id="job-form" className="flex-column">

            <label htmlFor="position">{'Position'}</label>
            <input type="text"
              maxLength="35"
              placeholder="Pizza Ingurgitation Specialist"
              id="position">
            </input>

            <label htmlFor="company">{'Company'}</label>
            <input type="text"
              maxLength="30"
              placeholder="Pizza Place"
              id="company">
            </input>

            <label htmlFor="start">{'Start Date'}</label>
            <input type="text"
              maxLength="11"
              placeholder="01/12"
              id="start">
            </input>

            <label htmlFor="end">{'End Date'}</label>
            <input type="text"
              maxLength="11"
              placeholder="05/13"
              id="end">
            </input>

            <label htmlFor="job-description">{'Job Description'}</label>
            <textarea maxLength="500"
              placeholder="Ate pizza and paid not. What's not to love, choom?"
              id="job-description">
            </textarea>

            <div className="flex-row">
              <button className="button-cancel"
                type="button"
                onClick={this.setState({edit: !this.state.edit})}>
                Cancel
              </button>
              <button className="button-submit" type="submit" onClick={(e) => {
                e.preventDefault();
                const jobInfo =
                Array.from(document.querySelectorAll('#job-form input'))
                    .map((input) => input.value);
                const [position, company, start, end] = jobInfo;
                const description = document
                    .querySelector('#job-form textarea')
                    .value;
                addExperience('work', {position, company, start, end, description});
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

export default Work;
