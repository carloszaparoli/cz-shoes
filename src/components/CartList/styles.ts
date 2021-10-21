import styled from 'styled-components';
import { Colors } from '../../config/colors';

export const StyledLabel = styled.label`
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.5rem;

  color: ${Colors.grey500};
`;

export const StyledCartList = styled.ul`
  li {
    display: grid;
    grid-template-columns: 5.5rem 1fr;
    gap: 1rem;

    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${Colors.grey150};

    &:last-child {
      margin-bottom: 0;
      border-bottom: 0;
    }

    img {
      width: 5.5rem;
      margin-top: 1.125rem;
      border-radius: 0.25rem;
    }
  }
`;

export const StyledCartData = styled.div`
  display: grid;
  grid-template-columns: 1fr 20rem;
  gap: 1rem;

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledWrapperAmountTotal = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 640px) {
    margin-top: 1rem;
  }
`;

export const StyledDataItem = styled.div`
  display: flex;
  flex-direction: column;

  label {
    text-align: left;
  }

  p,
  del {
    margin-bottom: 0.5rem;
  }

  del {
    color: ${Colors.grey200};
  }

  span {
    font-weight: 600;
  }
`;

export const StyledAmountItem = styled.div`
  label {
    text-align: center;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 2rem;
      width: 3rem;
      border: 1px solid ${Colors.grey150};
      border-right: 0;
      border-left: 0;
    }

    button {
      width: 2rem;
      height: 2rem;
      font-size: 0;

      border: 1px solid ${Colors.green400};
      border-radius: 0.25rem 0 0 0.25rem;
      background: transparent;

      transition: background 0.2s;

      svg {
        path {
          fill: ${Colors.green400} !important;
        }
      }

      &:hover {
        background: ${Colors.green400};
        svg {
          path {
            transition: fill 0.2s;
            fill: ${Colors.white} !important;
          }
        }
      }

      &:disabled {
        cursor: default;
        opacity: 0.7;
        background: ${Colors.grey150};
        border-color: ${Colors.grey200};

        svg {
          path {
            fill: ${Colors.grey300} !important;
          }
        }
      }

      &:last-child {
        border-radius: 0 0.25rem 0.25rem 0;
      }
    }
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 2rem;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;

    border: 0;
    margin: 0 auto;

    background: none;
    color: ${Colors.red200};
    transition: opacity 0.2s;

    svg {
      margin-right: 0.25rem;
      path {
        fill: ${Colors.red200} !important;
      }
    }

    &:hover {
      opacity: 0.6;
    }
  }

  @media (max-width: 640px) {
    label {
      text-align: left;
    }
  }
`;

export const StyledTotalItem = styled.div`
  label {
    text-align: right;
  }

  span {
    display: block;
    text-align: right;
    font-weight: 600;
  }
`;

export const StyledCartTotal = styled.div`
  padding: 1.5rem;
  border-radius: 0.25rem;

  background: ${Colors.grey150};

  div:last-child {
    display: flex;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;

      border: 0;
      border-radius: 0.25rem;
      font-weight: 500;

      svg {
        margin-right: 0.25rem;
        path {
          fill: ${Colors.grey300} !important;
        }
      }

      &:hover {
        text-decoration: underline;
      }
    }

    button {
      height: 3rem;
      border: 0;
      border-radius: 0.25rem;
      font-weight: bold;
      padding: 0 2rem;
      display: block;

      transition: background 0.2s;

      background: ${Colors.green400};
      color: ${Colors.white};

      &:hover {
        background: ${Colors.green600};
      }
    }
  }

  @media (max-width: 560px) {
    div:last-child {
      flex-direction: column-reverse;
      align-items: center;

      button {
        width: 100%;
        margin-bottom: 1.5rem;
      }
    }
  }
`;

export const StyledGridTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 50%;
  margin-left: auto;
  margin-bottom: 1.25rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${Colors.grey200};

  span,
  strong {
    font-size: 1.25rem;
  }

  span {
    font-weight: 500;
  }

  strong {
    color: ${Colors.grey800};
    font-weight: 600;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
