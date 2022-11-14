import React, { useState } from 'react';

import SkillsForm from '../../form/SkillsForm';

import trashcan from '../../../images/trashcan.svg';
import pencil from '../../../images/pencil.svg';

const SkillItem = (props) => {
  const { editSkill, deleteSkill, skill } = props;

  const [edit, setEdit] = useState(false);
  const [icons, setIcons] = useState(false);

  const toggleEdit = () => { setEdit(!edit) };
  const toggleIcons = (bool) => { setIcons(bool) };

  return (
    <>
        <li
          onMouseEnter={ () => toggleIcons(true) }
          onMouseLeave={ () => toggleIcons(false) }
        >
          <p>{skill.name}</p>

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
                onClick={() => deleteSkill('skills', skill.id) }
              />
            </div>
          )}
        </li>

        { edit && (
          <SkillsForm
            handleSubmit={editSkill}
            toggleEdit={toggleEdit}
            skill={skill}
          />
          ) }
      </>
  );
}

export default SkillItem;
