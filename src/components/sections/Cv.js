import React, { Component } from 'react';

import uniqid from 'uniqid';
import Background from '../cv-pieces/Background';
import Sidebar from '../cv-pieces/Sidebar';

class Cv extends Component {
  constructor(props) {
    super(props);
  }

  removeFromArray(stateSetter, id) {
    stateSetter(prevState =>  prevState.filter((element) => element.id !== id));
  }

  addToArray(stateSetter, obj) {
    stateSetter(prevState =>  prevState.concat([obj]))
  }

  changeInfo(stateSetter, value) {
    stateSetter(value);
  }

  editEntry(stateSetter, obj) {
    stateSetter(prevState => {
      const mappedArray = [...prevState]
        .map((item) => {
          if (item.id === obj.id) {
            obj.id = uniqid();
            return obj;
          }
          return item;
        });
      return mappedArray;
    })
  }

  render() {
    return (
      <div className="flex-row" id="cv-container">
        <Sidebar
          changeInfo={this.changeInfo}
          addToArray={this.addToArray}
          removeFromArray={this.removeFromArray}
          editEntry={this.editEntry}
        />
        <Background
          changeInfo={this.changeInfo}
          addToArray={this.addToArray}
          editEntry={this.editEntry}
          removeFromArray={this.removeFromArray}
        />
      </div>
    );
  }
}

export default Cv;
