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
    & RouteComponentProps<{ roomId: string }>; // ... plus incoming routing parameters


class Rooms extends React.PureComponent<RoomsProps> {
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
                <h1 id="tabelLabel">List of existing rooms</h1>
                <p>This component demonstrates fetching data from the server and working with URL parameters.</p>
                {this.renderForecastsTable()}
                <button onClick={this.onAddRoom}>Add a new room </button>
                <button onClick={this.onBackButton}> Back to previous page  </button>
            </React.Fragment>
        );
    }

    private ensureDataFetched() {
        this.props.requestRooms();
    }

    private renderForecastsTable() {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Room Id</th>
                        <th>Room Type</th>
                        <th>Location</th>
                        <th>Capacity</th>
                        <th>Description</th>
                        <th>Room Status</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.rooms.map((room: RoomsStore.Room) =>
                        <tr key={room.roomId}>
                            <td>{ room.roomId} </td>
                            <td>{room.RoomType}</td>
                            <td>{room.Location}</td>
                            <td>{room.Capacity}</td>
                            <td>{room.Description}</td>
                            <td>{room.Status}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    onAddRoom = () => {
        this.props.history.push(`/rooms/addroom`);
        //this.props.history.push(`/rooms/editroom` + id);
    }

    onBackButton = () => {
        this.props.history.push(`/about`);
    }
}

export default connect(
    (state: ApplicationState) => state.rooms, // Selects which state properties are merged into the component's props
    RoomsStore.actionCreators // Selects which action creators are merged into the component's props
)(Rooms as any);