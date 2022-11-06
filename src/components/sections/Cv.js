import React, { Component } from 'react';

import uniqid from 'uniqid';
import Background from '../cv-pieces/Background';
import Sidebar from '../cv-pieces/Sidebar';

class Cv extends Component {
  constructor(props) {
    super(props);
  }

  removeFromArray(arrName, id) {
    const filteredCopy = [...this.state[arrName]].filter((element) => element.id !== id);
    this.setState({
      [arrName]: filteredCopy,
    });
  }

  addToArray(arrName, obj) {
    this.setState({
      [arrName]: this.state[arrName].concat([obj]),
    });
  }

  changeInfo(varName, value) {
    this.setState({
      [varName]: value,
    });
  }

  editEntry(varName, obj) {
    const mappedArray = [...this.state[varName]]
      .map((item) => {
        if (item.id === obj.id) {
          obj.id = uniqid();
          return obj;
        }
        return item;
      });

    this.setState({
      [varName]: mappedArray,
    });
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
          removeFromArray={this.removeFromArray}
        />
      </div>
    );
  }
}

export default Cv;
