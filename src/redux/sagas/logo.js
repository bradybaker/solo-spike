import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchLogo(action) {
    try {
        const response = yield axios.get(`https://logo.clearbit.com/${action.payload}.com`)
        console.log('This is response', response)
        yield put({ type: 'SET_LOGO', payload: response })
    } catch (error) {
        console.log('Error in logoSaga', error)
    }
}

function* logoSaga() {
    yield takeLatest('FETCH_LOGO', fetchLogo)
}

export default logoSaga;