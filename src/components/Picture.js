import React, { Component } from 'react';

class Picture extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
    }

    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    this.setState({
      edit: !this.state.edit,
    });
  }

  render() {
    return (
    <div className="cv-section flex-row centered-both cv-image">
      <button className="edit-button absolute-top-left" onClick={this.toggleEdit}>Modify</button>
      <img src={this.props.imgUrl}></img>
    {this.state.edit && 
      <div className="form">
        <form id="img-form">
          <label for="img-url">{'Image\'s URL'}</label>
          <input type="url" placeholder="https://my-example-url.com/picture.jpg" id="img-url"></input>
          <div className="flex-row">
            <button class="button-cancel" type="button" onClick={this.toggleEdit}>Cancel</button>
            <button class="button-submit" type="submit" onClick={() => {
              const newUrl = document.querySelector('#img-form input').value
              this.props.changeInfo('photoUrl', newUrl);
              this.toggleEdit();
            }}>Confirm</button>
          </div>
        </form>
      </div>}
    </div>
    );
  }
}

export default Picture;