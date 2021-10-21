import { combineReducers } from 'redux';

import productsReducer from './products/reducer';
import cartReducer from './cart/reducer';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export default rootReducer;
