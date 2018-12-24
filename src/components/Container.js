import React, { Component } from 'react';
import VerticalMenu from './VerticalMenu';
import WeatherTile from './WeatherTile';
import TopBar from './TopBar';
import '../css/test.css';

class Container extends Component {
    
  render() {
    
    return (
      <div>
        <TopBar/>
        <div class="columns">
            <div class="column " id="test"><VerticalMenu/></div>
            <div class="column is-four-fifths" id="test"><WeatherTile/></div>
        </div> 
    </div>    
    );
  }
}

export default Container;
