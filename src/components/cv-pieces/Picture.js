import React, {Component} from 'react';
import PictureForm from '../form/PictureForm';

class Picture extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      buttons: false,
    };

    this.changeInfo = this.props.changeInfo;
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    this.setState({edit: !this.state.edit});
  }

  render() {
    return (
      <div className="cv-section flex-row centered-both cv-image"
        onMouseEnter={() => this.setState({buttons: true})}
        onMouseLeave={() => this.setState({buttons: false})}>

        { this.state.buttons &&
         <button className="edit-button absolute-top-right"
           onClick={() => this.setState({edit: !this.state.edit})}>
            Modify
         </button> }

        <img src={this.props.imgUrl}></img>

        { this.state.edit &&
        <PictureForm 
        toggleEdit={this.toggleEdit}
        handleSubmit={this.props.changeInfo} /> }

      </div>
    );
  }
}

export default Picture;
