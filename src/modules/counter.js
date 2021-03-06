import {delay, put, takeEvery, takeLatest} from 'redux-saga/effects'

// action type
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const INCREASE_ASYNC = 'INCREASE_ASYNC';
const DECREASE_ASYNC = 'DECREASE_ASYNC';

// action creator
export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});

/*
// thunk 함수
export const increaseAsync = () => dispatch => {
    setTimeout(() => dispatch(increase()), 1000);
}

export const decreaseAsync = () => dispatch => {
    setTimeout(() => dispatch(decrease()), 1000);
}
*/

export const increaseAsync = () => ({type: INCREASE_ASYNC});
export const decreaseAsync = () => ({type: DECREASE_ASYNC});

// saga 함수
function* increaseSaga() {
    yield delay(1000);
    yield put(increase());
}

function* decreaseSaga() {
    yield delay(1000);
    yield put(decrease());
}

export function* counterSaga() {
    yield takeEvery(INCREASE_ASYNC, increaseSaga);
    yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

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