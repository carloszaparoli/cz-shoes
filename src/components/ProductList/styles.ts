import styled from 'styled-components';
import { Colors } from '../../config/colors';

export const StyledProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;

  > li {
    padding: 1.5rem;
    border: 1px solid ${Colors.grey150};
    border-radius: 0.5rem;
    background: ${Colors.white};

    p,
    ul,
    del,
    strong {
      margin-bottom: 0.25rem;
    }

    img {
      display: block;
      width: 15rem;
      height: 15rem;
      margin: 0 auto 0.25rem auto;
    }

    strong,
    del {
      display: block;
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > span {
        font-size: 0.875rem;
        font-weight: 500;

        span {
          font-weight: 600;
          font-size: 1rem;
          margin-left: 0.25rem;
        }
      }

      strong {
        font-size: 1.5rem;
        color: ${Colors.grey500};
      }
    }

    button {
      height: 3rem;
      width: 100%;
      border: 0;
      border-radius: 0.25rem;
      font-weight: bold;
      margin-top: 0.5rem;

      display: flex;
      justify-content: center;
      align-items: center;

      transition: background 0.2s;

      background: ${Colors.green400};
      color: ${Colors.white};

      svg {
        margin-right: 0.25rem;
      }

      &:hover {
        background: ${Colors.green600};
      }

      &:disabled {
        cursor: default;
        background: ${Colors.grey150};
        color: ${Colors.grey300};
      }
    }
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledRateList = styled.ul`
  display: flex;

  li {
    margin-right: 0.25rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;
