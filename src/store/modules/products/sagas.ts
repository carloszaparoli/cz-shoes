import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { api } from '../../../services/api';
import { loadFailure, loadSuccess } from './actions';
import { Product, ProductsTypes } from './types';

const getProducts = () => api.get<Product[]>('/products');

function* loadProducts() {
  try {
    const response: AxiosResponse<Product[]> = yield call(getProducts);
    const data = response.data.map((product) => {
      const dataItem: Product = {
        id: product.id,
        name: product.name,
        image: product.image,
        rate: product.rate,
        price: product.price,
        discountPrice: product.discountPrice,
        inventory: product.inventory,
        priceAsString: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(product.price),
        discountPriceAsString: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(product.discountPrice),
      };

      return dataItem;
    });

    yield put(
      loadSuccess({
        data,
      })
    );
  } catch {
    toast.error('Erro ao obter produtos.');
    yield put(loadFailure());
  }
}

export default all([takeLatest(ProductsTypes.LOAD_REQUEST, loadProducts)]);
