import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const persistConfig = {
  key: 'CZSHOES',
  storage,
  whitelist: ['cart'],
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistReducer(persistConfig, rootReducer),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
