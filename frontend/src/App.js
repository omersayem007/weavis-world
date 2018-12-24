import React, { Component } from 'react';
import {Route,withRouter} from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import TopBar from './components/TopBar';
import Callback from './components/Callback';
import SecuredRoute from './SecuredRoute/SecuredRoute';
import ForeCast from './components/ForeCast';
import Social from './components/Social';
import FeedBack from './components/FeedBack';
import Tips from './components/Tips';
import auth0Client from './auth/Auth';



class App extends Component {

  constructor(props){
    super(props);

    this.state={
      checkingSession:true,
    }
  }

  async componentDidMount() {
    if (this.props.location.pathname === '/callback'){
      this.setState({checkingSession:false});
      return;
    } 
    try {
      await auth0Client.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error !== 'login_required') console.log(err.error);
    }
    this.setState({checkingSession:false});
}

  render() {
    return (
      <div className="App">
        <Route exact path='/' component={TopBar}/>
        <Route exact path='/callback' component={Callback}/>
        <SecuredRoute exact path='/weather' 
        component={Container}
        checkingSession={this.state.checkingSession}
        />
        <SecuredRoute exact path='/foreCast' component={ForeCast}/>
        <SecuredRoute exact path='/social' component={Social}/>
        <SecuredRoute exact path='/feedback' component={FeedBack}/>
        <SecuredRoute exact path='/tips' component={Tips}/>
      </div>
    );
  }
}

export default withRouter(App);
