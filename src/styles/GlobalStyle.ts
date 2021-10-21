import styled, { createGlobalStyle } from 'styled-components';
import { Colors } from '../config/colors';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${Colors.grey100};
    color: ${Colors.grey300};
  }

  body, input, textarea, select, button {
    font: 400 1rem "Montserrat", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  body .Toastify__toast {
    font-family: "Montserrat", sans-serif;
    font-size: 0.875rem;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${Colors.green400};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${Colors.red200};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--warning {
    background: ${Colors.yellow200};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--info {
    background: ${Colors.blue200};
  }

  @media(max-width: 1080px) {
    html {
        font-size: 93.75%; // 15px
    }
  }

  @media(max-width: 720px) {
    html {
        font-size: 87.5%; // 14px
    }
  }
`;

export const Content = styled.main`
  padding: 2rem 0;
`;

export const Container = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  height: 100%;

  @media (max-width: 64rem) {
    padding: 0 1rem;
  }
`;

export const Title = styled.h1`
  color: ${Colors.grey800};
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${Colors.grey150};
`;
