import React, {Component} from 'react';

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className={this.props.class || ""} id="header">
      <h1>{this.props.name}</h1>
    </div>
    )
  }
}

export default Header;
