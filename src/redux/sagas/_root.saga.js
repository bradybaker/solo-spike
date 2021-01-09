import { all } from 'redux-saga/effects';
import autocompleteSaga from './autocomplete.saga';
import brandSaga from './getBrands';
import logoSaga from './logo'

export default function* rootSaga() {
    yield all([
        logoSaga(),
        autocompleteSaga(),
        brandSaga(),
    ])
}