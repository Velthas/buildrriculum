import React, { useState } from 'react';

import Name from './Name';
import Work from './Work';
import Education from './Education';

const Background = (props) => {
  const {changeInfo, addToArray, removeFromArray, editEntry} = props;

  const sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet auctor porta. Donec dolor risus, elementum eu risus et, laoreet efficitur sem. Etiam sed sagittis nisl, aliquam bibendum ligula. Vestibulum dignissim sem nec molestie rhoncus. In suscipit sapien quis nulla aliquet, eu congue dolor euismod.";

  const sampleName = [{ name: 'Full Name', title: 'Profession/Title'}]
  const sampleWork = [{
    position: 'Example Profession Name',
    company: "Example Company",
    start: "05/07",
    end: "05/14",
    description: sampleText,
    id: 3
  },
  {
    position: 'Example Profession Name',
    company: "Example Company",
    start: "05/07",
    end: "05/14",
    description: sampleText,
    id: 4
  }]
  const sampleEducation = [{
  title: 'Example Education Title',
  institution: "Unknown Institution",
  start: "09/01",
  end: "06/06",
  description: sampleText,
  id: 0
},
{
  title: 'Example Education Title',
  institution: "Unknown Institution",
  start: "09/01",
  end: "06/06",
  description: sampleText,
  id: 1
  }]

  const [name, setName] = useState(sampleName);
  const [education, setEducation] = useState(sampleEducation);
  const [work, setWork] = useState(sampleWork);

  return (
    <div id="background">
      <Name 
        info={name}
        changeInfo={changeInfo}
        callback={setName}
      />
      <Work 
        work={work}
        addWork={addToArray}
        editWork={editEntry}
        deleteWork={removeFromArray}
        callback={setWork}
      />
      <Education education={education}
        editEducation={editEntry}
        addEducation={addToArray}
        deleteEducation={removeFromArray}
        callback={setEducation}
      />
    </div>
    );

}

export default Background;