import React from 'react';

import { CartList } from '../../components/CartList';
import { Container, Title } from '../../styles/GlobalStyle';

export default function Cart() {
  return (
    <Container>
      <Title>Meu Carrinho</Title>
      <CartList />
    </Container>
  );
}
