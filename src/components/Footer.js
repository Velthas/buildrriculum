import React, {Component} from 'react';

class Footer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className={this.props.class || ""}>
      <p>Coded by
        <a href={this.props.profile}> {this.props.author}</a> 2022.
       Source code <a href={this.props.code}>here</a>
      </p>
    </div>
    )
  }
}

export default Footer;