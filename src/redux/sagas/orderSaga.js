import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "STATION" actions
function* getOrder() {
    try {
        const response = yield axios.get('/api/order');
        yield put({ type: 'SET_ORDER', payload: response.data })
    } catch (error) {
        console.log('Error getting orders:', error);
    }
}

function* getOrderForToday() {
    try {
        const response = yield axios.get('/api/order/today');
        yield put({ type: 'SET_ORDER_FOR_TODAY', payload: response.data })
    } catch (error) {
        console.log('Error getting orders:', error);
    }
}

function* addOrder(action) {
    try {
        yield axios.post(`/api/order`, action.payload);
        yield getOrder();
    } catch (error) {
        console.log('Error adding order:', error);
    }
}

function* orderSaga() {
    yield takeLatest('GET_ORDER', getOrder);
    yield takeLatest('ADD_ORDER', addOrder);
    yield takeLatest('GET_ORDER_TODAY', getOrderForToday);
}

export default orderSaga;