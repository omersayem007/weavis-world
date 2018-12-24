import React, { Component } from 'react';
import '../css/test.css';

class VerticalMenu extends Component {
    
  render() {
    
    return (
        <aside class="menu" id="test">
  <p class="menu-label">
    General
  </p>
  <ul class="menu-list">
    <li><a>Dashboard</a></li>
    <li><a>Forecast</a></li>
    <li><a>Social</a></li>
    <li><a>Feedback</a></li>
    <li><a>Tips</a></li>
  </ul>
  <p class="menu-label">
    Entertainment
  </p>
  <ul class="menu-list">
    <li>
      <a class="is-active">Music</a>
      <ul>
        <li><a>Movie</a></li>
      </ul>
    </li>
  </ul>
</aside>
    
    );
  }
}

export default VerticalMenu;