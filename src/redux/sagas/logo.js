import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addBrand(action) {
    try {
        axios.post('/api/logo', action.payload)
        yield put({ type: 'FETCH_BRANDS' })
    } catch (error) {
        console.log('Error in logoSaga', error)
    }
}

function* logoSaga() {
    yield takeLatest('ADD_BRANDS', addBrand)
}

export default logoSaga;