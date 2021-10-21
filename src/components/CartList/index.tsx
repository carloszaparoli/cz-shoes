import React from 'react';
import { mdiArrowLeft, mdiDelete, mdiMinus, mdiPlus } from '@mdi/js';
import Icon from '@mdi/react';
import { useDispatch, useSelector } from 'react-redux';

import { Link, useHistory } from 'react-router-dom';
import { Colors } from '../../config/colors';
import { ApplicationState } from '../../store/modules/rootReducer';
import {
  StyledAmountItem,
  StyledCartList,
  StyledCartTotal,
  StyledDataItem,
  StyledGridTotal,
  StyledLabel,
  StyledTotalItem,
} from './styles';
import * as CartActions from '../../store/modules/cart/actions';

export function CartList() {
  const dispactch = useDispatch();
  const history = useHistory();

  const cartItems = useSelector(
    (state: ApplicationState) => state.cart.products
  );

  const totalValueCart = useSelector(
    (state: ApplicationState) => state.cart.total
  );

  function checkout() {
    dispactch(CartActions.cleanCart());
    history.push('/success');
  }

  return (
    <>
      {cartItems.length > 0 ? (
        <>
          <StyledCartList>
            {cartItems.map((item) => (
              <li key={item.product.id}>
                <img src={item.product.image} alt={item.product.name} />
                <StyledDataItem>
                  <StyledLabel>Produto</StyledLabel>
                  <p>{item.product.name}</p>
                  <del>{item.product.priceAsString}</del>
                  <span>{item.product.discountPriceAsString}</span>
                </StyledDataItem>

                <StyledAmountItem>
                  <StyledLabel>Quantidade</StyledLabel>
                  <div>
                    <button
                      type="button"
                      disabled={item.amount <= 1}
                      onClick={() =>
                        dispactch(
                          CartActions.decrementAmount({ data: item.product.id })
                        )
                      }
                    >
                      <Icon path={mdiMinus} size="1rem" color={Colors.white} />
                    </button>
                    <span>{item.amount}</span>
                    <button
                      type="button"
                      onClick={() =>
                        dispactch(
                          CartActions.incrementAmount({ data: item.product.id })
                        )
                      }
                      disabled={item.amount >= item.product.inventory}
                    >
                      <Icon path={mdiPlus} size="1rem" color="none" />
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      dispactch(
                        CartActions.removeToCart({ data: item.product.id })
                      )
                    }
                  >
                    <Icon path={mdiDelete} size="1.25rem" color="none" />
                    Remover
                  </button>
                </StyledAmountItem>
                <StyledTotalItem>
                  <StyledLabel>Valor Total</StyledLabel>
                  <span>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(item.product.discountPrice * item.amount)}
                  </span>
                </StyledTotalItem>
              </li>
            ))}
          </StyledCartList>
          <StyledCartTotal>
            <StyledGridTotal>
              <span>Valor da Compra:</span>
              <strong>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(totalValueCart)}
              </strong>
            </StyledGridTotal>
            <div>
              <Link to="/">
                <Icon path={mdiArrowLeft} size="1.25rem" color="none" />
                Continuar Comprando
              </Link>
              <button type="button" onClick={() => checkout()}>
                Finalizar Compra
              </button>
            </div>
          </StyledCartTotal>
        </>
      ) : (
        <p>Seu carrinho está vazio.</p>
      )}
    </>
  );
}
