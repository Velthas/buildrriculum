import React, {Component} from 'react';

import ContactForm from '../form/ContactForm';

import email from '../../images/mail.svg';
import web from '../../images/web.svg';
import smartphone from '../../images/smartphone.svg';

class Contacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      buttons: false,
    };

    this.toggleEdit = this.toggleEdit.bind(this)
  }

  toggleEdit() {
    this.setState({
      edit: !this.state.edit
    })
  }

  render() {
    const {telephone, mail, website, changeInfo} = this.props;

    return (
      <div className="cv-section flex-column centered-both contacts"
        onMouseEnter={() => this.setState({buttons: true})}
        onMouseLeave={() => this.setState({buttons: false})}>

        { this.state.buttons &&
        <button className="edit-button absolute-top-right"
          onClick={() => this.setState({edit: !this.state.edit})}>
           Modify
        </button> }

        <h3 className="section-header">Contacts</h3>
        <ul>
          { telephone !== '' &&
          <li className="flex-row">
            <img src={ smartphone } alt="Mobile Icon"></img>
            <p>{ telephone }</p>
          </li> }
          { mail !== '' &&
          <li className="flex-row">
            <img src={ email } alt="Mail Icon"></img>
            <p> { mail } </p>
          </li> }
          { website !== '' &&
          <li className="flex-row">
            <img src={ web } alt="Website Icon"></img>
            <a href={ website }>{ website }</a>
          </li> }
        </ul>

        { this.state.edit &&
          <ContactForm
          handleSubmit={changeInfo}
          toggleEdit={this.toggleEdit} /> }

      </div>
    );
  }
}

export default Contacts;
