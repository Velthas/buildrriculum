import React, { Component } from 'react';

import Cv from './components/Cv';
import Header from './components/Header';
import Footer from'./components/Footer';

import './styles/cv.css';

class App extends Component {
  constructor() {
    super();

    this.profileUrl = 'https://github.com/Velthas';
    this.codeUrl = 'https://github.com/Velthas/buildrriculum'
  }

  render() {
    return (
    <div className="container">
      <Header name="BUILDRRICULUM" class="header flex-row centered-both" />
      <Cv />
      <Footer author="Velthas"
        class="footer flex-row centered-both"
        profile={this.profileUrl}
        code={this.codeUrl} />
    </div>
    )
  }
}

export default App;