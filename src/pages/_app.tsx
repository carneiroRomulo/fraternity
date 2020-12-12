import React from 'react'
import { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'

const Fraternity: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default Fraternity
