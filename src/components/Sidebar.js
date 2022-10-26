import React, { Component } from 'react';
import Eleanor from './../images/eleanor.jpeg';
import Picture from './Picture';
import Profile from './Profile';
import Contacts from './Contacts';

class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photoUrl: Eleanor,
      profile: 'This is a description. You may wonder what it describes, or what even is its purpose in life, but truth is, I am not yet ready to disclose that information: in short, what should be a brief, informative paragraph, really has become a long, condescending, pedantic gathering of words, all cheering for the time they detracted from your total lifetime count. Please, dont hate me',
      telephone: '202-555-01745',
      mail: 'eleanor@goodplace.org',
      website: 'https://goodplace.com/Eleanor',
      languages: [['English', 'Fluent']]
    }

    this.changeInfo = this.changeInfo.bind(this);
  }

  changeInfo(varName, value) {
    this.setState({
      [varName]: value 
    });
  };

  displayButtons() {
    this.setState({
      buttons: true
    })
}

  hideButtons() {
  this.setState({
    buttons: false
  })
}

  render() {
    return <div id="sidebar" className="flex-column centered">
      <Picture imgUrl={this.state.photoUrl} changeInfo={this.changeInfo} displayButtons={this.displayButtons} hideButtons={this.hideButtons} />
      <Profile profile={this.state.profile} changeInfo={this.changeInfo} displayButtons={this.displayButtons} hideButtons={this.hideButtons} />
      <Contacts telephone={this.state.telephone} mail={this.state.mail} website={this.state.website} changeInfo={this.changeInfo} displayButtons={this.displayButtons} hideButtons={this.hideButtons} />
    </div>
  }
}

export default Sidebar;