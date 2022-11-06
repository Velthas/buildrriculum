import React, {Component} from 'react';

import NameForm from '../form/NameForm';

class Name extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttons: false,
      edit: false,
    };

    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    this.setState({
      edit: !this.state.edit,
    });
  }

  render() {
    const {name, title, changeInfo} = this.props;

    return (
      <div className="cv-section flex-column name"
        onMouseEnter={() => this.setState({buttons: true})}
        onMouseLeave={() => this.setState({buttons: false})}>

        { this.state.buttons &&
         <button className="edit-button absolute-top-right"
           onClick={() => this.setState({edit: !this.state.edit})}>
            Modify
         </button> }

        <h1>{name}</h1>
        <h2>{title}</h2>

        {this.state.edit &&
         <NameForm
         toggleEdit={this.toggleEdit}
         handleSubmit={changeInfo} /> 
        }
      </div>
    );
  }
}

export default Name;
