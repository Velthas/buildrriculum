import React from 'react';

const Header = (props) => {
   const { name, classes} = props;

  return (
    <div className={classes || ""} id="header">
      <h1>{name}</h1>
    </div>
  )
}

export default Header;
