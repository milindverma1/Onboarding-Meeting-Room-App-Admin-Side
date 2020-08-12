import React, { Component } from 'react';
import { render } from 'react-dom';

export class Deletebooking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bookingId: '',
            bookingDate: null,
            meetingDate: null,
            meetingTime: null,
            employeeId: null,
            roomId: null,
            additionalEquipment: null,
            requiredLayout: null
        }
    }

    componentDidMount() {
        const id = this.props.match.params;

        //get booking from API corresponding to id
    }

    onCancel = (e) => {
        this.props.history.push('/bookings');
    }

    onConfirm = (e) => {
        const id = this.props.match.params;

        //delete() code

        alert(" Your booking was successfully deleted.");

        this.props.history.push('/bookings');
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h2>Delete booking confirmation</h2>

                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title"> {this.state.name} </h4>
                        <button onClick={this.onCancel} class="btn btn-default"> Cancel </button>
                        <button onClick={this.onConfirm} class="btn btn-danger"> Confirm </button>
                    </div>
                </div>
            </div>
        )
    }
}