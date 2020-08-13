import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface BookingsState {
    isLoading: boolean;
    bookings: Booking[];
}

export interface Booking {
    bookingId: string;
    bookingDate: string;
    meetingDate: string;
    meetingTime: number;
    employeeId: string;
    roomId: string;
    additionalEquipment: string;
    requiredLayout: string;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestBookingsAction {
    type: 'REQUEST_BOOKINGS';
}

interface ReceiveBookingsAction {
    type: 'RECEIVE_BOOKINGS';
    tempbookings: Booking[];
}

interface AddBookingsAction {
    type: 'ADD_BOOKINGS';
    booking: Booking;
}


const tempbookings: Booking[] = [
    {
        bookingId: '12X',
        bookingDate: "27/07/2020",
        meetingDate: "15/08/2020",
        meetingTime: 11,
        employeeId: '13B',
        roomId: '104A',
        additionalEquipment: 'Projector',
        requiredLayout: 'Rounds'
    }
];

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).

type KnownAction = RequestBookingsAction | ReceiveBookingsAction | AddBookingsAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestBookings: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.bookings && appState.bookings.bookings.length == 0) {

            //Uncomment it once connected with backend.

            /**fetch(`api/rooms`)
                .then(response => response.json() as Promise<Room[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_ROOMS', temprooms }); // Hard coded second parameter- rooms: data
                });*/

            dispatch({ type: 'RECEIVE_BOOKINGS', tempbookings }); // Hard coded second parameter- rooms: data

            //dispatch({ type: 'REQUEST_ROOMS' });
        }
        dispatch({ type: 'REQUEST_BOOKINGS' });
    },

    addBooking: (booking: Booking): AppThunkAction<KnownAction> => (dispatch, getState) => {

        const appState = getState();

        //post code here. Async()

        dispatch({ type: 'ADD_BOOKINGS', booking });
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: BookingsState = { bookings: [], isLoading: false };

export const reducer: Reducer<BookingsState> = (state: BookingsState | undefined, incomingAction: Action): BookingsState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_BOOKINGS':
            return {
                bookings: state.bookings,
                isLoading: true
            };
        case 'RECEIVE_BOOKINGS':
            return {
                bookings: action.tempbookings,
                isLoading: false
            };
        case 'ADD_BOOKINGS':
            {
                var newBookings = tempbookings;
                newBookings.push({
                    bookingId: action.booking.bookingId,
                    bookingDate: action.booking.bookingDate,
                    meetingDate: action.booking.meetingDate,
                    meetingTime: action.booking.meetingTime,
                    employeeId: action.booking.employeeId,
                    roomId: action.booking.roomId,
                    additionalEquipment: action.booking.additionalEquipment,
                    requiredLayout: action.booking.requiredLayout
                });

                return {
                    bookings: newBookings,
                    isLoading: false
                };
            }
        default:
            return unloadedState;
    }
};
