import React, {Component} from 'react';

class Name extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttons: false,
      edit: false,
    };
  }

  render() {
    const {name, title} = this.props;

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
         <div className="form">
           <form id="name-form" className="flex-column">

             <label htmlFor="person-name">{'Full Name'}</label>
             <input type="text"
               maxLength="30"
               placeholder="John Smith"
               id="person-name">
             </input>

             <label htmlFor="person-role">{'Role'}</label>
             <input type="text"
               maxLength="30"
               placeholder="Trainspotter"
               id="person-role">
             </input>

             <div className="flex-row">
               <button className="button-cancel"
                 type="button"
                 onClick={() => this.setState({edit: !this.state.edit})}>
                   Cancel
               </button>
               <button className="button-submit"
                 type="submit"
                 onClick={(e) => {
                   e.preventDefault();
                   const newInfo = Array
                       .from(document.querySelectorAll('#name-form input'))
                       .map((input) => input.value);
                   const [userName, role] = newInfo;
                   this.props.changeInfo('name', userName);
                   this.props.changeInfo('title', role);
                   this.setState({edit: !this.state.edit});
                 }}>
                 Confirm
               </button>
             </div>
           </form>
         </div>}

      </div>
    );
  }
}

export default Name;
