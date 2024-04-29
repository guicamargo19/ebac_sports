import styled from 'styled-components'

import { cores } from '../../styles'

export const Produto = styled.div``

export const Titulo = styled.h3`
  min-height: 64px;
`

export const Capa = styled.div`
  position: relative;

  img {
    display: block;
    width: 100%;
    margin-bottom: 8px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);
  }
`

export const Prices = styled.div`
  margin: 16px 0;
  color: #fff;

  strong {
    font-size: 16px;
  }
`

export const BtnComprar = styled.button`
  display: block;
  width: 100%;
  background-image: linear-gradient(
    45deg,
    ${cores.corPrincipal},
    ${cores.corSecundaria}
  );
  font-weight: bold;
  font-size: 16px;
  padding: 12px 0;
  text-transform: capitalize;
  color: #eee;
  border: none;
  cursor: pointer;
  margin-bottom: 8px;
  transition: all ease-in-out 0.2s;

  &:hover {
    background-image: linear-gradient(
      -45deg,
      ${cores.corPrincipal},
      ${cores.corSecundaria}
    );
    transition: all ease-in-out 0.2s;
  }
`
