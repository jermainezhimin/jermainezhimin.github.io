// import '../styles/global.css'
import React from 'react'
import { CSSReset } from '@chakra-ui/core'
export default function App({ Component, pageProps }) {
  return (
    <>
      <CSSReset />
      <Component {...pageProps} />
    </>
  )
}
