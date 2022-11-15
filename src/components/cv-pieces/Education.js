import React, { useState } from 'react';

import EducationItem from './entries/EducationItem';
import EducationForm from '../form/EducationForm';

const Education = (props) => {
  const { education, addEducation, editEducation, deleteEducation, callback} = props;

  const [buttons, setButtons] = useState(false);
  const [add, setAdd] = useState(false);

  const toggleAdd = () => setAdd(!add);
  const toggleButtons = (bool) => setButtons(bool);

  return (
    <div className="cv-section flex-column education"
      onMouseEnter={() => toggleButtons(true)}
      onMouseLeave={() => toggleButtons(false)}>

      { buttons &&
       <button className="edit-button absolute-top-right"
         onClick={toggleAdd}>
          Add
       </button> }

      <h3 className='section-header'>Education</h3>

      <div>
        { education.map((education) => {
          return (
            <EducationItem
              key={education.id}
              editEducation={editEducation}
              deleteEducation={deleteEducation}
              education={education}
              setEducation={callback}
            />
          )
        })}
      </div>

      { add &&
        <EducationForm 
          handleSubmit={addEducation}
          toggleEdit={toggleAdd}
          setEducation={callback}/>
      }
    </div>
  );
}

export default Education;
