import React, { Component } from 'react';

import LanguageForm from '../../form/LanguageForm';

import trashcan from '../../../images/trashcan.svg';
import pencil from '../../../images/pencil.svg';

class LangItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      icons: false,
    };

    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  render() {
    const { editLanguage, deleteLanguage, lang } = this.props;

    return (
      <>
        <li
          onMouseEnter={() => this.setState({ icons: true })}
          onMouseLeave={() => this.setState({ icons: false })}>

          <p>{lang.language + ' - ' + lang.fluency}</p>

          { this.state.icons
            && (
            <div className="icon-container">
              <img
                src={pencil}
                className="edit-icon"
                onClick={() => this.setState({ edit: true })}
              />
              
              <img
                src={trashcan}
                className="edit-icon"
                onClick={() => {
                  deleteLanguage('languages', lang.id);
                }}
              />
            </div>
            )}
        </li>

        { this.state.edit
          && (
          <LanguageForm
            handleSubmit={editLanguage}
            toggleEdit={this.toggleEdit}
            lang={lang}
          />
          )}
      </>
    );
  }
}

export default LangItem;