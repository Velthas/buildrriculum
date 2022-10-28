import React, { Component } from "react";
import uniqid from 'uniqid';

import trashcan from '../images/trashcan.svg';

class Languages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      buttons: false,
      trashcans: false,
    }

    let {addLanguage, deleteLanguage, displayButtons, hideButtons, toggleEdit} = this.props;
    this.addLanguage = addLanguage;
    this.deleteLanguage = deleteLanguage;
    this.toggleEdit = toggleEdit.bind(this);
    this.displayDeleteImg = this.displayDeleteImg.bind(this);
    this.displayButtons = displayButtons.bind(this);
    this.hideButtons = hideButtons.bind(this);
  }

  displayDeleteImg() {
    this.setState({
      trashcans: !this.state.trashcans,
    })
  }

  render() {
    return (
    <div className="cv-section flex-column centered-both languages"  onMouseEnter={this.displayButtons} onMouseLeave={this.hideButtons}>

      { this.state.buttons && <button className="edit-button absolute-top-right" onClick={this.toggleEdit}>Add</button> }

      <h3 className="section-header">Languages</h3>
      <ul onMouseEnter={this.displayDeleteImg} onMouseLeave={this.displayDeleteImg}>
      {this.props.languages.map((lang, index) => {
       return <li key={lang.id}>
          <p>{lang.language + ' - ' + lang.fluency}</p>
          { this.state.trashcans && <img src={trashcan} className="trashcan" onClick={() => { this.deleteLanguage('languages', index) }}></img> }
        </li> 
      })}
      </ul>

      { this.state.edit && 
        <div className="form">
          <form id="language-form">
            <label for="language-name">{'Language Name'}</label>
            <input type="text" placeholder="English" id="language-name"></input>

            <label for="language-fluency">{'Proficiency Level'}</label>
            <input type="text" placeholder="Fluent" id="language-fluency"></input>

            <div className="flex-row">
              <button class="button-cancel" type="button" onClick={this.toggleEdit}>Cancel</button>
              <button class="button-submit" type="submit" onClick={(e) => {
                e.preventDefault();
                const languageName = document.querySelector('#language-name').value;
                const languageLevel = document.querySelector('#language-fluency').value;
                const uniqueId = uniqid();
                const newEntry = {language: languageName, fluency: languageLevel, id: uniqueId}
                this.addLanguage('languages', newEntry);
                this.toggleEdit();
              }}>Confirm</button>
            </div>
          </form>
        </div> }


  </div>
  )}
}

export default Languages;