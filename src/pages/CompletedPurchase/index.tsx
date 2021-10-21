import React from 'react';
import { Link } from 'react-router-dom';
import { Colors } from '../../config/colors';
import { Container } from '../../styles/GlobalStyle';
import { StyledCompletedPurchase } from './styles';

export default function CompletedPurchase() {
  return (
    <Container>
      <StyledCompletedPurchase>
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 0C77.6636 0 100 22.3367 100 50C100 77.6642 77.6636 100 50 100C22.3364 100 0 77.6642 0 50C0 22.3367 22.3364 0 50 0ZM76.2207 26.2207L37.5 64.9251L23.7956 51.2207L17.8874 57.1126L37.5 76.7253L82.1289 32.1126L76.2207 26.2207Z"
            fill={Colors.green400}
          />
        </svg>
        <h1>Compra finalizada</h1>
        <p>A equipe da CZShoes agradece a sua preferência!</p>
        <Link to="/">Ir para a loja</Link>
      </StyledCompletedPurchase>
    </Container>
  );
}
