import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import saga from './saga';
import { fetchTokenData } from './slices/tokenDataSlice';

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    todo: fetchTokenData.reducer,
  },
  middleware,
});

sagaMiddleware.run(saga);

export default store;
