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
    RoomType: string;
    Location: string;
    Capacity: number;
    Description: string;
    Status: string;
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
    temprooms: Room[];
}

interface AddRoomsAction {
    type: 'ADD_ROOMS';
    room: Room;
}


const temprooms: Room[] = [
    {
        roomId: "13B",
        RoomType: "ABC",
        Location: "Hyd B3",
        Capacity: 35,
        Description: "Nice room!",
        Status: "Available"
    },
    {
        roomId: "13C",
        RoomType: "ABC",
        Location: "Hyd B3",
        Capacity: 40,
        Description: "Nice room!",
        Status: "Available"
    }
];

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).

type KnownAction = RequestRoomsAction | ReceiveRoomsAction | AddRoomsAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestRooms: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.rooms && appState.rooms.rooms.length == 0) {

            //Uncomment it once connected with backend.

            /**fetch(`api/rooms`)
                .then(response => response.json() as Promise<Room[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_ROOMS', temprooms }); // Hard coded second parameter- rooms: data
                });*/

            dispatch({ type: 'RECEIVE_ROOMS', temprooms }); // Hard coded second parameter- rooms: data

            //dispatch({ type: 'REQUEST_ROOMS' });
        }
        dispatch({ type: 'REQUEST_ROOMS' });
    },

    addRoom: (room: Room): AppThunkAction<KnownAction> => (dispatch, getState) => {

        const appState = getState();

        //post code here. Async()

        dispatch({ type: 'ADD_ROOMS', room }); 
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
                rooms: action.temprooms,
                isLoading: false
            };
        case 'ADD_ROOMS':
            {
                var newRooms = temprooms;
                newRooms.push({
                    roomId: action.room.roomId,
                    RoomType: action.room.RoomType,
                    Location: action.room.Location,
                    Capacity: action.room.Capacity,
                    Description: action.room.Description,
                    Status: action.room.Status
                });
                return {
                    rooms: newRooms,
                    isLoading: false
                };
            }
        default:
            return unloadedState;
    }
};
