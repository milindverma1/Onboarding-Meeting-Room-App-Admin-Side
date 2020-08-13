import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
//import { Link } from 'react-router-dom';
import { ApplicationState } from '../store';
import * as EquipmentStore from '../store/Equipment';
//import * as WeatherForecastsStore from '.../store/WeatherForecasts';

// At runtime, Redux will merge together...
type EquipmentProps =
    EquipmentStore.EquipmentState // ... state we've requested from the Redux store
    & typeof EquipmentStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ equipmentId: string }>; // ... plus incoming routing parameters


class Addequipment extends React.PureComponent<EquipmentProps> {
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
        equipmentQuantity: '',
    }

    onAddCancel = () => {
        this.props.history.push('/equipment');
    }

    onSubmit = () => {

        //e.preventDefault();

        const equipment: EquipmentStore.Equipment = {
            equipmentId: "Some random number",
            equipmentName: this.state.equipmentName,
            equipmentQuantity: this.state.equipmentQuantity
        }

        //post() code

        this.props.addEquipment(equipment);

        alert(" New equipment has been successfully added.");

        this.props.history.push('/equipment');
    }


    public render() {
        return (
            <React.Fragment>
                <div className="equipment-form" >
                    <h3>Add new equipment</h3>
                    <form onSubmit={this.onSubmit}>
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
                                type="text"
                                className="form-control"
                                value={this.state.equipmentQuantity}
                                onChange={(e) => this.setState({
                                    equipmentQuantity: e.target.value
                                })}
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Add a equipment" className="btn btn-primary" />
                            <button onClick={this.onAddCancel} className="btn btn-primary"> Cancel </button>
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
)(Addequipment as any);