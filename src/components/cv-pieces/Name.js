import React, { useState } from 'react';

import NameForm from '../form/NameForm';

const Name = (props) => {
  const { info, changeInfo, callback} = props;
  const { name, title } = info[0];

  const [buttons, setButtons] = useState(false);
  const [edit, setEdit] = useState(false);

  const toggleEdit = () => setEdit(!edit);
  const toggleButtons = (bool) => setButtons(bool);

  return (
    <div className="cv-section flex-column name"
      onMouseEnter={() => toggleButtons(true)}
      onMouseLeave={() => toggleButtons(false)}>

      { buttons &&
       <button className="edit-button absolute-top-right"
          onClick={toggleEdit}
        >
          Modify
       </button> }

      <h1>{name}</h1>
      <h2>{title}</h2>

      { edit &&
       <NameForm
        toggleEdit={toggleEdit}
        handleSubmit={changeInfo}
        setName={callback} 
      /> 
      }
    </div>
  );

}

export default Name;
