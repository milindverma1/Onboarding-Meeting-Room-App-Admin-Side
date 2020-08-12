import React, { Component } from 'react';
import { PrimaryButton } from 'office-ui-fabric-react';
import { DetailsList } from 'office-ui-fabric-react/lib/DetailsList';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Route } from 'react-router';
import { Addbooking } from './Addbooking';
import { Editbooking } from './Editbooking';
export class Bookings extends Component {
    static displayName = Bookings.name;

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            loading: false
        }
    }

    onEditBooking(id) {
        this.props.history.push(`/bookings/editbooking`);
        //this.props.history.push(`/bookings/editbooking` + id);
    }

    onDeleteBooking(id) {
        this.props.history.push(`/bookings/deletebooking`);
    }

    renderBookingsTable(items) {
        return (
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Booking Id</th>
                        <th>Booking Date</th>
                        <th>Meeting Date</th>
                        <th>Meeting Time</th>
                        <th>Employee Id</th>
                        <th>Room Id</th>
                        <th>Additional Equipment</th>
                        <th>Required Layout</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>123</td>
                        <td>27/07/2020</td>
                        <td>15/08/2020</td>
                        <td>11:30 AM</td>
                        <td>1358</td>
                        <td>13 B</td>
                        <td>Projector</td>
                        <td>Rounds</td>
                        <td>
                            <div className="form-group">
                                <button onClick={() => this.onEditBooking("123")} className="btn btn-success">
                                    Edit Booking
                                </button>
                                <button onClick={() => this.onDeleteRoom("123")} className="btn btn-danger">
                                    Delete Booking
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }

    render() {

        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderBookingsTable(this.state.items);

        return (
            <div>
                <Router>
                    <h1>List of existing bookings.</h1>
                    <p>Here you can see existing bookings.</p>
                    {contents}
                    <Link to="/bookings/editbooking">
                        <PrimaryButton>Edit existing booking.</PrimaryButton>
                    </Link>
                    <Route path='/bookings/editbooking' exact component={Editbooking} />
                    <Link to="/bookings/addbooking">
                        <PrimaryButton>Add a new booking </PrimaryButton>
                    </Link>
                    <Route path='/bookings/addbooking' exact component={Addbooking} />
                </Router>
            </div>
        );
    }
}