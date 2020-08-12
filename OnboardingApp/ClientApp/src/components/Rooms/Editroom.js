import React, { Component } from 'react';

export class Editroom extends Component {
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

    componentDidMount() {
        const id = this.props.match.params;

        //get room from API corresponding to id
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

    onEditCancel = (e) => {
        this.props.history.push('/rooms');
    }

    onSubmit = (e) => {
        e.preventDefault();
        const id = this.props.match.params;

        let roomObject = {
            roomType: this.state.roomType,
            location: this.state.location,
            capacity: this.state.capacity,
            roomStatus: this.state.roomStatus
        }

        //put() code


        alert(" Your room has been successfully updated.");

        this.props.history.push('/rooms');
    }

    render() {
        return (
            <div className="room-form" >
                <h3>Edit room</h3>
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
                        <button onClick={this.onEditCancel} className="">Cancel</button>
                        <button type="submit" className="">Edit</button>
                    </div>
                </form>
            </div>
            )
    }

}