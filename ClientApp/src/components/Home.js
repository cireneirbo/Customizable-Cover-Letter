import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Home extends Component {
  static displayName = Home.name;


    constructor(props) {
        super(props);
        this.state = {
            company: 'Name of Company',
            job: 'Title of Position'
        };

        this.updateCoverLetterCompany = this.updateCoverLetterCompany.bind(this);
        this.updateCoverLetterJob = this.updateCoverLetterJob.bind(this);
        this.submitCoverLetter = this.submitCoverLetter.bind(this);
    }

    updateCoverLetterCompany(event) {
        this.setState({ company: event.target.company });
        event.preventDefault();
    }

    updateCoverLetterJob(event) {
        this.setState({ job: event.target.job });
        event.preventDefault();
    }

    submitCoverLetter(event) {
        this.setState({ company: event.target.company });
        event.preventDefault();
    }

  render () {
      return (
          <div>
              <form onSubmit={this.submitCoverLetter}>
                <div>
                  <label>
                          Type name of company:
                    <input type="text" placeholder="Name of Company" value={this.state.company} onChange={this.updateCoverLetterCompany} />
                  </label>
                </div>
                <div>
                  <label>
                          Type title of position:
                    <input type="text" placeholder="Title of Position" value={this.state.job} onChange={this.updateCoverLetterJob} />
                  </label>
                  </div>
                  <input type="submit" value="Submit" />
              </form>
              
              <p>
                  Eric O'Brien<br />
                  ejobrien315@gmail.com<br />
                  https://github.com/cireneirbo
              </p>

                  <p>Dear Hiring Manager,</p>

              <p>I'm excited to be applying for the <b>{this.state.job}</b> position at <b>{this.state.company}</b>. I have a passion for learning and competing in hackathons; am skilled in Node.js, TypeScript, Java, Spring Boot, REST APIs, and Express; have strong communication skills; leadership experience; and I am delighted by the opportunity to apply my knowledge at <b>{this.state.company}</b>, a top provider of digital services.</p>

                  <p>This year, I have successfully completed LaunchCode's 6-month coding boot camp, competed in (presently) three hackathons, won First Prize in the Suncoast Developers' Guild summer hackathon, contributed to several open-source repositories, and created numerous personal projects hosted on my Github page.</p>

                  <p>Though I do not yet have previous professional experience as a software developer, I have been studying and building projects in my personal time for several years. I have been involved in creating indie video games, websites, and services which utilize APIs. Previous work experience has lead to several roles as a supervisor, which I feel I have excelled at. I believe I am ready for a role as a software developer, and am eager for an opportunity to prove myself.</p>

              <p>Thank you for your time and consideration. I'm looking forward to learning more about the <b>{this.state.job}</b> position and about <b>{this.state.company}</b>. As a Software Developer, my goal is to continually increase my programming skills in order to present better solutions to my employers, their clients, and the world at large. I enjoy uncovering new ideas and would use them to advance <b>{this.state.company}</b>'s mission to deliver viable solutions for public services.</p>

              <p>
                  Sincerely,<br />

                  Eric O'Brien
              </p>
              
          </div>
    );
    }

    //PropTypes
    /*Home.PropTypes = {
        value: PropTypes.string,
        toggleComplete: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }*/
}
