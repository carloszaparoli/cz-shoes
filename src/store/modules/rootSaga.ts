import { all } from 'redux-saga/effects';

import products from './products/sagas';
import cart from './cart/sagas';

export default function* rootSaga() {
  yield all([products, cart]);
}
