import React, { useState } from 'react';

import LangItem from './entries/LangItem';
import LanguageForm from '../form/LanguageForm';

function Languages(props) {
  const {
    languages, addLanguage, editLanguage, deleteLanguage, callback,
  } = props;

  const [edit, setEdit] = useState(false);
  const [buttons, setButtons] = useState(false);

  const toggleEdit = () => setEdit(!edit);
  const toggleButtons = (bool) => setButtons(bool);

  return (
    <div
      className="cv-section flex-column centered-both languages"
      onMouseEnter={() => toggleButtons(true)}
      onMouseLeave={() => toggleButtons(false)}
    >

      { buttons
       && (
       <button
         className="edit-button absolute-top-right"
         onClick={toggleEdit}
       >
         Add
       </button>
       ) }

      <h3 className="section-header">Languages</h3>

      <ul>

        { languages.map((lang) => (
          <LangItem
            editLanguage={editLanguage}
            deleteLanguage={deleteLanguage}
            lang={lang}
            key={lang.id}
            setLanguages={callback}
          />
        ))}

      </ul>

      { edit
        && (
        <LanguageForm
          handleSubmit={addLanguage}
          toggleEdit={toggleEdit}
          setLanguages={callback}
        />
        )}

    </div>
  );
}

export default Languages;
