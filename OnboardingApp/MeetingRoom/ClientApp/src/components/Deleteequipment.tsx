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


class Deleteequipment extends React.PureComponent<EquipmentProps> {
    // This method is called when the component is first added to the document

    //public componentDidMount() {
    //    //this.ensureDataFetched();
    //}

    //// This method is called when the route parameters change
    //public componentDidUpdate() {
    //    //this.ensureDataFetched();
    //}

    onCancel = () => {
        this.props.history.push('/equipment');
    }

    onConfirm = () => {
        const id = this.props.match.params.equipmentid;

        this.props.deleteEquipment(id);

        alert("Your equipment was successfully deleted.");

        this.props.history.push('/equipment');
    }

    public render() {
        return (
            <React.Fragment>
                <div style={{ marginTop: 10 }}>
                    <h2>Delete equipment confirmation</h2>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title"> Do you want to delete this equipment? </h4>
                            <button onClick={this.onCancel} className="btn btn primary">Cancel</button>
                            <button onClick={this.onConfirm} className="btn btn-danger">Confirm</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(
    (state: ApplicationState) => state.equipment, // Selects which state properties are merged into the component's props
    EquipmentStore.actionCreators // Selects which action creators are merged into the component's props
)(Deleteequipment as any);