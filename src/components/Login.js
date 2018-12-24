import React, { Component } from 'react';
import '../css/login.css';

class Login extends Component {

  constructor(props){
    super(props)

    this.state={
      register:false,
      login:true,
    }

  }

  toggleSignIn  = ()=>{
    this.setState({
      register:false,
      login:true
    });
  }

  
 toggleRegister =()=>{
  this.setState({
    register:true,
    login:false
  });
}
 
    
  render() {
    if(this.state.register){
      return (
        <div class="login-page">
        <div class="form"> 
         <form class="register-form">
            <input type="text" placeholder="name"/>
            <input type="password" placeholder="password"/>
            <input type="text" placeholder="email address"/>
            <button>create</button>
            <p class="message">Already registered? <a href="#" onClick={this.toggleSignIn}>Sign In</a></p>
          </form> 
        </div>
        </div>
        );

    }else{
      return(
        <div class="login-page">
    <div class="form"> 
        <form class="login-form">
          <input type="text" placeholder="username"/>
          <input type="password" placeholder="password"/>
          <button>login</button>
          <p class="message">Not registered? <a  onClick={this.toggleRegister}>Create an account</a></p>
        </form>
      </div>
    </div>

      );
    }
    
    

  }
}

export default Login;
