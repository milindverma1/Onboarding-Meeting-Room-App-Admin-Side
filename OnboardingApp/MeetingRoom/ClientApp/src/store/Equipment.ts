import { Action, Reducer } from 'redux';
import { AppThunkAction } from '.';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface EquipmentState {
    isLoading: boolean;
    equipment: Equipment[];
}

export interface Equipment {
    equipmentId: string;
    equipmentName: string;
    equipmentQuantity: number;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestEquipmentAction {
    type: 'REQUEST_EQUIPMENT';
}

interface ReceiveEquipmentAction {
    type: 'RECEIVE_EQUIPMENT';
    equipment: Equipment[];
}

interface AddEquipmentAction {
    type: 'ADD_EQUIPMENT';
    equipment: Equipment;
}

interface UpdateEquipmentAction {
    type: 'UPDATE_EQUIPMENT';
    equipment: Equipment;
}

interface DeleteEquipmentAction {
    type: 'DELETE_EQUIPMENT';
}


// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).

type KnownAction = RequestEquipmentAction | ReceiveEquipmentAction | AddEquipmentAction | UpdateEquipmentAction | DeleteEquipmentAction; 

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestEquipment: (): AppThunkAction<KnownAction> => async (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.equipment && appState.equipment.equipment.length == 0) {

            const response = await fetch(`api/Equipment/GetEquipment`);
            const equipment = await response.json();

            dispatch({ type: 'RECEIVE_EQUIPMENT', equipment });
        }
        dispatch({ type: 'REQUEST_EQUIPMENT' });
    },

    addEquipment: (equipment: Equipment): AppThunkAction<KnownAction> => (dispatch, getState) => {

        const appState = getState();

        fetch(`api/Equipment/AddEquipment`, {
            method: 'POST',

            body: JSON.stringify(equipment),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP status " + response.status);
                }
            })
            .then(data => {
                dispatch({ type: 'ADD_EQUIPMENT', equipment });
            });
    },

    updateEquipment: (equipment: Equipment): AppThunkAction<KnownAction> => (dispatch, getState) => {

        const appState = getState();

        fetch(`api/Equipment/UpdateEquipment/${equipment.equipmentId}`, {
            method: 'PUT',

            body: JSON.stringify(equipment),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP status " + response.status);
                }
            })
            .then(data => {
                dispatch({ type: 'UPDATE_EQUIPMENT', equipment });
            });

    },

    deleteEquipment: (equipmentId: string): AppThunkAction<KnownAction> => (dispatch, getState) => {

        const appState = getState();

        fetch(`api/Equipment/DeleteEquipment/${equipmentId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP status " + response.status);
                }
            })
            .then(data => {
                dispatch({ type: 'DELETE_EQUIPMENT' });
            });
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: EquipmentState = { equipment: [], isLoading: false };

export const reducer: Reducer<EquipmentState> = (state: EquipmentState | undefined, incomingAction: Action): EquipmentState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_EQUIPMENT':
            return {
                equipment: state.equipment,
                isLoading: true
            };
        case 'RECEIVE_EQUIPMENT':
            return {
                equipment: action.equipment,
                isLoading: false
            };
        case 'ADD_EQUIPMENT':
            return {
                equipment: state.equipment,
                isLoading: false
            };
        case 'UPDATE_EQUIPMENT':
            return {
                equipment: state.equipment,
                isLoading: false
            }
        case 'DELETE_EQUIPMENT':
            return {
                equipment: state.equipment,
                isLoading: false
            }
        default:
            return unloadedState;
    }
};
