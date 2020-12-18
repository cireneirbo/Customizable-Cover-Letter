import React, { Component } from 'react';

export class Resume extends Component {
  static displayName = Resume.name;

  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div>
            <a
                href="https://docs.google.com/document/d/1qWUhb56ptsvoj5m5qCFkS7z2Utro0E6jypCN2HsmuSY/edit?usp=sharing"
                target="_blank">
                Google Docs Resume
            </a>

            <iframe
                src="https://docs.google.com/document/d/1qWUhb56ptsvoj5m5qCFkS7z2Utro0E6jypCN2HsmuSY/edit?usp=sharing"
                width="100%"
                height="2000">
            </iframe>
      </div>
    );
  }
}
