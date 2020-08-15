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


class Equipment extends React.PureComponent<EquipmentProps> {
    // This method is called when the component is first added to the document
    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched();
    }

    public render() {
        return (
            <React.Fragment>
                <h1 id="tabelLabel">List of existing equipment</h1>
                <p>This component demonstrates fetching data from the server and working with URL parameters.</p>
                {this.renderForecastsTable()}
                <button onClick={this.onAddEquipment}>Add a new equipment </button>
                <button onClick={this.onBackButton}> Back to previous page  </button>
            </React.Fragment>
        );
    }

    private ensureDataFetched() {
        this.props.requestEquipment();
    }

    private renderForecastsTable() {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Equipment Id</th>
                        <th>Equipment Name</th>
                        <th>Equipment Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.equipment.map((equipment: EquipmentStore.Equipment) =>
                        <tr key={equipment.equipmentId}>
                            <td>{equipment.equipmentId} </td>
                            <td>{equipment.equipmentName}</td>
                            <td>{equipment.equipmentQuantity}</td>
                            <div className="form-group">
                                <button onClick={() => this.onUpdateEquipment(equipment.equipmentId)} className="btn btn-success">
                                    Update Equipment
                                </button>
                                <button onClick={() => this.onDeleteEquipment(equipment.equipmentId)} className="btn btn-danger">
                                    Delete Equipment
                                </button>
                            </div>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    onAddEquipment = () => {
        this.props.history.push(`/equipment/addequipment`);
        //this.props.history.push(`/rooms/editroom` + id);
    }

    onBackButton = () => {
        this.props.history.push(`/about`);
    }

    onUpdateEquipment(equipmentId: string) {
        this.props.history.push(`/equipment/updateequipment/${equipmentId}`);
        //this.props.history.push(`/rooms/editroom` + id);
    }

    onDeleteEquipment(equipmentId: string) {
        this.props.history.push(`/equipment/deleteequipment/${equipmentId}`);
    }
}

export default connect(
    (state: ApplicationState) => state.equipment, // Selects which state properties are merged into the component's props
    EquipmentStore.actionCreators // Selects which action creators are merged into the component's props
)(Equipment as any);