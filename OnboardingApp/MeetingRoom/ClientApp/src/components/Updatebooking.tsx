import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
//import { Link } from 'react-router-dom';
import { ApplicationState } from '../store';
import * as BookingsStore from '../store/Bookings';

// At runtime, Redux will merge together...
type BookingsProps =
    BookingsStore.BookingsState // ... state we've requested from the Redux store
    & typeof BookingsStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ bookingid: string }>; // ... plus incoming routing parameters


class Updatebooking extends React.PureComponent<BookingsProps> {
    // This method is called when the component is first added to the document

    //public componentDidMount() {
    //    //this.ensureDataFetched();
    //}

    //// This method is called when the route parameters change
    //public componentDidUpdate() {
    //    //this.ensureDataFetched();
    //}

    state = {
        bookingId: '',
        bookingDate: '',
        meetingDate: '',
        meetingTime: 0,
        employeeId: '',
        roomId: '',
        additionalEquipment: '',
        requiredLayout: '',
    }

    onEditCancel = () => {
        this.props.history.push('/bookings');
    }

    onSubmit = () => {

        //e.preventDefault();

        const id = this.props.match.params.bookingid;

        var today = new Date();
        var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

        const booking: BookingsStore.Booking = {
            bookingId: id,
            bookingDate: date,
            meetingDate: this.state.meetingDate,
            meetingTime: this.state.meetingTime,
            employeeId: this.state.employeeId,
            roomId: this.state.roomId,
            additionalEquipment: this.state.additionalEquipment,
            requiredLayout: this.state.requiredLayout
        }

        this.props.updateBooking(booking);

        alert(" Booking has been successfully updated.");

        this.props.history.push('/bookings');
    }


    public render() {
        return (
            <React.Fragment>
                <div className="booking-form" >
                    <h3>Update existing booking</h3>
                    <form onSubmit={ this.onSubmit  }>
                        <div className="form-group">
                            <label>Meeting Date </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.meetingDate}
                                onChange={(e) => this.setState({
                                    meetingDate: e.target.value
                                })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Meeting Time</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.meetingTime}
                                onChange={(e) => this.setState({
                                    meetingTime: e.target.value
                                })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Employee Id </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.employeeId}
                                onChange={(e) => this.setState({
                                    employeeId: e.target.value
                                })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Room Id</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.roomId}
                                onChange={(e) => this.setState({
                                    roomId: e.target.value
                                })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Additional Equipment</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.additionalEquipment}
                                onChange={(e) => this.setState({
                                    additionalEquipment: e.target.value
                                })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Required Layout</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.requiredLayout}
                                onChange={(e) => this.setState({
                                    requiredLayout: e.target.value
                                })}
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Update booking" className="btn btn-primary" />
                            <button onClick={this.onEditCancel} className="btn btn-primary"> Cancel </button>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(
    (state: ApplicationState) => state.bookings, // Selects which state properties are merged into the component's props
    BookingsStore.actionCreators // Selects which action creators are merged into the component's props
)(Updatebooking as any);