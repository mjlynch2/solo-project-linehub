import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "MENU" actions
function* getMenu() {
    try {
        const response = yield axios.get('/api/menu');
        yield put({ type: 'SET_MENU', payload: response.data })
    } catch (error) {
        console.log('Error getting stations:', error);
    }
}

function* menuSaga() {
    yield takeLatest('GET_MENU', getMenu);
}

export default menuSaga;