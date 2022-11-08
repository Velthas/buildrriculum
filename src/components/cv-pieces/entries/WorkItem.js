import React, { Component } from 'react';

import WorkForm from '../../form/WorkForm';

import trashcan from '../../../images/trashcan.svg';
import pencil from '../../../images/pencil.svg';

class WorkItem extends Component {
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
    const { editWork, deleteWork, work } = this.props;

    return (
      <>
        <div className="work-entry flex-column"
        onMouseEnter={() => this.setState({icons: true})}
        onMouseLeave={() => this.setState({icons: false})}>

          <h4>{work.position}</h4>
          <div className="flex-row space-between job-info">
            <p>{work.company}</p>
            <p>{work.start + ' - ' + work.end}</p>
          </div>
          <p>{ work.description }</p>

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
                  deleteWork('work', work.id);
                }}/>

            </div>
            )}
          </div>

        { this.state.edit
          && (
          <WorkForm
            handleSubmit={editWork}
            toggleEdit={this.toggleEdit}
            work={work}
          />
          )}
      </>
    );
  }
}

export default WorkItem;
