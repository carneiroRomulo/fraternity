import React from 'react'
import { AppProps } from 'next/app'

const Fraternity: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default Fraternity
