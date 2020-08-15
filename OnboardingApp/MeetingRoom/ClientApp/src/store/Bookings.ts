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
    bookings: Booking[];
}

interface AddBookingsAction {
    type: 'ADD_BOOKINGS';
    booking: Booking;
}

interface UpdateBookingAction {
    type: 'UPDATE_BOOKING';
    booking: Booking;
}

interface DeleteBookingAction {
    type: 'DELETE_BOOKING';
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).

type KnownAction = RequestBookingsAction | ReceiveBookingsAction | AddBookingsAction | UpdateBookingAction | DeleteBookingAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestBookings: (): AppThunkAction<KnownAction> => async (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.bookings && appState.bookings.bookings.length == 0) {

            const response = await fetch(`api/Booking/GetBookings`);
            const bookings = await response.json();

            dispatch({ type: 'RECEIVE_BOOKINGS', bookings });

        }
        dispatch({ type: 'REQUEST_BOOKINGS' });
    },

    addBooking: (booking: Booking): AppThunkAction<KnownAction> => (dispatch, getState) => {

        const appState = getState();

        fetch(`api/Booking/AddBooking`, {
            method: 'POST',

            body: JSON.stringify(booking),
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
                dispatch({ type: 'ADD_BOOKINGS', booking });
            });

    },

    updateBooking: (booking: Booking): AppThunkAction<KnownAction> => (dispatch, getState) => {

        const appState = getState();

        fetch(`api/Booking/UpdateBooking/${booking.bookingId}`, {
            method: 'PUT',

            body: JSON.stringify(booking),
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
                dispatch({ type: 'UPDATE_BOOKING', booking });
            });

    },

    deleteBooking: (bookingId: string): AppThunkAction<KnownAction> => (dispatch, getState) => {

        const appState = getState();

        fetch(`api/Booking/DeleteBooking/${bookingId}`, {
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
                dispatch({ type: 'DELETE_BOOKING' });
            });
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
                bookings: action.bookings,
                isLoading: false
            };
        case 'ADD_BOOKINGS':
            return {
                bookings: state.bookings,
                isLoading: false
            };
        case 'UPDATE_BOOKING':
            return {
                bookings: state.bookings,
                isLoading: false
            }
        case 'DELETE_BOOKING':
            return {
                bookings: state.bookings,
                isLoading: false
            }
        default:
            return unloadedState;
    }
};
