import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
//import { Link } from 'react-router-dom';
import { ApplicationState } from '../store';
import * as RoomsStore from '../store/Rooms';
//import * as WeatherForecastsStore from '.../store/WeatherForecasts';

// At runtime, Redux will merge together...
type RoomsProps =
    RoomsStore.RoomsState // ... state we've requested from the Redux store
    & typeof RoomsStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ roomid: string }>; // ... plus incoming routing parameters


class Deleteroom extends React.PureComponent<RoomsProps> {
    // This method is called when the component is first added to the document

    //public componentDidMount() {
    //    //this.ensureDataFetched();
    //}

    //// This method is called when the route parameters change
    //public componentDidUpdate() {
    //    //this.ensureDataFetched();
    //}
    onCancel = () => {
        this.props.history.push('/rooms');
    }

    onConfirm = () => {
        const id = this.props.match.params.roomid;

        this.props.deleteRoom(id);

        alert("Your room was successfully deleted.");

        this.props.history.push('/rooms');
    }

    public render() {
        return (
            <React.Fragment>
                <div style={{ marginTop: 10 }}>
                    <h2>Delete room confirmation</h2>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title"> Do you want to delete this room? </h4>
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
    (state: ApplicationState) => state.rooms, // Selects which state properties are merged into the component's props
    RoomsStore.actionCreators // Selects which action creators are merged into the component's props
)(Deleteroom as any);