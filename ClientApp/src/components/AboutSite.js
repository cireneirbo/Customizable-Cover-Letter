import React, { Component } from 'react';

export class AboutSite extends Component {
    static displayName = AboutSite.name;

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h2>About Site</h2>
                <p>This site has been made by Eric O'Brien using a React/ASP.NET Core tech stack in Visual Studio IDE.</p>
                <p>The goal of creating this site, is to showcase my aptitude in software development to some degree.</p>
                <p>It further presents an opportunity to display my credentials.</p>
            </div>
        );
    }
}
