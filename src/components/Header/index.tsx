import React from 'react';
import { mdiCartOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { Colors } from '../../config/colors';
import { Container } from '../../styles/GlobalStyle';

import { StyledHeader, StyledMiniCart } from './styles';
import { ApplicationState } from '../../store/modules/rootReducer';

export function Header() {
  const cart = useSelector((state: ApplicationState) => state.cart.products);

  return (
    <StyledHeader>
      <Container>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="CZ Shoes" />
        </Link>
        <StyledMiniCart to="/cart">
          <Icon path={mdiCartOutline} size="2rem" color={Colors.white} />
          <span>{cart.length}</span>
        </StyledMiniCart>
      </Container>
    </StyledHeader>
  );
}
