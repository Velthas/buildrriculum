import React, {Component} from 'react';
import Textarea from './inputs/Textarea';


class ProfileForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {toggleEdit, handleSubmit} = this.props
    return (
      <div className="form">
          <form id="profile-form">

            <Textarea label={'Profile Text'}
            id="profile-text"
            placeholder="This is where a description should go,
            or perhaps even would go, if you dared to insert it"
            maxLength="450" />

            <div className="flex-row">
              <button className="button-cancel"
                type="button"
                onClick={toggleEdit}>
                 Cancel
              </button>
              <button className="button-submit"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  const text = document
                    .querySelector('#profile-form textarea')
                    .value;
                  handleSubmit('profile', text);
                  toggleEdit();
                }}>
                Confirm
              </button>
            </div>

          </form>
        </div>
    )
  }
}

export default ProfileForm;
