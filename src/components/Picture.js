import React, {Component} from 'react';

class Picture extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      buttons: false,
    };

    this.changeInfo = this.props.changeInfo;
  }

  render() {
    return (
      <div className="cv-section flex-row centered-both cv-image"
        onMouseEnter={() => this.setState({buttons: true})}
        onMouseLeave={() => this.setState({buttons: false})}>

        { this.state.buttons &&
         <button className="edit-button absolute-top-right"
           onClick={() => this.setState({edit: true})}>
            Modify
         </button> }

        <img src={this.props.imgUrl}></img>

        { this.state.edit &&
        <div className="form">
          <form id="img-form">

            <label htmlFor="img-url">{'Image\'s URL'}</label>
            <input type="url"
              placeholder="https://my-example-url.com/picture.jpg"
              id="img-url">
            </input>

            <div className="flex-row">
              <button className="button-cancel"
                type="button"
                onClick={this.setState({edit: !this.state.edit})}>
                 Cancel
              </button>
              <button className="button-submit"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  const newUrl = document
                      .querySelector('#img-form input')
                      .value;
                  this.props.changeInfo('photoUrl', newUrl);
                  this.setState({ edit: !this.state.edit }) 
                }}>
                Confirm
              </button>
            </div>
          </form>
        </div> }

      </div>
    );
  }
}

export default Picture;
