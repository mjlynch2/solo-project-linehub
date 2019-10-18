import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "STATION" actions
function* getPreplist(action) {
    try {
        const response = yield axios.get(`/api/preplist/${action.payload.user_id}`);
        yield put({ type: 'SET_PREPLIST', payload: response.data })
    } catch (error) {
        console.log('Error getting preplist:', error);
    }
}

function* addToPreplist(action) {
    try {
        yield axios.post(`/api/preplist`, action.payload);
        yield getPreplist(action);
    } catch (error) {
        console.log('Error adding item to preplist:', error);
    }
}

function* removeFromPreplist(action) {
    try {
        yield axios.delete(`/api/preplist`, action.payload);
        yield getPreplist(action);
    } catch (error) {
        console.log('Error deleteing item from preplist:', error);
    }
}

function* updatePreplist(action) {
    try {
        yield axios.put(`/api/preplist`, action.payload);
        yield getPreplist(action);
    } catch (error) {
        console.log('Error updating preplist:', error);
    }
}

function* preplistSaga() {
    yield takeLatest('GET_PREPLIST', getPreplist);
    yield takeLatest('ADD_TO_PREPLIST', addToPreplist);
    yield takeLatest('REMOVE_FROM_PREPLIST', removeFromPreplist);
    yield takeLatest('UPDATE_PREPLIST', updatePreplist);
}

export default preplistSaga;