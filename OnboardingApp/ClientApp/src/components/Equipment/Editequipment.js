import React, { Component } from 'react';

export class Editequipment extends Component {
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

    onEditCancel = (e) => {
        this.props.history.push('/equipment');
    }

    onSubmit = (e) => {
        e.preventDefault();
        const id = this.props.match.params;

        let equipmentObject = {
            equipmentName: this.state.equipmentName,
            equipmentQuantity: this.state.equipmentQuantity
        }

        //put() code

        this.props.history.push('/equipment');
    }

    render() {
        return (
            <div className="equipment-form" >
                <h3>Edit equipment</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Equipment Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.equipmentName}
                            onChange={this.onChangeEquipmentName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Equipment quantity: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.equipmentQuantity}
                            onChange={this.onChangeEquipmentQuantity}
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