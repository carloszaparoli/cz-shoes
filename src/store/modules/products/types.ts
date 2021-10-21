/**
 * Action types
 */
export enum ProductsTypes {
  LOAD_REQUEST = '@products/LOAD_REQUEST',
  LOAD_SUCCESS = '@products/LOAD_SUCCESS',
  LOAD_FAILURE = '@products/LOAD_FAILURE',
  CHECK_STOCK = '@products/CHECK_STOCK',
  DECREMENT_STOCK = '@products/DECREMENT_STOCK',
}

/**
 * Data types
 */
export interface Product {
  id: number;
  name: string;
  image: string;
  rate: number;
  price: number;
  discountPrice: number;
  inventory: number;
  priceAsString: string;
  discountPriceAsString: string;
}

/**
 * State type
 */
export interface ProductsState {
  readonly data: Product[];
  readonly loading: boolean;
  readonly error: boolean;
}

export interface LoadProductSuccessPayload {
  data: Product[];
}

export interface LoadProductFailurePayload {
  error: boolean;
}

export interface LoadProductRequest {
  type: typeof ProductsTypes.LOAD_REQUEST;
}

export interface LoadProductSuccess {
  type: typeof ProductsTypes.LOAD_SUCCESS;
  payload: LoadProductSuccessPayload;
}

export interface LoadProductFailure {
  type: typeof ProductsTypes.LOAD_FAILURE;
  // payload: LoadRepositoryFailurePayload;
}

export type ProductsActions =
  | LoadProductRequest
  | LoadProductSuccess
  | LoadProductFailure;
