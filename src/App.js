import React, { Component } from 'react';
import ReactDOM from "react-dom/client";

import Cv from './components/sections/Cv';
import Header from './components/sections/Header';
import Palette from'./components/sections/Palette';
import Footer from'./components/sections/Footer';

import ReactToPrint from 'react-to-print';

import './styles/cv.css';
import './styles/form.css';
import './styles/shared.css';
import './styles/palette.css';

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
    <>
      <Header name="BUILDRRICULUM" class="flex-row centered-both" />
      <Palette classes="flex-row centered-both" palette={this.palette} />
      <div id="backdrop"> 
        <Cv ref={(element) => this.cvReference = element }/>
      </div>
      <div className="flex-row centered-both">
        <ReactToPrint
        content={() => this.cvReference}
        trigger={() => <button className="print-to-pdf">SAVE AS PDF</button> } />
      </div>
      <Footer author="Velthas"
        class="footer flex-row centered-both"
        profile={this.profileUrl}
        code={this.codeUrl} />
    </>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
