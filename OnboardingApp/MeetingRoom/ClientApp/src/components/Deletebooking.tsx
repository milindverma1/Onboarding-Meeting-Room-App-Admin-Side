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
    & RouteComponentProps<{ bookingid: string }>; // ... plus incoming routing parameters


class Deletebooking extends React.PureComponent<BookingsProps> {
    // This method is called when the component is first added to the document

    //public componentDidMount() {
    //    //this.ensureDataFetched();
    //}

    //// This method is called when the route parameters change
    //public componentDidUpdate() {
    //    //this.ensureDataFetched();
    //}
    onCancel = () => {
        this.props.history.push('/bookings');
    }

    onConfirm = () => {
        const id = this.props.match.params.bookingid;

        this.props.deleteBooking(id);

        alert("Your booking was successfully deleted.");

        this.props.history.push('/bookings');
    }

    public render() {
        return (
            <React.Fragment>
                <div style={{ marginTop: 10 }}>
                    <h2>Delete booking confirmation</h2>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title"> Do you want to delete this booking? </h4>
                            <button onClick={this.onCancel} className="btn btn primary">Cancel</button>
                            <button onClick={this.onConfirm} className="btn btn-danger">Confirm</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(
    (state: ApplicationState) => state.bookings, // Selects which state properties are merged into the component's props
    BookingsStore.actionCreators // Selects which action creators are merged into the component's props
)(Deletebooking as any);