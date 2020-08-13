import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
//import { Link } from 'react-router-dom';
import { ApplicationState } from '../store';
import * as BookingsStore from '../store/Bookings';
//import * as WeatherForecastsStore from '.../store/WeatherForecasts';

// At runtime, Redux will merge together...
type BookingsProps =
    BookingsStore.BookingsState // ... state we've requested from the Redux store
    & typeof BookingsStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ bookingId: string }>; // ... plus incoming routing parameters


class Bookings extends React.PureComponent<BookingsProps> {
    // This method is called when the component is first added to the document
    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched();
    }

    public render() {
        return (
            <React.Fragment>
                <h1 id="tabelLabel">List of existing bookings</h1>
                <p>This component demonstrates fetching data from the server and working with URL parameters.</p>
                {this.renderForecastsTable()}
                <button onClick={this.onAddBooking}>Add a new booking </button>
                <button onClick={this.onBackButton}> Back to previous page  </button>
            </React.Fragment>
        );
    }

    private ensureDataFetched() {
        this.props.requestBookings();
    }

    private renderForecastsTable() {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
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
                    </tr>
                </thead>
                <tbody>
                    {this.props.bookings.map((booking: BookingsStore.Booking) =>
                        <tr key={booking.bookingId}>
                            <td>{booking.bookingId} </td>
                            <td>{booking.bookingDate} </td>
                            <td>{booking.meetingDate}</td>
                            <td>{booking.meetingTime}</td>
                            <td>{booking.employeeId}</td>
                            <td>{booking.roomId}</td>
                            <td>{booking.additionalEquipment}</td>
                            <td>{booking.requiredLayout}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    onAddBooking = () => {
        this.props.history.push(`/bookings/addbooking`);
        //this.props.history.push(`/rooms/editroom` + id);
    }

    onBackButton = () => {
        this.props.history.push(`/about`);
    }
}

export default connect(
    (state: ApplicationState) => state.bookings, // Selects which state properties are merged into the component's props
    BookingsStore.actionCreators // Selects which action creators are merged into the component's props
)(Bookings as any);