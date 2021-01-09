import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getBrand() {
    try {
        let response = yield axios.get('/api/logo')
        yield put({ type: 'SET_BRANDS', payload: response.data })
    } catch (error) {
        console.log('Error in getBrand', error)
    }
}

function* brandSaga() {
    yield takeLatest('FETCH_BRANDS', getBrand)
}

export default brandSaga;