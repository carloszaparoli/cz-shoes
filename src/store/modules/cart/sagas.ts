// eslint-disable-next-line import/no-extraneous-dependencies
import { all, takeLatest } from '@redux-saga/core/effects';
import { toast } from 'react-toastify';
import { AddToCart, CartTypes, DecrementAmount, RemoveToCart } from './types';

function addToCart({ payload }: AddToCart) {
  toast.success('Produto adicionado ao carrinho.');
}

function removeToCart({ payload }: RemoveToCart) {
  toast.success('Produto removido do carrinho.');
}

function decrementAmount({ payload }: DecrementAmount) {
  // toast.success('teste');
}

export default all([
  takeLatest(CartTypes.ADD_TO_CART, addToCart),
  takeLatest(CartTypes.REMOVE_TO_CART, removeToCart),
  takeLatest(CartTypes.DECREMENT_AMOUNT, decrementAmount),
]);
