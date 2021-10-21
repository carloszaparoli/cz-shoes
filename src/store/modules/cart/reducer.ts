import { CartActions, CartState, CartTypes } from './types';

const INITIAL_STATE: CartState = {
  products: [],
  total: 0,
};

export default (state = INITIAL_STATE, action: CartActions): CartState => {
  switch (action.type) {
    case CartTypes.ADD_TO_CART: {
      const newState = { ...state };
      let check = false;

      if (newState.products.length === 0) {
        newState.products = [...newState.products, action.payload.data];
        newState.total += action.payload.data.product.discountPrice;
        return newState;
      }

      newState.products = newState.products.map((item) => {
        if (item.product.id === action.payload.data.product.id) {
          check = true;
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      newState.total += action.payload.data.product.discountPrice;
      if (!check) {
        newState.products = [...newState.products, action.payload.data];
      }

      return newState;
    }

    case CartTypes.REMOVE_TO_CART: {
      const newState = { ...state };

      newState.products.map((item, index) => {
        if (item.product.id === action.payload.data) {
          newState.products = [
            ...newState.products.slice(0, index),
            ...newState.products.slice(index + 1),
          ];
          newState.total -= item.amount * item.product.discountPrice;
        }
        return newState;
      });
      return newState;
    }

    case CartTypes.INCREMENT_AMOUNT: {
      const newState = { ...state };

      newState.products.map((item, index) => {
        if (item.product.id === action.payload.data) {
          newState.products[index].amount += 1;
          newState.total += item.product.discountPrice;
        }
        return newState;
      });
      return newState;
    }

    case CartTypes.DECREMENT_AMOUNT: {
      const newState = { ...state };

      newState.products.map((item, index) => {
        if (item.product.id === action.payload.data) {
          newState.products[index].amount -= 1;
          newState.total -= item.product.discountPrice;
        }
        return newState;
      });
      return newState;
    }

    case CartTypes.CLEAN_CART: {
      return INITIAL_STATE;
    }

    default:
      return state;
  }
};
