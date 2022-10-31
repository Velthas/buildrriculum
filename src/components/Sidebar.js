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
      profile: 'This is a description. You may wonder what it describes, or what even is its purpose in life, but truth is, I am not yet ready to disclose that information: in short, what should be a brief, informative paragraph, really has become a long, condescending, pedantic gathering of words. Go on and edit this with your own, relevant info!',
      telephone: '000-000-0000',
      mail: 'example@mail.org',
      website: 'https://yourwebsite.com/',
      languages: [{ language: 'English', fluency: 'Fluent', id: 0}]
    }

    this.changeInfo = this.props.changeInfo.bind(this);
    this.addToArray = this.props.addToArray.bind(this);
    this.removeFromArray = this.props.removeFromArray.bind(this);
  }

  render() {
    return <div id="sidebar" className="flex-column centered">
      <Picture imgUrl={this.state.photoUrl} changeInfo={this.changeInfo}/>
      <Profile profile={this.state.profile} changeInfo={this.changeInfo} />
      <Contacts telephone={this.state.telephone}
        mail={this.state.mail}
        website={this.state.website}
        changeInfo={this.changeInfo} />
      <Languages languages={this.state.languages}
        addLanguage={this.addToArray}
        deleteLanguage={this.removeFromArray} />
    </div>
  }
}

export default Sidebar;
