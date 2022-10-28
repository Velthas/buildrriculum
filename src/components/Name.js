import React, { Component } from 'react'

class Name extends Component {
  constructor(props) {
    super(props)

    this.state = {
      buttons: false,
      edit: false,
    }

    this.displayButtons = this.props.displayButtons.bind(this);
    this.hideButtons = this.props.hideButtons.bind(this);
    this.toggleEdit = this.props.toggleEdit.bind(this);
  }

  render() {
    const {name, title} = this.props

    return (
      <div className="cv-section flex-column name" onMouseEnter={this.displayButtons} onMouseLeave={this.hideButtons}>
        { this.state.buttons && <button className="edit-button absolute-top-right" onClick={this.toggleEdit}>Modify</button> }
        <h1>{name}</h1>
        <h2>{title}</h2>

        {this.state.edit && 
         <div className="form">
         <form id="name-form" className="flex-column">
           <label for="person-name">{'Full Name'}</label>
           <input type="text" maxLength="30" placeholder="John Smith" id="person-name"></input>
           <label for="person-role">{'Role'}</label>
           <input type="text" maxLength="30" placeholder="Trainspotter" id="person-role"></input>
           <div className="flex-row">
             <button class="button-cancel" type="button" onClick={this.toggleEdit}>Cancel</button>
             <button class="button-submit" type="submit" onClick={(e) => {
               e.preventDefault();
               const newInfo = Array.from(document.querySelectorAll('#name-form input')).map(input => input.value);
               const [userName, role] = newInfo;
               this.props.changeInfo('name', userName);
               this.props.changeInfo('title', role);
               this.toggleEdit();
             }}>Confirm</button>
           </div>
         </form>
       </div>}
      </div>
    )
  }
}

export default Name;