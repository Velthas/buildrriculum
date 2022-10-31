import React, {Component} from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      buttons: false,
    };

    this.changeInfo = this.props.changeInfo;
  }

  render() {
    return (
      <div className="cv-section flex-column centered-both"
        onMouseEnter={() => this.setState({buttons: true})}
        onMouseLeave={() => this.setState({buttons: false})}>

        { this.state.buttons &&
         <button className="edit-button absolute-top-right"
           onClick={this.setState({edit: !this.state.edit})}>
            Modify
         </button> }

        <h3 className="section-header">Profile</h3>
        <p className="section-paragraph">{this.props.profile}</p>

        { this.state.edit &&
        <div className="form">
          <form id="profile-form">
            <label htmlFor="profile-text">{'Profile Text'}</label>
            <textarea max-length="400"
              placeholder="This is where a description should go,
              or perhaps even would go, if you dared to insert it"
              id="profile-text">
            </textarea>

            <div className="flex-row">
              <button className="button-cancel"
                type="button"
                onClick={this.setState({edit: !this.state.edit})}>
                  Cancel
              </button>
              <button className="button-submit"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  const newProfile = document
                      .querySelector('#profile-form textarea')
                      .value;
                  this.props.changeInfo('profile', newProfile);
                  this.setState({edit: !this.state.edit})
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

export default Profile;
