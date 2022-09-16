import { call, takeLatest, put } from 'redux-saga/effects';
import { getPosts } from '../slices/getPostsSlice';
import { fetchTokenSaga } from './fetchTokenSaga';
import { getPostsSaga } from './getPostsSaga';

import { sagaActions } from './sagaActions';

export default function* rootSaga() {
  yield takeLatest(getPosts.type, getPostsSaga);
}
