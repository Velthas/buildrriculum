import React, { useState } from 'react';

import SkillsForm from '../form/SkillsForm';
import SkillItem from './entries/SkillItem';

const Skills = (props) => {
  const {skills, addSkill, editSkill, deleteSkill, callback} = props;

  const [add, setAdd] = useState(false);
  const [buttons, setButtons] = useState(false);

  const toggleAdd = () => setAdd(!add);
  const toggleButtons = (bool) => setButtons(bool);

  return (
    <div
      className="cv-section flex-column centered-both languages"
      onMouseEnter={() => toggleButtons(true)}
      onMouseLeave={() => toggleButtons(false)}>

      { buttons && (
        <button
          className="edit-button absolute-top-right"
          onClick={toggleAdd}
        >
          Add
        </button>
        ) 
      }

      <h3 className="section-header">Skills</h3>

      <ul>
        {skills.map((skill) => (
          <SkillItem
            editSkill={editSkill}
            deleteSkill={deleteSkill}
            skill={skill}
            key={skill.id}
            setSkill={callback}
          />
        ))}
      </ul>

      { add && (
          <SkillsForm
            handleSubmit={addSkill}
            toggleEdit={toggleAdd}
            setSkill={callback}
          />
        ) 
      }

    </div>
  );
}

export default Skills;
