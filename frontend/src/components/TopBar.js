import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import auth0Client from '../auth/Auth';
import '../css/test.css';



class Topbar extends Component {


  signOut =(props) => {

    auth0Client.signOut();
    this.props.history.replace('/');     
}
 

  render() {
    

    return (
      <nav className="navbar" role="navigation" aria-label="main navigation" id="test">
      <div className="navbar-brand">
        
        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">

      {

        auth0Client.isAuthenticated() &&
        <div className="navbar-start">
        <a className="navbar-item">
          Home
        </a>
        <a className="navbar-item">
          Profile
        </a>
      </div>
      
      }


        <div>
          <span className="navbar-item">Sunday, 12th December</span>
        </div>

        <div>
          <span className="navbar-item">30*C</span>
        </div>

        {

          !auth0Client.isAuthenticated() &&
          <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button className="button is-light" onClick={auth0Client.signIn}>
                Log in
              </button>
            </div>
          </div>
        </div>

        }

        {

          auth0Client.isAuthenticated() &&
          <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button className="button is-light" onClick={this.signOut}>
                Log out
              </button>
            </div>
          </div>
        </div>

        }


      </div>
    </nav>    
      
    );
  }
}

export default withRouter(Topbar) ;
