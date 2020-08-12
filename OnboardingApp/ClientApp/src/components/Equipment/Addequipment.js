import React, { Component } from 'react';

export class Addequipment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            equipmentId: '',
            equipmentName: null,
            equipmentQuantity: null
        }
    }

    onChangeEquipmentName = (e) => {
        this.setState({
            equipmentName: e.target.value
        });
    }

    onChangeEquipmentQuantity = (e) => {
        this.setState({
            equipmentQuantity: e.target.value
        });
    }
    onSubmit = (e) => {
        e.preventDefault();

        let equipmentObject = {
            equipmentId: Math.random() * 1000,
            equipmentName: this.state.equipmentName,
            equipmentQuantity: this.state.equipmentQuantity
        }

        //post() code

        this.props.history.push('/equipment');
    }

    render() {
        return (
            <div className="equipment-form" >
                <h3>Add new equipment</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Equipment Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.equipmentName}
                            onChange={this.onChangeEquipmentName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Equipment Quantity</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.equipmentQuantity}
                            onChange={this.onChangeEquipmentQuantity}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add equipment" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}