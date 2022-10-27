import React, { Component } from "react";
import email from '../images/mail.svg';
import web from '../images/web.svg';
import smartphone from '../images/smartphone.svg';

class Contacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      buttons: false
    }

    let {changeInfo, displayButtons, hideButtons, toggleEdit} = this.props;
    this.changeInfo = changeInfo;
    this.toggleEdit = toggleEdit.bind(this);
    this.displayButtons = displayButtons.bind(this);
    this.hideButtons = hideButtons.bind(this);
  }

  render() {
    let {telephone, mail, website} = this.props;

    return (
      <div className="cv-section flex-column centered-both contacts" onMouseEnter={this.displayButtons} onMouseLeave={this.hideButtons}>
        { this.state.buttons && <button className="edit-button absolute-top-left" onClick={this.toggleEdit}>Modify</button> }
        <h3 className="section-header">Contacts</h3>
        <ul>
          { telephone !== '' &&
          <li className="flex-row">
            <img src={ smartphone } alt="Mobile Icon"></img>
            <p>{ telephone }</p>
          </li>  }
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
          <div className="form">

            <form id="contacts-form">
              <label for="contacts-tel">{'Telephone Number'}</label>
              <input type="tel" placeholder="3334445555" id="contacts-tel"></input>

              <label for="contacts-email">{'Email'}</label>
              <input type="email" placeholder="example@provider.com" id="contacts-email"></input>

              <label for="contacts-web">{'Website'}</label>
              <input type="url" placeholder="https://eleanor.margarita.com/mix" id="contacts-web"></input>

              <div className="flex-row">
                <button class="button-cancel" type="button" onClick={this.toggleEdit}>Cancel</button>
                <button class="button-submit" type="submit" onClick={(e) => {
                  e.preventDefault();
                  const info = Array.from(document.querySelectorAll('#contacts-form input')).map(input => input.value);
                  const [ telInfo, mailInfo, siteInfo ] = info
                  this.props.changeInfo('telephone', telInfo);
                  this.props.changeInfo('mail', mailInfo);
                  this.props.changeInfo('website', siteInfo);
                  this.toggleEdit();
                }}>Confirm</button>
              </div>
            </form>

          </div> }
    </div>
    )
  }
}

export default Contacts;
