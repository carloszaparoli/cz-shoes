/**
 * Action types
 */
export enum CartTypes {
  ADD_TO_CART = '@cart/ADD_TO_CART',
  REMOVE_TO_CART = '@cart/REMOVE_TO_CART',
  INCREMENT_AMOUNT = '@cart/INCREMENT_AMOUNT',
  DECREMENT_AMOUNT = '@cart/DECREMENT_AMOUNT',
  CLEAN_CART = '@cart/CLEAN_CART',
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

export interface CartItem {
  product: Product;
  amount: number;
}

/**
 * State type
 */
export interface CartState {
  readonly products: CartItem[];
  readonly total: number;
}

export interface AddToCartPayload {
  data: CartItem;
}

export interface RemoveToCartPayload {
  data: number;
}

export interface DecrementAmountPayload {
  data: number;
}

export interface IncrementAmountPayload {
  data: number;
}

export interface AddToCart {
  type: typeof CartTypes.ADD_TO_CART;
  payload: AddToCartPayload;
}

export interface RemoveToCart {
  type: typeof CartTypes.REMOVE_TO_CART;
  payload: RemoveToCartPayload;
}

export interface IncrementAmount {
  type: typeof CartTypes.INCREMENT_AMOUNT;
  payload: IncrementAmountPayload;
}

export interface DecrementAmount {
  type: typeof CartTypes.DECREMENT_AMOUNT;
  payload: DecrementAmountPayload;
}

export interface CleanCart {
  type: typeof CartTypes.CLEAN_CART;
}

export type CartActions =
  | AddToCart
  | RemoveToCart
  | IncrementAmount
  | DecrementAmount
  | CleanCart;
