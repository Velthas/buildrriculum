import React, {Component} from 'react';
import Input from './inputs/Input';


class PictureForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {toggleEdit, handleSubmit} = this.props
    return (
      <div className="form">
          <form id="img-form">

            <Input label={'Image\'s URL'}
            type="url"
            id="img-url"
            placeholder="https://my-example-url.com/picture.jpg"/>

            <div className="flex-row">
              <button className="button-cancel"
                type="button"
                onClick={toggleEdit}>
                 Cancel
              </button>
              <button className="button-submit"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  const newUrl = document
                    .querySelector('#img-form input')
                    .value;
                  handleSubmit('photoUrl', newUrl);
                  toggleEdit();
                }}>
                Confirm
              </button>
            </div>

          </form>
        </div>
    )
  }
}

export default PictureForm