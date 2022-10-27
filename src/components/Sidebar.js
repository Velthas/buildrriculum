import React, { Component } from 'react';
import Eleanor from './../images/eleanor.jpeg';
import Picture from './Picture';
import Profile from './Profile';
import Contacts from './Contacts';
import Languages from './Languages'

class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photoUrl: Eleanor,
      profile: 'This is a description. You may wonder what it describes, or what even is its purpose in life, but truth is, I am not yet ready to disclose that information: in short, what should be a brief, informative paragraph, really has become a long, condescending, pedantic gathering of words, all cheering for the time they detracted from your total lifetime count. Please, dont hate me',
      telephone: '202-555-01745',
      mail: 'eleanor@goodplace.org',
      website: 'https://goodplace.com/Eleanor',
      languages: [{ language: 'English', fluency: 'Fluent', id: 0}]
    }

    this.changeInfo = this.props.changeInfo.bind(this);
    this.addToArray = this.props.addToArray.bind(this);
    this.removeFromArray = this.props.removeFromArray.bind(this);
  }

  render() {
    const {displayButtons, hideButtons, toggleEdit} = this.props

    return <div id="sidebar" className="flex-column centered">
      <Picture toggleEdit={toggleEdit} imgUrl={this.state.photoUrl} changeInfo={this.changeInfo} displayButtons={displayButtons} hideButtons={hideButtons} />
      <Profile toggleEdit={toggleEdit} profile={this.state.profile} changeInfo={this.changeInfo} displayButtons={displayButtons} hideButtons={hideButtons} />
      <Contacts toggleEdit={toggleEdit} telephone={this.state.telephone} mail={this.state.mail} website={this.state.website} changeInfo={this.changeInfo} displayButtons={displayButtons} hideButtons={hideButtons} />
      <Languages toggleEdit={toggleEdit} languages={this.state.languages} displayButtons={displayButtons} hideButtons={hideButtons} addLanguage={this.addToArray} deleteLanguage={this.removeFromArray} />
    </div>
  }
}

export default Sidebar;