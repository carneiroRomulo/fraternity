import React from 'react'
import Head from 'next/head'

import Header from '../Header/header'
import Footer from '../Footer/footer'
import Content from '../Content/content'

const Layout: React.FC = () => {
  return (
    <div>
      <Head>
        <title>República Dominakana</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default Layout
