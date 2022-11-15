import React from 'react';

import uniqid from 'uniqid';

import Background from '../cv-pieces/Background';
import Sidebar from '../cv-pieces/Sidebar';

function Cv() {
  const removeFromArray = (stateSetter, id) => stateSetter((prevState) => prevState.filter((element) => element.id !== id));

  const addToArray = (stateSetter, obj) => stateSetter((prevState) => prevState.concat([obj]));

  const changeInfo = (stateSetter, value) => stateSetter(value);

  const editEntry = (stateSetter, obj) => {
    stateSetter((prevState) => {
      const mappedArray = [...prevState]
        .map((item) => {
          if (item.id === obj.id) {
            obj.id = uniqid();
            return obj;
          }
          return item;
        });
      return mappedArray;
    });
  };

  return (
    <div className="flex-row" id="cv-container">
      <Sidebar
        changeInfo={changeInfo}
        addToArray={addToArray}
        removeFromArray={removeFromArray}
        editEntry={editEntry}
      />
      <Background
        changeInfo={changeInfo}
        addToArray={addToArray}
        editEntry={editEntry}
        removeFromArray={removeFromArray}
      />
    </div>
  );
}

class WrappedCv extends React.Component {
  render() {
    return <Cv />;
  }
}

export default WrappedCv;
