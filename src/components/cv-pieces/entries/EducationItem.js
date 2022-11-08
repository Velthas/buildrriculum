import React, { Component } from 'react';

import EducationForm from '../../form/EducationForm';

import trashcan from '../../../images/trashcan.svg';
import pencil from '../../../images/pencil.svg';

class EducationItem extends Component {
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
    const { editEducation, deleteEducation, education } = this.props;

    return (
      <>
        <div className="work-entry flex-column"
        onMouseEnter={() => this.setState({icons: true})}
        onMouseLeave={() => this.setState({icons: false})}>

          <h4>{education.title}</h4>
          <div className="flex-row space-between job-info">
            <p>{education.institution}</p>
            <p>{education.start + ' - ' + education.end}</p>
          </div>
          <p>{ education.description }</p>

          { this.state.icons
            && (
            <div className="icon-container absolute-position absolute-bottom-right">

              <img
                src={pencil}
                className="edit-icon"
                onClick={() => this.setState({
                   edit: true 
                })}/>
              
              <img
                src={trashcan}
                className="edit-icon"
                onClick={() => {
                  deleteEducation('education', education.id);
                }}/>

            </div>
            )}
          </div>

        { this.state.edit
          && (
          <EducationForm
            handleSubmit={editEducation}
            toggleEdit={this.toggleEdit}
            education={education}
          />
          )}
      </>
    );
  }
}

export default EducationItem;
