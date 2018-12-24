import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import Container from './components/Container';
import Login from './components/Login';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route  path='/login' component={Login}/>
        <Route path='/weather' component={Container}/>
      </div>
    );
  }
}

export default App;
