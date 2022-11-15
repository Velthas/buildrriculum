import React, { useState } from 'react';

import Eleanor from '../../images/eleanor.jpeg';

import Picture from './Picture';
import Profile from './Profile';
import Contacts from './Contacts';
import Languages from './Languages';
import Skills from './Skills';

function Sidebar(props) {
  const {
    changeInfo, addToArray, removeFromArray, editEntry,
  } = props;

  const profilePlaceholder = 'This is a description. You may wonder what it describes, or what even is its purpose in life, but truth is, I am not yet ready to disclose that information: in short, what should be a brief, informative paragraph, really has become a long, condescending, pedantic gathering of words. Go on and edit this with your own, relevant info!';
  const contactsPlaceholder = [
    {
      telephone: '000-000-0000',
      mail: 'example@mail.org',
      website: 'https://yourwebsite.com/',
    },
  ];
  const languagesPlaceholder = [
    { language: 'English', fluency: 'Fluent', id: 0 },
  ];
  const skillsPlaceholder = [
    { name: 'Pizza Slice Juggler', id: 1 },
    { name: 'Moderately useful skill', id: 2 },
    { name: 'Procastinating', id: 3 },
  ];

  const [photo, setPhoto] = useState(Eleanor);
  const [profile, setProfile] = useState(profilePlaceholder);
  const [contacts, setContacts] = useState(contactsPlaceholder);
  const [languages, setLanguages] = useState(languagesPlaceholder);
  const [skills, setSkills] = useState(skillsPlaceholder);

  return (
    <div id="sidebar" className="flex-column centered">
      <Picture
        imgUrl={photo}
        changeInfo={changeInfo}
        callback={setPhoto}
      />
      <Profile
        profile={profile}
        changeInfo={changeInfo}
        callback={setProfile}
      />
      <Contacts
        contacts={contacts}
        changeInfo={changeInfo}
        callback={setContacts}
      />
      <Skills
        skills={skills}
        addSkill={addToArray}
        deleteSkill={removeFromArray}
        editSkill={editEntry}
        callback={setSkills}
      />
      <Languages
        languages={languages}
        addLanguage={addToArray}
        editLanguage={editEntry}
        deleteLanguage={removeFromArray}
        callback={setLanguages}
      />
    </div>
  );
}

export default Sidebar;
