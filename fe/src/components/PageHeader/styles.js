import styled from 'styled-components';

export const Container = styled.header`
  margin-bottom: 1.5rem;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }

    img {
      margin-right: 0.5rem;
      transform: rotate(-90deg);
    }
  }

  h1 {
    font-size: 1.5rem;
  }
`;
