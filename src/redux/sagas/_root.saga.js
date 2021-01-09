import { all } from 'redux-saga/effects';
import autocompleteSaga from './autocomplete.saga';
import logoSaga from './logo'

export default function* rootSaga() {
    yield all([
        logoSaga(),
        autocompleteSaga(),
    ])
}