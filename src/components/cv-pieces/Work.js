import React, {Component} from 'react';

import WorkForm from '../form/WorkForm';
import WorkItem from './entries/WorkItem';

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttons: false,
      add: false,
    };

    this.toggleAdd = this.toggleAdd.bind(this);
  }

  toggleAdd() {
    this.setState({
      add: !this.state.add,
    })
  }

  render() {
    const {work, addWork, deleteWork, editWork} = this.props;

    return (
      <div
        className="cv-section flex-column work"
        onMouseEnter={() => this.setState({buttons: true})}
        onMouseLeave={() => this.setState({buttons: false})}>

        { this.state.buttons &&
         <button className="edit-button absolute-top-right"
           onClick={this.toggleAdd}>Add</button> }

        <h3 className='section-header'>Work Experience</h3>

        <div>
          { work.map((experience) => {
            return (
              <WorkItem 
              editWork={editWork}
              deleteWork={deleteWork}
              work={experience}
              key={experience.id} />
            )
          })}
        </div>

        {this.state.add &&
          <WorkForm
          handleSubmit={addWork}
          toggleEdit={this.toggleAdd}
          />  }

      </div>);
  }
}

export default Work;
