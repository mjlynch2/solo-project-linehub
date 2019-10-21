import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "INGREDIENT" actions
function* getIngredient() {
    try {
        const response = yield axios.get('/api/ingredient');
        yield put({ type: 'SET_INGREDIENT', payload: response.data })
    } catch (error) {
        console.log('Error getting all ingredients:', error);
    }
}

function* getIngredientForDish(action) {
    try {
        const response = yield axios.get(`/api/ingredient/${action.id}`);
        yield put({ type: 'SET_INGREDIENT_FOR_DISH', payload: response.data })
    } catch (error) {
        console.log('Error getting ingredient for dish:', error);
    }
}

function* addIngredient(action) {
    try {
        yield axios.post(`/api/ingredient`, {name: action.payload});
        yield getIngredient();
    } catch (error) {
        
    }
}

function* ingredientSaga() {
    yield takeLatest('GET_INGREDIENT', getIngredient);
    yield takeLatest('GET_INGREDIENT_FOR_DISH', getIngredientForDish);
    yield takeLatest('ADD_INGREDIENT', addIngredient);
}

export default ingredientSaga;