import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchSearch(action) {
    try {
        const response = yield axios.get(`https://autocomplete.clearbit.com/v1/companies/suggest?query=${action.payload}`)
        console.log('This is response', response)
        yield put({ type: 'SET_SEARCH', payload: response.data })
    } catch (error) {
        console.log('Error in autocompleteSaga', error)
    }
}

function* autocompleteSaga() {
    yield takeLatest('FETCH_SEARCH', fetchSearch)
}

export default autocompleteSaga;