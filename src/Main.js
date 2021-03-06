import React, { Component } from 'react';
import Home from './Home';
import Post from './Post';
import { Switch, Route } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/posts/:filename' component={Post}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
