import React, { Component } from 'react';
import { PrimaryButton } from 'office-ui-fabric-react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Route } from 'react-router';
import { Addequipment } from './Addequipment';
import { Editequipment } from './Editequipment';
export class Equipment extends Component {
    static displayName = Equipment.name;

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            loading: false
        }
    }

    onEditEquipment(id) {
        this.props.history.push(`/equipment/editequipment`);
        //this.props.history.push(`/equipment/editequipment` + id);
    }

    onDeleteEquipment(id) {
        this.props.history.push(`/equipment/deleteequipment`);
    }

    renderEquipmentTable(items) {
        return (
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Equipment Id</th>
                        <th>Equipment Name</th>
                        <th>Equipment quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>XYZ1</td>
                        <td>Projector</td>
                        <td>20</td>
                        <td>
                            <div className="form-group">
                                <button onClick={() => this.onEditEquipment("XYZ1")} className="btn btn-success">
                                    Edit Equipment
                                </button>
                                <button onClick={() => this.onDeleteEquipment("XYZ1")} className="btn btn-danger">
                                    Delete Equipment
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>XYZ2</td>
                        <td>Whiteboards</td>
                        <td>35</td>
                        <td>
                            <div className="form-group">
                                <button onClick={() => this.onEditEquipment("XYZ2")} className="btn btn-success">
                                    Edit Equipment
                                </button>
                                <button onClick={() => this.onDeleteRoom("13C")} className="btn btn-danger">
                                    Delete Equipment
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
            : this.renderEquipmentTable(this.state.items);

        return (
            <div>
                <Router>
                    <h1>List of existing equipment.</h1>
                    <p>Here you can see existing equipment.</p>
                    {contents}
                    <Link to="/equipment/editequipment">
                        <PrimaryButton>Edit existing equipment.</PrimaryButton>
                    </Link>
                    <Route path='/equipment/editequipment' exact component={Editequipment} />
                    <Link to="/equipment/addequipment">
                        <PrimaryButton>Add a new equipment </PrimaryButton>
                    </Link>
                    <Route path='/equipment/addequipment' exact component={Addequipment} />
                </Router>
            </div>
        );
    }
}