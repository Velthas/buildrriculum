import React, { Component } from 'react';
import Cv from './components/Cv';
import './styles/cv.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (<div id="backdrop">
      <Cv />
       </div>)
  }
}

export default App;