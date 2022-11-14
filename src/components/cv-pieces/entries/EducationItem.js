import React, { useState } from 'react';

import EducationForm from '../../form/EducationForm';

import trashcan from '../../../images/trashcan.svg';
import pencil from '../../../images/pencil.svg';

const EducationItem = (props) => {
  const { editEducation, deleteEducation, education } = props;

  const [edit, setEdit] = useState(false);
  const [icons, setIcons] = useState(false);

  const toggleEdit = () => setEdit(!edit);
  const toggleIcons = (bool) => setIcons(bool)

  return (
    <>
      <div className="work-entry flex-column"
        onMouseEnter={ () => toggleIcons(true) }
        onMouseLeave={ () => toggleIcons(false) }
      >

        <h4>{ education.title }</h4>
        <div className="flex-row space-between job-info">
          <p>{ education.institution }</p>
          <p>{ education.start + ' - ' + education.end }</p>
        </div>
        <p>{ education.description }</p>

        { icons && (
          <div className="icon-container absolute-position absolute-bottom-right">

            <img
              src={pencil}
              className="edit-icon"
              onClick={ toggleEdit }
            />
            
            <img
              src={trashcan}
              className="edit-icon"
              onClick={() => deleteEducation('education', education.id) }
            />

          </div>
        )}
      </div>

      { edit &&
        <EducationForm
          handleSubmit={ editEducation }
          toggleEdit={ toggleEdit }
          education={ education }
        />
      }
    </>
  );
}

export default EducationItem;
