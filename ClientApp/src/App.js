import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Resume } from './components/Resume';
import { AboutSite } from './components/AboutSite';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/resume' component={Resume} />
        <Route path='/aboutsite' component={AboutSite} />
      </Layout>
    );
  }
}
