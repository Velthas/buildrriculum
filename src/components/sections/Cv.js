import React, {Component} from 'react';

import Background from '../cv-pieces/Background';
import Sidebar from '../cv-pieces/Sidebar';


class Cv extends Component {
  constructor(props) {
    super(props);
  }

  removeFromArray(arrName, id) {
    console.log(id)
    const copy = [...this.state[arrName]];
    this.setState({
      [arrName]: copy.filter((element) => {
      console.log(element.id !== id)
      return element.id !== id 
      }),
    }, console.log(this.state[arrName]));
  }

  addToArray(arrName, obj) {
    this.setState({
      [arrName]: this.state[arrName].concat([obj]),
    });
  };

  changeInfo(varName, value) {
    this.setState({
      [varName]: value,
    });
  };

  editEntry(varName, obj) {
    const mappedArray = 
    [...this.state[varName]]
      .map((item) => {
        if(item.id === obj.id) {
          return obj;
        }
        return item;
      })

    this.setState({
      [varName]: mappedArray,
    }, () => console.log(this.state[varName]));
  }

  render() {
    return (
      <div className="flex-row" id="cv-container">
        <Sidebar 
        changeInfo={this.changeInfo}
        addToArray={this.addToArray}
        removeFromArray={this.removeFromArray}
        editEntry={this.editEntry} />
        <Background 
        changeInfo={this.changeInfo}
        addToArray={this.addToArray}
        removeFromArray={this.removeFromArray} />
      </div> 
    );
  }
}

export default Cv;
