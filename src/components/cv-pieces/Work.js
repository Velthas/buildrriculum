import React, { useState } from 'react';

import WorkForm from '../form/WorkForm';
import WorkItem from './entries/WorkItem';

function Work(props) {
  const {
    work, addWork, editWork, deleteWork, callback,
  } = props;

  const [buttons, setButtons] = useState(false);
  const [add, setAdd] = useState(false);

  const toggleAdd = () => setAdd(!add);
  const toggleButtons = (bool) => setButtons(bool);

  return (
    <div
      className="cv-section flex-column work"
      onMouseEnter={() => toggleButtons(true)}
      onMouseLeave={() => toggleButtons(true)}
    >

      { buttons
       && (
       <button
         className="edit-button absolute-top-right"
         onClick={toggleAdd}
       >
         Add
       </button>
       ) }

      <h3 className="section-header">Work Experience</h3>

      <div>
        { work.map((experience) => (
          <WorkItem
            editWork={editWork}
            deleteWork={deleteWork}
            work={experience}
            key={experience.id}
            setWork={callback}
          />
        ))}
      </div>

      { add
        && (
        <WorkForm
          handleSubmit={addWork}
          toggleEdit={toggleAdd}
          setWork={callback}
        />
        )}

    </div>
  );
}

export default Work;
