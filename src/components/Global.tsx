import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    padding: 0;
    margin: 0;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Varela', sans-serif;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .my-masonry-grid {
    display: flex;
    margin-left: -10px;
    width: auto;
  }

  .my-masonry-grid_column {
    padding-left: 10px;
    background-clip: padding-box;
  }
`

export default GlobalStyle