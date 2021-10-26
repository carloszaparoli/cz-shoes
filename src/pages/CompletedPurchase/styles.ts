import styled from 'styled-components';
import { Colors } from '../../config/colors';

export const StyledCompletedPurchase = styled.div`
  text-align: center;

  svg {
    margin-bottom: 2rem;
    width: 6.25rem;
    height: 6.25rem;
  }

  h1 {
    margin-bottom: 0.5rem;
    color: ${Colors.grey800};
  }

  p {
    margin-bottom: 2rem;
  }

  a {
    display: inline-block;
    height: 3rem;
    line-height: 3rem;
    padding: 0 3rem;
    font-weight: bold;
    border-radius: 0.25rem;
    transition: background 0.2s;

    background: ${Colors.green400};
    color: ${Colors.white};

    &:hover {
      background: ${Colors.green600};
    }
  }
`;
