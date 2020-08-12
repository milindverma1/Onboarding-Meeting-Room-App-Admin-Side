import React, { Component } from 'react';
import { render } from 'react-dom';

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
}

componentDidMount() {
    const id = this.props.match.params;

    //get room from API corresponding to id
}

onCancel = (e) => {
    this.props.history.push('/rooms');
}

onConfirm = (e) => {
    const id = this.props.match.params;

    //delete() code

    this.props.history.push('/rooms');
}

render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h2>Delete room confirmation</h2>

            <div class="card">
                <div class="card-body">
                    <h4 class="card-title"> {this.state.name} </h4>
                    <button onClick={this.onCancel} class="btn btn-default">
                        Cancel
            </button>
                    <button onClick={this.onConfirm} class="btn btn-danger">
                        Confirm
            </button>
                </div>
            </div>
        </div>
        )
}