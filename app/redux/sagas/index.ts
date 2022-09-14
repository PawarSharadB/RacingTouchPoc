import { call, takeLatest, put } from 'redux-saga/effects';
import { fetchTokenSaga } from './fetchTokenSaga';
import { sagaActions } from './sagaActions';

export default function* rootSaga() {
  yield takeLatest(sagaActions.FETCH_TOKEN_SAGA, fetchTokenSaga);
}
