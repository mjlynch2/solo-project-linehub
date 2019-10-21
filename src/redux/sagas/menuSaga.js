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

function* addMenuItem(action) {
    try {
        yield axios.post(`/api/menu`, {dish_name: action.name});
        const response = yield axios.get('/api/menu')
        const id = response.data[response.data.length-1].id;
        yield axios.post(`/api/menu/menu-ingredient/${id}`, action.payload)
    } catch (error) {
        console.log('Error adding menu item:', error)
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

function* deleteMenu(action) {
    try {
        yield axios.delete(`/api/menu/${action.id}`);
        yield getMenu();
    } catch (error) {
        console.log('Error deleting menu item:', error)
    }
}

function* menuSaga() {
    yield takeLatest('GET_MENU', getMenu);
    yield takeLatest('GET_MENU_FOR_STATION', getMenuForStation);
    yield takeLatest('UPDATE_MENU', updateMenu);
    yield takeLatest('DELETE_MENU', deleteMenu);
    yield takeLatest('ADD_MENU_ITEM', addMenuItem);
}

export default menuSaga;