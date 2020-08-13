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
    equipmentQuantity: string;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestEquipmentAction {
    type: 'REQUEST_EQUIPMENT';
}

interface ReceiveEquipmentAction {
    type: 'RECEIVE_EQUIPMENT';
    tempequipment: Equipment[];
}

interface AddEquipmentAction {
    type: 'ADD_EQUIPMENT';
    equipment: Equipment;
}


const tempequipment: Equipment[] = [
    {
        equipmentId: "A310",
        equipmentName: "Projector",
        equipmentQuantity: "25",
    },
    {
        equipmentId: "B10",
        equipmentName: "Notepad",
        equipmentQuantity: "35",
    }
];

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).

type KnownAction = RequestEquipmentAction | ReceiveEquipmentAction | AddEquipmentAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestEquipment: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.equipment && appState.equipment.equipment.length == 0) {

            //Uncomment it once connected with backend.

            /**fetch(`api/rooms`)
                .then(response => response.json() as Promise<Room[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_ROOMS', temprooms }); // Hard coded second parameter- rooms: data
                });*/

            dispatch({ type: 'RECEIVE_EQUIPMENT', tempequipment }); // Hard coded second parameter- rooms: data

            //dispatch({ type: 'REQUEST_ROOMS' });
        }
        dispatch({ type: 'REQUEST_EQUIPMENT' });
    },

    addEquipment: (equipment: Equipment): AppThunkAction<KnownAction> => (dispatch, getState) => {

        const appState = getState();

        //post code here. Async()

        dispatch({ type: 'ADD_EQUIPMENT', equipment }); 
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
                equipment: action.tempequipment,
                isLoading: false
            };
        case 'ADD_EQUIPMENT':
            {
                var newEquipment = tempequipment;
                newEquipment.push({
                    equipmentId: action.equipment.equipmentId,
                    equipmentName: action.equipment.equipmentName,
                    equipmentQuantity: action.equipment.equipmentQuantity
                });
                return {
                    equipment: newEquipment,
                    isLoading: false
                };
            }
        default:
            return unloadedState;
    }
};
