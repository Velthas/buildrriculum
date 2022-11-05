import React, {Component} from 'react';
import ProfileForm from '../form/ProfileForm';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      buttons: false,
    };

    this.changeInfo = this.props.changeInfo;
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    this.setState({edit: !this.state.edit});
  }

  render() {
    return (
      <div className="cv-section flex-column centered-both"
        onMouseEnter={() => this.setState({buttons: true})}
        onMouseLeave={() => this.setState({buttons: false})}>

        { this.state.buttons &&
         <button className="edit-button absolute-top-right"
           onClick={() => this.setState({edit: !this.state.edit})}>
            Modify
         </button> }

        <h3 className="section-header">Profile</h3>
        <p className="section-paragraph">{this.props.profile}</p>

        { this.state.edit &&
          <ProfileForm
          toggleEdit={this.toggleEdit}
          handleSubmit={this.changeInfo} /> }
      </div>
    );
  }
}

export default Profile;
