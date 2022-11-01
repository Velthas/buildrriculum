import React, {Component} from 'react'
import '../styles/palette.css'

class Palette extends Component {
  constructor(props) {
    super(props);
  }

  setTheme(theme) {
    document.querySelector('html').setAttribute('class', `${theme}`)
  }

  render() {

    const {classes, palette} = this.props;

    return (
    <div className={classes}>
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
