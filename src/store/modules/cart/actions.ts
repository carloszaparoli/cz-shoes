import {
  CartTypes,
  AddToCart,
  AddToCartPayload,
  RemoveToCartPayload,
  RemoveToCart,
  DecrementAmountPayload,
  DecrementAmount,
  IncrementAmountPayload,
  IncrementAmount,
  CleanCart,
} from './types';

export function addCart(payload: AddToCartPayload): AddToCart {
  return {
    type: CartTypes.ADD_TO_CART,
    payload,
  };
}

export function removeToCart(payload: RemoveToCartPayload): RemoveToCart {
  return {
    type: CartTypes.REMOVE_TO_CART,
    payload,
  };
}

export function incrementAmount(
  payload: IncrementAmountPayload
): IncrementAmount {
  return {
    type: CartTypes.INCREMENT_AMOUNT,
    payload,
  };
}

export function decrementAmount(
  payload: DecrementAmountPayload
): DecrementAmount {
  return {
    type: CartTypes.DECREMENT_AMOUNT,
    payload,
  };
}

export function cleanCart(): CleanCart {
  return {
    type: CartTypes.CLEAN_CART,
  };
}
