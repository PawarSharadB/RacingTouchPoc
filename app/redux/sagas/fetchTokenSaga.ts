import { call, put } from 'redux-saga/effects';
import Axios from 'axios';
import { sagaActions } from './sagaActions';
import { fetchTokenData } from '../slices/tokenDataSlice';

let callAPI = async ({ url, method, data }) => {
  return await Axios({
    url,
    method,
    data,
  });
};

export function* fetchTokenSaga() {
  try {
    let result = yield call(() =>
      callAPI({ url: 'https://5ce2c23be3ced20014d35e3d.mockapi.io/api/todos' }),
    );
    yield put(fetchTokenData(result.data));
  } catch (e) {
    yield put({ type: sagaActions.FETCH_TOKEN_SAGA_FAILED });
  }
}
