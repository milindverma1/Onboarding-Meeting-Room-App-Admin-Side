import React, { Component } from 'react';
import { Rooms } from './Rooms/Rooms';
import { Equipment } from './Equipment/Equipment';
import { Bookings } from './Bookings/Bookings';

export class Admin extends Component {
    static displayName = Admin.name;

    updateRoomsButtonHandler = () => {
        this.props.history.push('/rooms');
    }

    updateEquipmentButtonHandler = () => {
        this.props.history.push('/equipment');
    }

    updateBookingsButtonHandler = () => {
        this.props.history.push('/bookings');
    }

    render() {
        return (
                <ul>
                <li>
                    <button onClick={ this.updateRoomsButtonHandler}> Update Rooms</button>
                </li>
                <li>
                    <button onClick={ this.updateEquipmentButtonHandler}> Update Equipment</button>
                </li>
                <li>
                    <button onClick={this.updateBookingsButtonHandler}> Update Bookings</button>
                </li>
                </ul>
        );
    }
}