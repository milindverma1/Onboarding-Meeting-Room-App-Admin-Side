import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';
import { About } from './About';
import { Admin } from './Admin';

export class Login extends Component {
    static displayName = Login.name;

    constructor(props) {
        super(props);
    }

    logInHandler = () => {

        //this.displayName = "Hello Admin";
            this.props.history.push('/admin');
       //this.props.loginCallbackHandler("Milind","Pwd");
       
    }
    
    render() {
        return (
            <div>
                <Router>
            <form>
                <label> Username: <input type="text" name="Username" />
                </label>
                <label> Password: <input type="password" name="Password" />
                </label>
                <button onClick={this.logInHandler}>Login</button>
            </form>
            <Route path='/admin' exact component={Admin} />
        </Router>
            </div>
            ) 
    }
}

//<div>
//    {this.props && !this.props.userName ?
//        <Router>
//            <form>
//                <label> Username: <input type="text" name="Username" />
//                </label>
//                <label> Password: <input type="password" name="Password" />
//                </label>
//                <button onClick={this.logInHandler}>Login</button>
//            </form>
//            <Route path='/admin' exact component={Admin} />
//        </Router>
//        : null
//    }
//</div>