import React, {useState} from 'react';

import PictureForm from '../form/PictureForm';

const Picture = (props) => {
  const {changeInfo, imgUrl, callback} = props;

  const [edit, setEdit] = useState(false);
  const [buttons, setButtons] = useState(false);

  const toggleEdit = () => setEdit(!edit);
  const toggleButtons = (bool) => setButtons(bool)

    return (
      <div className="cv-section flex-row centered-both cv-image"
        onMouseEnter={() => toggleButtons(true)}
        onMouseLeave={() => toggleButtons(false)}>

        { buttons &&
         <button className="edit-button absolute-top-right"
           onClick={() => toggleEdit()}>
            Modify
         </button> }

        <img src={imgUrl}></img>

        { edit &&
        <PictureForm 
        toggleEdit={toggleEdit}
        handleSubmit={changeInfo}
        setPicture={callback} /> }

      </div>
    );
}

export default Picture;
