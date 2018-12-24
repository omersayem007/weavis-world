import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../css/test.css';

class VerticalMenu extends Component {
    
  render() {
    
    return (
        <aside class="menu" id="test">
  <p class="menu-label">
    General
  </p>
  <ul class="menu-list">
    <Link to='/foreCast'>Forecast</Link>
    <Link to='/social'>Social</Link>
    <Link to='/feedback'>feedback</Link>
    <Link to='/tips'>Tips</Link>
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