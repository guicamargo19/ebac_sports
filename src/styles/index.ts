import { createGlobalStyle } from 'styled-components'

export const cores = {
  corTexto: '#121714',
  corFundo: '#e7e7e7',
  corPrincipal: '#152926',
  corSecundaria: '#155956'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    color: ${cores.corTexto}
  }

  body {
    background: linear-gradient(to right,#f5f5f5cc,#f5f5f5cc),url(https://servidor-estatico-tan.vercel.app/common-bg.svg);
    background-position: center;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1024px) {
      max-width: 80%;
    }
  }
`
