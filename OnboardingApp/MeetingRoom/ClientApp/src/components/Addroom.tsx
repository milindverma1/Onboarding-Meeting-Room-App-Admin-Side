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


class Addroom extends React.PureComponent<RoomsProps> {
    // This method is called when the component is first added to the document

    //public componentDidMount() {
    //    //this.ensureDataFetched();
    //}

    //// This method is called when the route parameters change
    //public componentDidUpdate() {
    //    //this.ensureDataFetched();
    //}

    state = {
            roomId: '',
            roomType: '',
            location: '',
            capacity: 0,
            description: '',
            roomStatus: ''
        }


    onAddCancel = () => {
        this.props.history.push('/rooms');
    }

    onSubmit = () => {

        //e.preventDefault();

        const room: RoomsStore.Room = {
            roomId: "Some random number",
            RoomType: this.state.roomType,
            Location: this.state.location,
            Capacity: this.state.capacity,
            Description: this.state.description,
            Status: this.state.roomStatus
        }

        //post() code

        this.props.addRoom(room);

        alert(" New room has been successfully added.");

        this.props.history.push('/rooms');
    }


    public render() {
        return (
            <React.Fragment>
                <div className="room-form" >
                    <h3>Add new room</h3>
                    <form onSubmit={ this.onSubmit  }>
                        <div className="form-group">
                            <label>Room type: </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.roomType}
                                onChange={(e) => this.setState({
                                    roomType: e.target.value
                                })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Location: </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.location}
                                onChange={(e) => this.setState({
                                    location: e.target.value
                                })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Capacity:  </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.capacity}
                                onChange={(e) => this.setState({
                                    capacity: e.target.value
                                })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Description </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.description}
                                onChange={(e) => this.setState({
                                    description: e.target.value
                                })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Room status:  </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.roomStatus}
                                onChange={(e) => this.setState({
                                    roomStatus: e.target.value
                                })}
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Add a room" className="btn btn-primary" />
                            <button onClick={this.onAddCancel} className="btn btn-primary"> Cancel </button>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(
    (state: ApplicationState) => state.rooms, // Selects which state properties are merged into the component's props
    RoomsStore.actionCreators // Selects which action creators are merged into the component's props
)(Addroom as any);