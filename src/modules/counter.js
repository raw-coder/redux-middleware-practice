// action type
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// action creator
export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});

// initial state
const initialState = 0;

// reducer
export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
}