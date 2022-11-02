import React, {Component} from 'react';

import Background from './Background';
import Sidebar from './Sidebar';

class Cv extends Component {
  constructor(props) {
    super(props);
  }

  removeFromArray(arrName, id) {
    const copy = [...this.state[arrName]];
    this.setState({
      [arrName]: copy.filter((element) => element.id !== id ),
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
