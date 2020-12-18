import React, { Component } from 'react';
import Home from './Home'

export class Resume extends Component {
  static displayName = Resume.name;

  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div>
            <p>https://docs.google.com/document/d/1qWUhb56ptsvoj5m5qCFkS7z2Utro0E6jypCN2HsmuSY/edit?usp=sharing</p>

            <p>An iframe with no borders:</p>
            <iframe src="https://docs.google.com/document/d/1qWUhb56ptsvoj5m5qCFkS7z2Utro0E6jypCN2HsmuSY/edit?usp=sharing" width="100%" height="300">
            </iframe>
      </div>
    );
  }
}
