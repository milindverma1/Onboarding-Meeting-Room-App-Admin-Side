import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface RoomsState {
    isLoading: boolean;
    rooms: Room[];
}

export interface Room {
    roomId: string;
    roomType: string;
    location: string;
    capacity: number;
    description: string;
    status: string;
}

enum roomStatus {
    'N' = 1, //normal
    'U' = 0 //under maintenance
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestRoomsAction {
    type: 'REQUEST_ROOMS';
}

interface ReceiveRoomsAction {
    type: 'RECEIVE_ROOMS';
    rooms: Room[];
}

interface AddRoomsAction {
    type: 'ADD_ROOMS';
    room: Room;
}

interface UpdateRoomAction {
    type: 'UPDATE_ROOM';
    room: Room;
}

interface DeleteRoomAction {
    type: 'DELETE_ROOM';
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).

type KnownAction = RequestRoomsAction | ReceiveRoomsAction | AddRoomsAction | UpdateRoomAction | DeleteRoomAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestRooms: (): AppThunkAction<KnownAction> => async (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.rooms && appState.rooms.rooms.length == 0) {

            //Uncomment it once connected with backend.

            const response = await fetch(`api/Room/GetRooms`);
            const rooms = await response.json();

            dispatch({ type: 'RECEIVE_ROOMS', rooms });

                //.then(response => response.json() as Promise<Room[]>)
                //.then(data => {
                //    dispatch({ type: 'RECEIVE_ROOMS', rooms: data }); // Hard coded second parameter- rooms: data
                //});

            //dispatch({ type: 'RECEIVE_ROOMS', temprooms }); // Hard coded second parameter- rooms: data

            //dispatch({ type: 'REQUEST_ROOMS' });
        }
        dispatch({ type: 'REQUEST_ROOMS' });
    },

    addRoom: (room: Room): AppThunkAction<KnownAction> => (dispatch, getState) => {

        const appState = getState();

        fetch(`api/Room/AddRoom`, {
            method: 'POST',
            
            body: JSON.stringify(room),
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
                dispatch({ type: 'ADD_ROOMS', room }); 
            });

    },

    updateRoom: (room: Room): AppThunkAction<KnownAction> => (dispatch, getState) => {

        const appState = getState();

        fetch(`api/Room/UpdateRoom/${room.roomId}`, {
            method: 'PUT',

            body: JSON.stringify(room),
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
                dispatch({ type: 'UPDATE_ROOM', room });
            });

        //post code here. Async()
    },

    deleteRoom: (roomId: string): AppThunkAction<KnownAction> => (dispatch, getState) => {

        const appState = getState();

        fetch(`api/Room/DeleteRoom/${roomId}`, {
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
                dispatch({ type: 'DELETE_ROOM'});
            });
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: RoomsState = { rooms: [], isLoading: false };

export const reducer: Reducer<RoomsState> = (state: RoomsState | undefined, incomingAction: Action): RoomsState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_ROOMS':
            return {
                rooms: state.rooms,
                isLoading: true
            };
        case 'RECEIVE_ROOMS':
            return {
                rooms: action.rooms,
                isLoading: false
            };
        case 'ADD_ROOMS':
                return {
                    rooms: state.rooms,
                    isLoading: false
                };
        case 'UPDATE_ROOM':
            return {
                rooms: state.rooms,
                isLoading: false
            }
        case 'DELETE_ROOM':
            return {
                rooms: state.rooms,
                isLoading: false
            }
        default:
            return unloadedState;
    }
};
