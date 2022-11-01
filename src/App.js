import React, { Component } from 'react';

import Cv from './components/Cv';
import Header from './components/Header';
import Palette from'./components/Palette';
import Footer from'./components/Footer';

import './styles/cv.css';

class App extends Component {
  constructor() {
    super();

    this.profileUrl = 'https://github.com/Velthas';
    this.codeUrl = 'https://github.com/Velthas/buildrriculum'
    this.palette = [
      {name: 'Pea', hex: '#678870' },
      {name: 'Navy', hex: '#465591' },
      {name: 'Lilac', hex: '#6b6788' },
      {name: 'Saffron', hex: '#b7995f' },
      {name: 'Brick', hex: '#914646' },
    ]
  }

  render() {
    return (
    <div className="container">
      <Header name="BUILDRRICULUM" class="header flex-row centered-both" />
      <Palette classes="flex-row centered-both palette" palette={this.palette} />
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