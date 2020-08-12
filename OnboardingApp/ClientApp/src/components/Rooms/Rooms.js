import React, { Component } from 'react';
import { PrimaryButton } from 'office-ui-fabric-react';
import { DetailsList } from 'office-ui-fabric-react/lib/DetailsList';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Route } from 'react-router';
import { Addroom } from './Addroom';
import { Editroom } from './Editroom';
export class Rooms extends Component {
    static displayName = Rooms.name;

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            loading: false
        }
    }

    onEditRoom(id) {
        this.props.history.push(`/rooms/editroom`);
        //this.props.history.push(`/rooms/editroom` + id);
    }

    onDeleteRoom(id) {
        this.props.history.push(`/rooms/deleteroom`);
    }

     renderRoomsTable(items) {
        return (
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Room Id</th>
                        <th>Room Type</th>
                        <th>Location</th>
                        <th>Capacity</th>
                        <th>Room Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td>13 B</td>
                            <td>A type</td>
                            <td>Building 3, Wing A</td>
                            <td>35</td>
                            <td>Avaiable</td>
                        <td>
                            <div className="form-group">
                                <button onClick={() => this.onEditRoom("13B")} className="btn btn-success">
                                    Edit Room
                                </button>
                                <button onClick={() => this.onDeleteRoom("13B")} className="btn btn-danger">
                                    Delete Room
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>13 C</td>
                        <td>A type</td>
                        <td>Building 3, Wing A</td>
                        <td>35</td>
                        <td>Avaiable</td>
                        <td>
                            <div className="form-group">
                                <button onClick={ () => this.onEditRoom("13C") } className="btn btn-success">
                                    Edit Room
                                </button>
                                <button onClick={() => this.onDeleteRoom("13C")} className="btn btn-danger">
                                    Delete Room
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }

    render() {

        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderRoomsTable(this.state.items);

        return (
            <div>
                <Router>
                <h1>List of existing rooms.</h1>
                    <p>Here you can see existing rooms.</p>
                    {contents}
                    <Link to="/rooms/editroom">
                        <PrimaryButton>Edit existing room.</PrimaryButton>
                    </Link>
                    <Route path='/rooms/editroom' exact component={Editroom} />
                    <Link to="/rooms/addroom">
                        <PrimaryButton>Add a new room </PrimaryButton>
                    </Link>
                    <Route path='/rooms/addroom' exact component={Addroom} />
                </Router>
            </div>
        );
    }
}