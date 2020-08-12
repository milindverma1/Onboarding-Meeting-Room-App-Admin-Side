import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { About } from './components/About';
import { Login } from './components/Login';
import { Admin } from './components/Admin';
import { Rooms } from './components/Rooms/Rooms';
import { Addroom } from './components/Rooms/Addroom';
import { Editroom } from './components/Rooms/Editroom';
import { Deleteroom } from './components/Rooms/Deleteroom';
import { Equipment } from './components/Equipment/Equipment';
import { Addequipment } from './components/Equipment/Addequipment';
import { Editequipment } from './components/Equipment/Editequipment';
import { Deleteequipment } from './components/Equipment/Deleteequipment';
import { Bookings } from './components/Bookings/Bookings';
import { Addbooking } from './components/Bookings/Addbooking';
import { Editbooking } from './components/Bookings/Editbooking';
import { Deletebooking } from './components/Bookings/Deletebooking';
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
              <Route path='/admin' exact component={Admin} />
              <Route path='/rooms' exact component={Rooms} />
              <Route path='/equipment' exact component={Equipment} />
              <Route path='/bookings' exact component={Bookings} />
              <Route path='/rooms/addroom' exact component={Addroom} />
              <Route path='/rooms/editroom' exact component={Editroom} />
              <Route path='/rooms/deleteroom' exact component={Deleteroom} />
              <Route path='/equipment/addequipment' exact component={Addequipment} />
              <Route path='/equipment/editequipment' exact component={Editequipment} />
              <Route path='/equipment/deleteequipment' exact component={Deleteequipment} />
              <Route path='/bookings/addbooking' exact component={Addbooking} />
              <Route path='/bookings/editbooking' exact component={Editbooking} />
              <Route path='/bookings/deletebooking' exact component={Deletebooking} />
          </Router>
    );
  }
}
