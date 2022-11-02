import React, {Component} from 'react';

import Background from './Background';
import Sidebar from './Sidebar';

class Cv extends Component {
  constructor(props) {
    super(props);
  }

  removeFromArray(arrName, index) {
    const copy = [...this.state[arrName]];
    copy.splice(index, 1);
    this.setState({
      [arrName]: copy,
    });
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

  render() {
    return (
      <div className="flex-row" id="cv-container">
        <Sidebar 
        changeInfo={this.changeInfo}
        addToArray={this.addToArray}
        removeFromArray={this.removeFromArray} />
        <Background 
        changeInfo={this.changeInfo}
        addToArray={this.addToArray}
        removeFromArray={this.removeFromArray} />
      </div> 
    );
  }
}

export default Cv;
