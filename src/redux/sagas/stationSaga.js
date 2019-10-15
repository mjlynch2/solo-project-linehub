import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "STATION" actions
function* getStations() {
    try {
        const response = yield axios.get('/api/station');
        yield put({ type: 'SET_STATIONS', payload: response.data})
    } catch (error) {
        console.log('Error getting stations:', error);
    }
}

function* stationSaga() {
    yield takeLatest('GET_STATIONS', getStations);
}

export default stationSaga;
