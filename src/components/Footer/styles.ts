import styled from 'styled-components'
import { cores } from '../../styles'

export const Footer = styled.footer`
  background-image: linear-gradient(
    45deg,
    ${cores.corPrincipal},
    ${cores.corSecundaria}
  );
  padding: 40px;
  margin-top: 40px;
  text-align: center;

  p {
    color: ${cores.corFundo};

    a {
      text-decoration: none;
      transition: all ease-in-out 0.2s;

      strong {
        color: ${cores.corFundo} !important;
      }

      &:hover {
        opacity: 50%;
        transition: all ease-in-out 0.2s;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 14px;

    div {
      margin-top: 16px;
    }
  }
`
