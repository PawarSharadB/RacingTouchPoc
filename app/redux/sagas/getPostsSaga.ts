import { all, call, put } from 'redux-saga/effects';
import Axios from 'axios';
import { sagaActions } from './sagaActions';
import { setPosts } from '../slices/getPostsSlice';

const URL = 'https://jsonplaceholder.typicode.com/';

async function fetchPosts() {
  const response = await Axios.get(`${URL}posts?_start=0&_limit=5`);
  return response.data;
}

async function fetchComments() {
  const response = await Axios.get(`${URL}comments?_start=0&_limit=5`);
  return response.data;
}

async function fetchAlbums() {
  const response = await Axios.get(`${URL}albums?_start=0&_limit=5`);
  return response.data;
}

async function fetchPhotos() {
  const response = await Axios.get(`${URL}photos?_start=0&_limit=5`);
  return response.data;
}

async function fetchTodos() {
  const response = await Axios.get(`${URL}todos?_start=0&_limit=5`);
  return response.data;
}

async function fetchUsers() {
  const response = await Axios.get(`${URL}users?_start=0&_limit=5`);
  return response.data;
}

export function* getPostsSaga() {
  try {
    //let result = yield call(fetchPosts);
    const [posts, comments, albums, photos, todos, users] = yield all([
      call(fetchPosts),
      call(fetchComments),
      call(fetchAlbums),
      call(fetchPhotos),
      call(fetchTodos),
      call(fetchUsers),
    ]);
    yield put(setPosts({ posts, comments, albums, photos, todos, users }));
  } catch (e) {
    yield put({ type: sagaActions.FETCH_TOKEN_SAGA_FAILED });
  }
}
