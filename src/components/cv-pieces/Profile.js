import React, { useState } from 'react';

import ProfileForm from '../form/ProfileForm';

function Profile(props) {
  const { profile, changeInfo, callback } = props;

  const [edit, setEdit] = useState(false);
  const [buttons, setButtons] = useState(false);

  const toggleEdit = () => setEdit(!edit);
  const toggleButtons = (bool) => setButtons(bool);

  return (
    <div
      className="cv-section flex-column centered-both"
      onMouseEnter={() => toggleButtons(true)}
      onMouseLeave={() => toggleButtons(false)}
    >

      { buttons && (
        <button
          className="edit-button absolute-top-right"
          onClick={toggleEdit}
        >
          Modify
        </button>
      )}

      <h3 className="section-header">Profile</h3>
      <p className="section-paragraph">{profile}</p>

      { edit && (
        <ProfileForm
          toggleEdit={toggleEdit}
          handleSubmit={changeInfo}
          setProfile={callback}
        />
      )}
    </div>
  );
}

export default Profile;
