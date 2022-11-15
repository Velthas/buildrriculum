import React, { useState } from 'react';

function Palette(props) {
  const { classes } = props;

  const paletteArray = [
    { name: 'Pea', hex: '#678870' },
    { name: 'Navy', hex: '#465591' },
    { name: 'Lilac', hex: '#6b6788' },
    { name: 'Saffron', hex: '#b7995f' },
    { name: 'Brick', hex: '#914646' },
  ];

  const [color, setColor] = useState('#678870');

  const setTheme = (theme) => {
    const cv = document.querySelector('#cv-container');
    cv.setAttribute('style', '');
    cv.setAttribute('class', `flex-row ${theme}`);

    const root = document.querySelector('html');
    root.setAttribute('style', '');
    root.setAttribute('class', `${theme}`);
  };

  const handleChange = (e) => {
    setColor(e.target.value);

    const cv = document.querySelector('#cv-container');
    cv.setAttribute('style', `--sidebar-background: ${color}`);

    const root = document.querySelector('html');
    root.setAttribute('style', `--sidebar-background: ${color}`);
  };

  return (
    <div className={classes} id="palette">
      <div className="palette-container">
        { paletteArray.map((color) => (
          <div
            className="color-container"
            onClick={() => setTheme((color.name).toLowerCase())}
          >
            <div className="color-sample" style={{ backgroundColor: color.hex }} />
            <div className="color-info">
              <p className="color-name">{color.name}</p>
              <p className="color-hex">{color.hex}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="color-picker flex-column centered-both">
        <p>Choose a preset color from above or pick your own by clicking the tile below!</p>
        <div className="picker-container">
          <input
            type="color"
            value={color}
            onChange={(e) => { handleChange(e); }}
          />
        </div>
      </div>
    </div>
  );
}

export default Palette;
