import React, {Component} from 'react';
import uniqid from 'uniqid';

import trashcan from '../../images/trashcan.svg';

class Languages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      buttons: false,
      trashcans: false,
    };

    const {addLanguage, deleteLanguage} = this.props;
    this.addLanguage = addLanguage;
    this.deleteLanguage = deleteLanguage;
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

        <h3 className="section-header">Languages</h3>
        <ul onMouseEnter={() => this.setState({trashcans: !this.state.trashcans})}
          onMouseLeave={() => this.setState({trashcans: !this.state.trashcans})}>
          {this.props.languages.map((lang) => {
            return <li key={lang.id}>
              <p>{lang.language + ' - ' + lang.fluency}</p>
              { this.state.trashcans &&
               <img src={trashcan} className="trashcan" onClick={() => {
                 this.deleteLanguage('languages', lang.id);
               }}></img> }
            </li>;
          })}
        </ul>

        { this.state.edit &&
        <div className="form">
          <form id="language-form">
            <label htmlFor="language-name">{'Language Name'}</label>
            <input type="text" placeholder="English" id="language-name"></input>

            <label htmlFor="language-fluency">{'Proficiency Level'}</label>
            <input type="text"
              placeholder="Fluent"
              id="language-fluency">
            </input>

            <div className="flex-row">
              <button className="button-cancel"
                type="button"
                onClick={() => this.setState({edit: !this.state.edit})}>
                  Cancel
              </button>
              <button className="button-submit" type="submit" onClick={(e) => {
                e.preventDefault();
                const languageName = document
                    .querySelector('#language-name')
                    .value;
                const languageLevel = document
                    .querySelector('#language-fluency')
                    .value;
                const uniqueId = uniqid();
                const newEntry = {
                  language: languageName,
                  fluency: languageLevel,
                  id: uniqueId};
                this.addLanguage('languages', newEntry);
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

export default Languages;
