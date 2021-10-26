import { mdiCloseThick, mdiPlusThick, mdiStar } from '@mdi/js';
import Icon from '@mdi/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as CartActions from '../../store/modules/cart/actions';
import * as ProductActions from '../../store/modules/products/actions';
import { Colors } from '../../config/colors';
import { StyledProductList, StyledRateList } from './styles';
import { ApplicationState } from '../../store/modules/rootReducer';

export function ProductList() {
  const dispatch = useDispatch();

  const products = useSelector(
    (state: ApplicationState) => state.products.data
  );

  const cartItems = useSelector(
    (state: ApplicationState) => state.cart.products
  );

  useEffect(() => {
    dispatch(ProductActions.loadRequest());
  }, [dispatch]);

  function checkStock(id: number): number {
    let quantityStock = 0;
    cartItems.map((item) => {
      if (item.product.id === id) {
        quantityStock = item.amount;
      }
      return quantityStock;
    });
    return quantityStock;
  }

  function productIsAvailable(
    productId: number,
    productInventory: number
  ): boolean {
    if (checkStock(productId) === productInventory) {
      return false;
    }
    return true;
  }

  return (
    <StyledProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.name} />
          <p>{product.name}</p>
          <StyledRateList>
            <li>
              <Icon
                path={mdiStar}
                size="1.25rem"
                color={product.rate >= 1 ? Colors.yellow500 : Colors.grey200}
              />
            </li>
            <li>
              <Icon
                path={mdiStar}
                size="1.25rem"
                color={product.rate >= 2 ? Colors.yellow500 : Colors.grey200}
              />
            </li>
            <li>
              <Icon
                path={mdiStar}
                size="1.25rem"
                color={product.rate >= 3 ? Colors.yellow500 : Colors.grey200}
              />
            </li>
            <li>
              <Icon
                path={mdiStar}
                size="1.25rem"
                color={product.rate >= 4 ? Colors.yellow500 : Colors.grey200}
              />
            </li>
            <li>
              <Icon
                path={mdiStar}
                size="1.25rem"
                color={product.rate >= 5 ? Colors.yellow500 : Colors.grey200}
              />
            </li>
          </StyledRateList>
          <del>{product.priceAsString}</del>
          <div>
            <strong>{product.discountPriceAsString}</strong>
            {productIsAvailable(product.id, product.inventory) && (
              <span>
                Restam:
                <span>{product.inventory - checkStock(product.id)} un.</span>
              </span>
            )}
          </div>
          {productIsAvailable(product.id, product.inventory) ? (
            <button
              type="button"
              onClick={() =>
                dispatch(CartActions.addCart({ data: { product, amount: 1 } }))
              }
              disabled={checkStock(product.id) === product.inventory}
            >
              <Icon path={mdiPlusThick} size="1.25rem" />
              Adicionar
            </button>
          ) : (
            <button
              type="button"
              onClick={() =>
                dispatch(CartActions.addCart({ data: { product, amount: 1 } }))
              }
              disabled={checkStock(product.id) === product.inventory}
            >
              <Icon path={mdiCloseThick} size="1.25rem" />
              Produto indisponível
            </button>
          )}
        </li>
      ))}
    </StyledProductList>
  );
}
