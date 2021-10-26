import { all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { CartTypes } from './types';

function addToCart() {
  toast.success('Produto adicionado ao carrinho.');
}

function removeToCart() {
  toast.success('Produto removido do carrinho.');
}

export default all([
  takeLatest(CartTypes.ADD_TO_CART, addToCart),
  takeLatest(CartTypes.REMOVE_TO_CART, removeToCart),
]);
