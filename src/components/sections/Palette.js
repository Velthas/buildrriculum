import React, {Component} from 'react';

class Palette extends Component {
  constructor(props) {
    super(props);
  }

  setTheme(theme) {
    document.querySelector('#cv-container').setAttribute('class', `flex-row ${theme}`);
    document.querySelector('html').setAttribute('class', `${theme}`);
  }

  render() {

    const {classes, palette} = this.props;

    return (
    <div className={classes} id="palette">
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
    )
  }
}

export default Palette;
