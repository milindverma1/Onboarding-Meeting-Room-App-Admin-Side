import React, { Component } from 'react';

export class Addbooking extends Component {
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

    onChangeBookingDate = (e) => {
        this.setState({
            bookingDate: e.target.value
        });
    }

    onChangeMeetingDate = (e) => {
        this.setState({
            meetingDate: e.target.value
        });
    }

    onChangeMeetingTime = (e) => {
        this.setState({
            meetingTime: e.target.value
        });
    }

    onChangeEmployeeId = (e) => {
        this.setState({
            employeeId: e.target.value
        });
    }

    onChangeRoomId = (e) => {
        this.setState({
            roomId: e.target.value
        });
    }

    onChangeAdditionalEquipment = (e) => {
        this.setState({
            additionalEquipment: e.target.value
        });
    }

    onChangeRequiredLayout = (e) => {
        this.setState({
            requiredLayout: e.target.value
        });
    }

    onAddCancel = (e) => {
        this.props.history.push('/bookings');
    }

    onSubmit = (e) => {
        e.preventDefault();

        let bookingObject = {
            bookingId: Math.random() * 1000,
            bookingDate: this.state.bookingDate,
            meetingDate: this.state.meetingDate,
            meetingTime: this.state.meetingTime,
            employeeId: this.state.employeeId,
            roomId: this.state.roomId,
            additionalEquipment: this.state.additionalEquipment,
            requiredLayout: this.state.requiredLayout,
        }

        //post() code

        alert(" New booking has been successfully added.");

        this.props.history.push('/bookings');
    }

    render() {
        return (
            <div className="booking-form" >
                <h3>Add new booking</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Booking date: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.bookingDate}
                            onChange={this.onChangeBookingDate}
                        />
                    </div>
                    <div className="form-group">
                        <label>Meeting date: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.meetingDate}
                            onChange={this.onChangeMeetingDate}
                        />
                    </div>
                    <div className="form-group">
                        <label>Meeting Time: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.meetingTime}
                            onChange={this.onChangeMeetingTime}
                        />
                    </div>
                    <div className="form-group">
                        <label>Employee Id </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.employeeId}
                            onChange={this.onChangeEmployeeId}
                        />
                    </div>
                    <div className="form-group">
                        <label>Room Id </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.roomId}
                            onChange={this.onChangeRoomId}
                        />
                    </div>
                    <div className="form-group">
                        <label>Additional Equipments </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.additionalEquipment}
                            onChange={this.onChangeAdditionalEquipment}
                        />
                    </div>
                    <div className="form-group">
                        <label>Required Layout </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.requiredLayout}
                            onChange={this.onChangeRequiredLayout}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add a new booking" className="btn btn-primary" />
                        <button onClick={this.onAddCancel} className="btn btn-primary"> Cancel </button>
                    </div>
                </form>
            </div>
        )
    }

}