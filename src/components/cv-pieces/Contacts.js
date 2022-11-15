import React, { useState } from 'react';

import ContactForm from '../form/ContactForm';

import email from '../../images/mail.svg';
import web from '../../images/web.svg';
import smartphone from '../../images/smartphone.svg';

const Contacts = (props) => {
  const {contacts, changeInfo, callback} = props;
  const {telephone, mail, website} = contacts[0];

  const [edit, setEdit] = useState(false);
  const [buttons, setButtons] = useState(false);

  const toggleEdit = () => setEdit(!edit);
  const toggleButtons = (bool) => setButtons(bool);

  return (
    <div className="cv-section flex-column centered-both contacts"
      onMouseEnter={() => toggleButtons(true) }
      onMouseLeave={() => toggleButtons(false) }>

      { buttons &&
        <button className="edit-button absolute-top-right"
          onClick={toggleEdit}>
          Modify
        </button> 
      }

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

      { edit &&
        <ContactForm
          handleSubmit={changeInfo}
          toggleEdit={toggleEdit}
          setContacts={callback}
        />   
      }

    </div>
  );
}

export default Contacts;
