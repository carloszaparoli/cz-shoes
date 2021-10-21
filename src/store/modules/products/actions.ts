import {
  LoadProductFailure,
  LoadProductRequest,
  LoadProductSuccess,
  LoadProductSuccessPayload,
  ProductsTypes,
} from './types';

export function loadRequest(): LoadProductRequest {
  return {
    type: ProductsTypes.LOAD_REQUEST,
  };
}

export function loadSuccess(
  payload: LoadProductSuccessPayload
): LoadProductSuccess {
  return {
    type: ProductsTypes.LOAD_SUCCESS,
    payload,
  };
}

export function loadFailure(): LoadProductFailure {
  return {
    type: ProductsTypes.LOAD_FAILURE,
  };
}
