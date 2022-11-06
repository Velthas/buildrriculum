import React, { Component } from 'react';

import Eleanor from '../../images/eleanor.jpeg';

import Picture from './Picture';
import Profile from './Profile';
import Contacts from './Contacts';
import Languages from './Languages';
import Skills from './Skills';

class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photoUrl: Eleanor,
      profile: 'This is a description. You may wonder what it describes, or what even is its purpose in life, but truth is, I am not yet ready to disclose that information: in short, what should be a brief, informative paragraph, really has become a long, condescending, pedantic gathering of words. Go on and edit this with your own, relevant info!',
      telephone: '000-000-0000',
      mail: 'example@mail.org',
      website: 'https://yourwebsite.com/',
      languages: [{ language: 'English', fluency: 'Fluent', id: 0}],
      skills: [
        { name: 'Pizza Slice Juggler', id: 1},
        { name: 'Moderately useful skill', id: 2},
        { name: 'Procastinating', id: 3}
      ]
    }

    this.changeInfo = this.props.changeInfo.bind(this);
    this.addToArray = this.props.addToArray.bind(this);
    this.removeFromArray = this.props.removeFromArray.bind(this);
    this.editEntry = this.props.editEntry.bind(this);
  }

  render() {
    return <div id="sidebar" className="flex-column centered">
      <Picture imgUrl={this.state.photoUrl} changeInfo={this.changeInfo}/>
      <Profile profile={this.state.profile} changeInfo={this.changeInfo} />
      <Contacts telephone={this.state.telephone}
        mail={this.state.mail}
        website={this.state.website}
        changeInfo={this.changeInfo} />
      <Skills skills={this.state.skills}
        addSkill={this.addToArray}
        deleteSkill={this.removeFromArray}
        editSkill={this.editEntry} />
      <Languages languages={this.state.languages}
        addLanguage={this.addToArray}
        editLanguage={this.editEntry}
        deleteLanguage={this.removeFromArray} />
    </div>
  }
}

export default Sidebar;
