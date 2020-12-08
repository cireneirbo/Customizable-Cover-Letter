import React, { Component } from 'react';
import Home from './Home'

export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  render() {
    return (
      <div>
        

        <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

            <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
            <p>
                Eric O'Brien
                ejobrien315@gmail.com
                https://github.com/cireneirbo

                Dear Hiring Manager,

                  I'm excited to be applying for the Front End Engineer position at {this.state.value}. I have a passion for learning and competing in hackathons; am skilled in Node.js, TypeScript, Java, Spring Boot, REST APIs, and Express; have strong communication skills; leadership experience; and I am delighted by the opportunity to apply my knowledge at Ad Hoc Team, a top provider of digital services.

                  This year, I have successfully completed LaunchCode's 6-month coding boot camp, competed in (presently) three hackathons, won First Prize in the Suncoast Developers' Guild summer hackathon, contributed to several open-source repositories, and created numerous personal projects hosted on my Github page.

                  Though I do not yet have previous professional experience as a software developer, I have been studying and building projects in my personal time for several years. I have been involved in creating indie video games, websites, and services which utilize APIs. Previous work experience has lead to several roles as a supervisor, which I feel I have excelled at. I believe I am ready for a role as a software developer, and am eager for an opportunity to prove myself.

                  Thank you for your time and consideration. I'm looking forward to learning more about the Front End Engineer position and about Ad Hoc Team. As a Software Developer, my goal is to continually increase my programming skills in order to present better solutions to my employers, their clients, and the world at large. I enjoy uncovering new ideas and would use them to advance Ad Hoc Team's mission to deliver viable solutions for public services.

                  Sincerely,

                  Eric O'Brien
              </p>
      </div>
    );
  }
}
