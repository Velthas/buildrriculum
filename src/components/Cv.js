import React, { Component } from 'react';
import Background from './Background';
import Sidebar from './Sidebar';

class Cv extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="flex-row" id="cv-container">
      <Sidebar />
      <Background />
    </div> 
    );
  }
}

export default Cv;