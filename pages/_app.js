import React from 'react'
import NextApp from 'next/app'
import { Global, css } from '@emotion/core'
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  useColorMode,
} from '@chakra-ui/core'

import theme from '../styles/theme'
import { lightMode, darkMode } from '../styles/mode'

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode()

  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          ${colorMode === 'light' ? lightMode : darkMode};
          ::selection {
            background-color: #47a3f3;
            color: #fefefe;
          }
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === 'light' ? 'white' : '#171923'};
          }
        `}
      />
      {children}
    </>
  )
}

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <ColorModeProvider value="light">
          <GlobalStyle>
            <Component {...pageProps} />
          </GlobalStyle>
        </ColorModeProvider>
      </ThemeProvider>
    )
  }
}

export default App
