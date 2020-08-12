import React, { Component } from 'react';

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
            <form>
                <label> Username: <input type="text" name="Username" />
                </label>
                <label> Password: <input type="password" name="Password" />
                </label>
                <button onClick={this.logInHandler}>Login</button>
            </form>
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