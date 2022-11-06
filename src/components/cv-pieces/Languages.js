import React, {Component} from 'react';

import LangItem from './entries/LangItem';
import LanguageForm from '../form/LanguageForm';

class Languages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      buttons: false,
    };

    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    this.setState({
      edit: !this.state.edit
    });
  }

  render() {
    const {addLanguage, deleteLanguage, editLanguage} = this.props;

    return (
      <div className="cv-section flex-column centered-both languages"
        onMouseEnter={() => this.setState({buttons: true})}
        onMouseLeave={() => this.setState({buttons: false})}>

        { this.state.buttons &&
         <button className="edit-button absolute-top-right"
           onClick={() => this.setState({edit: !this.state.edit})}>
            Add
         </button> }

        <h3 className="section-header">Languages</h3>

        <ul>

          {this.props.languages.map((lang) => {
            return (
              <LangItem
              editLanguage={editLanguage}
              deleteLanguage={deleteLanguage}
              lang={lang}
              key={lang.id} /> )
            })
          }

        </ul>

        { this.state.edit &&
          <LanguageForm
          handleSubmit={addLanguage}
          toggleEdit={this.toggleEdit} />
        }

      </div>
    );
  }
}

export default Languages;
