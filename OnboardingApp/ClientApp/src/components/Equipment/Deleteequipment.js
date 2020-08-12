import React, { Component } from 'react';
import { render } from 'react-dom';

export class Deleteequipment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            equipmentId: '',
            equipmentName: null,
            equipmentQuantity: null
        }
    }

    componentDidMount() {
        const id = this.props.match.params;

        //get equipment from API corresponding to id
    }

    onCancel = (e) => {
        this.props.history.push('/equipment');
    }

    onConfirm = (e) => {
        const id = this.props.match.params;

        //delete() code

        alert(" Your equipment was successfully deleted.");

        this.props.history.push('/equipment');
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h2>Delete equipment confirmation</h2>

                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title"> {this.state.name} </h4>
                        <button onClick={this.onCancel} class="btn btn-default"> Cancel </button>
                        <button onClick={this.onConfirm} class="btn btn-danger"> Confirm </button>
                    </div>
                </div>
            </div>
        )
    }
}