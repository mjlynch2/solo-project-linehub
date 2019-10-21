import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "MENU" actions
function* getMenu() {
    try {
        const response = yield axios.get('/api/menu');
        yield put({ type: 'SET_MENU', payload: response.data })
    } catch (error) {
        console.log('Error getting menu:', error);
    }
}

function* getMenuForStation(action) {
    try {
        const response = yield axios.get(`/api/menu/${action.id}`);
        yield put({type: 'SET_MENU_FOR_STATION', payload: response.data})
    } catch (error) {
        console.log('Error getting menu for station:', error);
    }
}

function* updateMenu(action) {
    try {
        yield axios.put(`/api/menu/${action.id}`, { dish_name: action.payload });
        yield getMenu();
    } catch (error) {
        console.log('Error updating menu:', error)
    }
}

function* menuSaga() {
    yield takeLatest('GET_MENU', getMenu);
    yield takeLatest('GET_MENU_FOR_STATION', getMenuForStation);
    yield takeLatest('UPDATE_MENU', updateMenu);

}

export default menuSaga;