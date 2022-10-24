import React, { Component } from 'react';
import Eleanor from './../images/eleanor.jpeg';
import Picture from './Picture';

class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photoUrl: Eleanor,
      profile: 'This is a description. You may wonder what it describes, or what even is its purpose in life, but truth is, I am not yet ready to disclose that information: in short, what should be a brief, informative paragraph, really has become a long, condescending, pedantic gathering of words, all cheering for the time they detracted from your total lifetime count. Please, dont hate me',
      contacts: {
        telephone: '202-555-01745',
        mail: 'eleanor@goodplace.org',
        website: 'https://otterhuggingastheysleep.goodplace.com',
      },
      languages: [['English', 'Fluent']]
    }

    this.changeInfo = this.changeInfo.bind(this);
  }

  changeInfo(varName, value) {
    this.setState({
      [varName]: value 
    });
  };

  render() {
    return <div id="sidebar" className="flex-column centered">
      <Picture imgUrl={this.state.photoUrl} changeInfo={this.changeInfo} />
    </div>
  }
}

export default Sidebar;