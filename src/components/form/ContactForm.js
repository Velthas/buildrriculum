import React, {Component} from 'react';

import Input from './inputs/Input';

class ContactForm extends Component {
  constructor(props) {
    super(props);
  }

  submitForm(e) {
    const {toggleEdit, handleSubmit} = this.props;

    e.preventDefault();

    const info = Array
    .from(document.querySelectorAll('#contacts-form input'))
    .map((input) => input.value);
    const [telInfo, mailInfo, siteInfo] = info;
    handleSubmit('telephone', telInfo);
    handleSubmit('mail', mailInfo);
    handleSubmit('website', siteInfo);
    toggleEdit();
  }

  render() {
    const { toggleEdit } = this.props;

    return (
      <div className="form">
          <form id="contacts-form">

            <Input label={'Telephone Number'}
            type={"tel"}
            id="contacts-tel"
            placeholder="3334445555"
            maxLength="25"
            />

            <Input label={'Email'}
            type={"email"}
            id="contacts-email"
            placeholder="example@provider.com"
            maxLength="50"
            />

            <Input label={'Website'}
            type={"url"}
            id="contacts-web"
            placeholder="github.com/myPage"
            maxLength="50"
            />

            <div className="flex-row">
              <button className="button-cancel"
                type="button"
                onClick={toggleEdit}
                >
                 Cancel
              </button>
              <button className="button-submit"
                type="submit"
                onClick={(e) => this.submitForm(e)}
              >
                Confirm
              </button>
            </div>

          </form>
        </div>
    )
  }
}

export default ContactForm;
