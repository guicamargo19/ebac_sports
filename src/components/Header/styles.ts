import styled from 'styled-components'
import { cores } from '../../styles'

export const Header = styled.header`
  background-image: linear-gradient(
    45deg,
    ${cores.corPrincipal},
    ${cores.corSecundaria}
  );
  padding: 26px 40px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;

  h1 {
    font-size: 32px;
    flex: 1;

    a {
      color: ${cores.corFundo};
      text-decoration: none;
      transition: all ease-in-out 0.2s;

      &:hover {
        opacity: 50%;
        transition: all ease-in-out 0.2s;
      }
    }
  }

  div {
    display: flex;
    align-items: center;

    img {
      width: 18px;
      margin-right: 8px;
      margin-left: 16px;
    }

    span {
      color: ${cores.corFundo};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    h1 {
      font-size: 28px;
    }

    div {
      margin-top: 20px;

      span {
        font-size: 12px;
      }
    }
  }
`
