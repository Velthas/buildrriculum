import React, { useState } from 'react';

import WorkForm from '../../form/WorkForm';

import trashcan from '../../../images/trashcan.svg';
import pencil from '../../../images/pencil.svg';

const WorkItem = (props) => {
  const { editWork, deleteWork, work, setWork } = props;

  const [edit, setEdit] = useState(false);
  const [icons, setIcons] = useState(false);

  const toggleEdit = () => setEdit(!edit);
  const toggleIcons = (bool) => setIcons(bool);

  return (
    <>
        <div className="work-entry flex-column"
          onMouseEnter={() => toggleIcons(true)}
          onMouseLeave={() => toggleIcons(false)}
        >

          <h4>{work.position}</h4>
          <div className="flex-row space-between job-info">
            <p>{work.company}</p>
            <p>{work.start + ' - ' + work.end}</p>
          </div>
          <p>{ work.description }</p>

          { icons
            && (
            <div className="icon-container absolute-position absolute-bottom-right">

              <img
                src={pencil}
                className="edit-icon"
                onClick={toggleEdit}
              />
              
              <img
                src={trashcan}
                className="edit-icon"
                onClick={ () => deleteWork(setWork, work.id) }
              />

            </div>
            )}
          </div>

        { edit && (
          <WorkForm
            handleSubmit={editWork}
            toggleEdit={toggleEdit}
            work={work}
            setWork={setWork}
          />
        )
        }
    </>
  )
}

export default WorkItem;
