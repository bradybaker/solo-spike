import { all } from 'redux-saga/effects';
import logoSaga from './logo'

export default function* rootSaga() {
    yield all([
        logoSaga()
    ])
}