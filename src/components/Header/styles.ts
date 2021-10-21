import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../config/colors';

export const StyledHeader = styled.header`
  width: 100%;
  height: 4rem;
  background: ${Colors.grey800};

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      height: 2.5rem;
    }
  }
`;

export const StyledMiniCart = styled(Link)`
  position: relative;

  span {
    font-size: 0.875rem;
    font-weight: bold;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;

    position: absolute;
    top: -0.5rem;
    right: -0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${Colors.green400};
    color: ${Colors.white};
  }
`;
