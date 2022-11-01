import React, { Component } from 'react';

import Name from './Name';
import Work from './Work';
import Education from './Education';

class Background extends Component {
  constructor(props) {
    super(props);

    const sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet auctor porta. Donec dolor risus, elementum eu risus et, laoreet efficitur sem. Etiam sed sagittis nisl, aliquam bibendum ligula. Vestibulum dignissim sem nec molestie rhoncus. In suscipit sapien quis nulla aliquet, eu congue dolor euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.";

    this.state = {
      name: 'Full Name',
      title: 'Profession/Title',
      education: [{
          title: 'Example Education Title',
          institution: "Unknown Institution",
          start: "09/01",
          end: "06/06",
          description: sampleText,
        },
        {
          title: 'Example Education Title',
          institution: "Unknown Institution",
          start: "09/01",
          end: "06/06",
          description: sampleText,
        }
      ],
      work: [{
        position: 'Example Profession Name',
        company: "Example Company",
        start: "05/07",
        end: "05/14",
        description: sampleText,
      },
      {
        position: 'Example Profession Name',
        company: "Example Company",
        start: "05/07",
        end: "05/14",
        description: sampleText,
      }
    ],
  }

    this.changeInfo = this.props.changeInfo.bind(this);
    this.addToArray = this.props.addToArray.bind(this);
    this.removeFromArray = this.props.removeFromArray.bind(this);
  }

  render() {

    return (
    <div id="background">
      <Name name={this.state.name}
        title={this.state.title}
        changeInfo={this.changeInfo}/>
      <Work work={this.state.work}
        addExperience={this.addToArray}
        deleteExperience={this.removeFromArray}/>
      <Education education={this.state.education}
        addEducation={this.addToArray}
        deleteEducation={this.removeFromArray}/>
    </div>
    );
  }
}

export default Background;
