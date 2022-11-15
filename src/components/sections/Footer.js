import React from 'react';

function Footer(props) {
  const { classes } = props;

  const profileUrl = 'https://github.com/Velthas';
  const codeUrl = 'https://github.com/Velthas/buildrriculum';
  const author = 'Velthas';

  return (
    <div className={classes || ''} id="footer">
      <p>
        Coded by
        <a href={profileUrl}>
          {' '}
          {author}
        </a>
        {' '}
        2022.
        Source code
        <a href={codeUrl}>here</a>
        .
      </p>
    </div>
  );
}

export default Footer;
