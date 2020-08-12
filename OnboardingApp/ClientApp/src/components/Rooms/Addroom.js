import React, { Component } from 'react';

export class Addroom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            roomId: '',
            roomType: null,
            location: '',
            capacity: null,
            roomStatus: null
        }
    }

    onChangeRoomType = (e) => {
        this.setState({
            roomType: e.target.value
        });
    }

    onChangeLocation = (e) => {
        this.setState({
            location: e.target.value
        });
    }

    onChangeCapacity = (e) => {
        this.setState({
            capacity: e.target.value
        });
    }

    onChangeRoomStatus = (e) => {
        this.setState({
            roomStatus: e.target.value
        });
    }

    onAddCancel = (e) => {
        this.props.history.push('/rooms');
    }

    onSubmit = (e) => {
        e.preventDefault();

        let roomObject = {
            roomId: Math.random() * 1000,
            roomType: this.state.roomType,
            location: this.state.location,
            capacity: this.state.capacity,
            roomStatus: this.state.roomStatus
        }

        //post() code

        alert(" New room has been successfully added.");

        this.props.history.push('/rooms');
    }

    render() {
        return (
            <div className="room-form" >
                <h3>Add new room</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Room type: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.roomType}
                            onChange={this.onChangeRoomType}
                        />
                    </div>
                    <div className="form-group">
                        <label>Location: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.location}
                            onChange={this.onChangeLocation}
                        />
                    </div>
                    <div className="form-group">
                        <label>Capacity:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.capacity}
                            onChange={this.onChangeCapacity}
                        />
                    </div>
                    <div className="form-group">
                        <label>Room status:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.roomStatus}
                            onChange={this.onChangeRoomStatus}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add a room" className="btn btn-primary" />
                        <button onClick={this.onAddCancel} className="btn btn-primary"> Cancel </button>
                    </div>
                </form>
            </div>
            )
    }

}