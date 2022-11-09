import React, {Component} from 'react';

import Input from '../form/inputs/Input';

class Palette extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customColor: '#678870'
    }
  }

  setTheme(theme) {
    const cv = document.querySelector('#cv-container');
    cv.setAttribute('style', '');
    cv.setAttribute('class', `flex-row ${theme}`);

    const root = document.querySelector('html');
    root.setAttribute('style', '');
    root.setAttribute('class', `${theme}`);
  }

  handleChange(event) {
    this.setState({
      customColor: event.target.value,
    })

    const cv = document.querySelector('#cv-container');
    cv.setAttribute('style', `--sidebar-background: ${this.state.customColor}`);
      
    const root = document.querySelector('html');
    root.setAttribute('style', `--sidebar-background: ${this.state.customColor}`)
  }

  render() {

    const {classes, palette} = this.props;

    return (
    <div className={classes} id="palette">
      <div className="flex-row centered-both">
        { palette.map(color => {
            return (
              <div className="color-container" 
              onClick={() => this.setTheme((color.name).toLowerCase())}>
                <div className="color-sample" style={{"backgroundColor": color.hex }}></div>
                <div className="color-info">
                  <p className="color-name">{color.name}</p>
                  <p className="color-hex">{color.hex}</p>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="color-picker flex-column centered-both">
        <p>{"Choose a preset color from above or pick your own by clicking the tile below!"}</p>
        <div className="picker-container">
          <input
          type={'color'}
          value={this.state.customColor}
          onChange={(e) => { this.handleChange(e) }}> 
          </input>
        </div>
      </div>
    </div>
    )
  }
}

export default Palette;
