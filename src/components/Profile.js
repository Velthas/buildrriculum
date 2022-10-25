import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      buttons: false
    }

    let {changeInfo, displayButtons, hideButtons} = this.props;
    this.changeInfo = changeInfo;
    this.toggleEdit = this.toggleEdit.bind(this);
    this.displayButtons = displayButtons.bind(this);
    this.hideButtons = hideButtons.bind(this);
  }

  toggleEdit() {
    this.setState({
      edit: !this.state.edit,
    });
  }

  render() {
    return (
    <div className="cv-section flex-column centered-both"  onMouseEnter={this.displayButtons} onMouseLeave={this.hideButtons}>
    { this.state.buttons && <button className="edit-button absolute-top-left" onClick={this.toggleEdit}>Modify</button> }
    <h3 className="section-header">Profile</h3>
    <p className="section-paragraph">{this.props.profile}</p>
  { this.state.edit && 
    <div className="form">
      <form id="profile-form">
        <label for="profile-text">{'Profile Text'}</label>
        <textarea max-length="400" placeholder="This is where a description should go, or perhaps even would go, if you dared to insert it" id="profile-text"></textarea>
        <div className="flex-row">
          <button class="button-cancel" type="button" onClick={this.toggleEdit}>Cancel</button>
          <button class="button-submit" type="submit" onClick={(e) => {
            e.preventDefault();
            const newProfile = document.querySelector('#profile-form textarea').value
            this.props.changeInfo('profile', newProfile);
            this.toggleEdit();
          }}>Confirm</button>
        </div>
      </form>
    </div> }
  </div>
  )}
}

export default Profile;
