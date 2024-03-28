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
    font-size: 26px;
    flex: 1;
    font-style: italic;
    color: ${cores.corFundo};
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

    div {
      margin-top: 16px;
    }
  }
`
