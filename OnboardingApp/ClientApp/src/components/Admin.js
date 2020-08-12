import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Route } from 'react-router';
import { Rooms } from './Rooms/Rooms';
import { Equipment } from './Equipment/Equipment';
import { Bookings } from './Bookings/Bookings';

export class Admin extends Component {
    static displayName = Admin.name;

    render() {
        return (
            <Router>
                <ul>
                    <li><Link to="/rooms">
                        <button> Update Rooms</button>
                    </Link></li>
                    <li><Link to="/equipment">
                        <button> Update Equipment</button>
                    </Link></li>
                    <li><Link to="/bookings">
                        <button> Update Bookings</button>
                    </Link></li>
                </ul>
                <Route path='/rooms' exact component={Rooms} />
                <Route path='/equipment' exact component={Equipment} />
                <Route path='/bookings' exact component={Bookings} />
            </Router>
        );
    }
}