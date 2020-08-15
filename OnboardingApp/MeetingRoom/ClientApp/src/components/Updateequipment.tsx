import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
//import { Link } from 'react-router-dom';
import { ApplicationState } from '../store';
import * as EquipmentStore from '../store/Equipment';


// At runtime, Redux will merge together...
type EquipmentProps =
    EquipmentStore.EquipmentState // ... state we've requested from the Redux store
    & typeof EquipmentStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ equipmentid: string }>; // ... plus incoming routing parameters


class Updateequipment extends React.PureComponent<EquipmentProps> {
    // This method is called when the component is first added to the document

    //public componentDidMount() {
    //    //this.ensureDataFetched();
    //}

    //// This method is called when the route parameters change
    //public componentDidUpdate() {
    //    //this.ensureDataFetched();
    //}

    state = {
        equipmentId: '',
        equipmentName: '',
        equipmentQuantity: 0,
    }

    onEditCancel = () => {
        this.props.history.push('/equipment');
    }

    onSubmit = () => {

        //e.preventDefault();

        const id = this.props.match.params.equipmentid;

        const equipment: EquipmentStore.Equipment = {
            equipmentId: id,
            equipmentName: this.state.equipmentName,
            equipmentQuantity: this.state.equipmentQuantity
        }

        this.props.updateEquipment(equipment);

        alert(" Equipment has been successfully edited.");

        this.props.history.push('/equipment');
    }


    public render() {
        return (
            <React.Fragment>
                <div className="equipment-form" >
                    <h3>Update existing equipment</h3>
                    <form onSubmit={ this.onSubmit  }>
                        <div className="form-group">
                            <label>Equipment Name </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.equipmentName}
                                onChange={(e) => this.setState({
                                    equipmentName: e.target.value
                                })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Equipment Quantity </label>
                            <input
                                type="number"
                                className="form-control"
                                value={this.state.equipmentQuantity}
                                onChange={(e) => this.setState({
                                    equipmentQuantity: e.target.valueAsNumber
                                })}
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Update Equipment" className="btn btn-primary" />
                            <button onClick={this.onEditCancel} className="btn btn-primary"> Cancel </button>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(
    (state: ApplicationState) => state.equipment, // Selects which state properties are merged into the component's props
    EquipmentStore.actionCreators // Selects which action creators are merged into the component's props
)(Updateequipment as any);