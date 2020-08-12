import React, { Component } from 'react';
import { PrimaryButton } from 'office-ui-fabric-react';
//import { BrowserRouter as Router, Link } from 'react-router-dom';
//import { Route } from 'react-router';
import { Login } from './Login';
//import { NavMenu } from './NavMenu';

export class Home extends Component {
  static displayName = Home.name;

  state = {
        userName: null,
        password: null,
        loggedIn: false,
        //editMode: false
    };

    loginCallbackHandler = (name, pwd) => {
        this.setState({
            userName: name,
            password: pwd,
            loggedIn: true,
            //editMode: true
        })
    }

    //logInHandle = () => {
    //    this.setState({
    //        userName: null,
    //        password: null,
    //        loggedIn: false,
    //        editMode: true 
    //    })
    //    this.props.history.push('/login');
        
    //}

    checkLoginStatus = () => {
        if (this.state.loggedIn) {
            //this.props.history.push('/users/newbookings');
        }
        else {
            alert("You need to login first");
            this.props.history.push('/login');
        }
    }

    render() {
      return (
              <div>
                  <p> This is a simple room booking system, and is under progress. </p>
              <p> You need to sign in to proceed further. </p>
              <PrimaryButton onClick={this.checkLoginStatus}>Add new booking</PrimaryButton>
          </div>
          );
  }
}
//<button onClick={this.logInHandle}>Click here to login</button>
//<Login
//    userName={this.userName}
//    //editMode={this.editMode}
//    loginCallbackHandler={this.loginCallbackHandler} />