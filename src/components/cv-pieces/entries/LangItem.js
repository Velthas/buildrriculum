import React, { useState } from 'react';

import LanguageForm from '../../form/LanguageForm';

import trashcan from '../../../images/trashcan.svg';
import pencil from '../../../images/pencil.svg';

const LangItem = (props) => {
  const { editLanguage, deleteLanguage, lang, setLanguages } = props;

  const [edit, setEdit] = useState(false);
  const [icons, setIcons] = useState(false);

  const toggleEdit = () => { setEdit(!edit) }
  const toggleIcons = (bool) => { setIcons(bool) }

  return (
    <>
        <li
          onMouseEnter={ () => toggleIcons(true) }
          onMouseLeave={ () => toggleIcons(false) }
        >

          <p>{lang.language + ' - ' + lang.fluency}</p>

          { icons && (
            <div className="icon-container">
              <img
                src={pencil}
                className="edit-icon"
                onClick={toggleEdit}
              />
              
              <img
                src={trashcan}
                className="edit-icon"
                onClick={ () => deleteLanguage(setLanguages, lang.id) }
              />
            </div>
          )}
        </li>

        { edit && (
          <LanguageForm
            handleSubmit={editLanguage}
            toggleEdit={toggleEdit}
            lang={lang}
            setLanguages={setLanguages}
          />
        )}
    </>
  );
}

export default LangItem;