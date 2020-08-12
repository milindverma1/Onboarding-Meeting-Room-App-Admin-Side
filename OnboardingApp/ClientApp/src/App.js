import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { About } from './components/About';
import { Login } from './components/Login';
import { Admin } from './components/Admin';
import { NavMenu } from './components/NavMenu';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
      return (

          <Router>
              <NavMenu />
              <Route path='/' exact component={Home} />
              <Route path='/about' component={About} />
              <Route path='/login' exact href='/login' component={Login} />
              <Route path='/admin'exact component={Admin} />
          </Router>
      //<Layout>
      //  <Route exact path='/' component={Home} />
      //  <Route path='/counter' component={Counter} />
      //  <Route path='/fetch-data' component={FetchData} />
      //  <Route path='/login' component={Login} />
      //  </Layout>
          //<div>
          //    <Router>
          //        <Route path='/room' exact component={Room} />
          //    </Router>
          //  </div>
    );
  }
}
