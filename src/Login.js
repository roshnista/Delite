import React, { Component } from "react";
import './Lofin.css';
// import per from './per.png';


class Login extends Component
{
  constructor(props){
      super(props);
      this.state={
        username:'',
        password:'',
      }
      this.login=this.login.bind(this);
      this.onChange=this.onChange.bind(this);
  }

  login(){

  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    })      
  }

    render()
    {
                   return (
                <div>
                  <div className="loginbox">
                    <h1>Login Here</h1>
                    <form>
                      <p>Username</p>
                      <input type="text" name="username" placeholder="Enter Username" onChange="this.onChange" />
                      <p>Password</p>
                      <input type="password" name="password" placeholder="Enter Password" onChange="this.onChange" />
                      <input type="submit" value="Login" className="button" onClick="this.login"/>
                      Don't have an account?
                      <a href="/sign">Sign Up</a>
                    </form>
                  </div>
                </div>
              );
            }
          }
        
export default Login;