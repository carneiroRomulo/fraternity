import React from 'react'
import Head from 'next/head'

import Shield from '../assets/shield.svg'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>República Dominakana</title>
      </Head>

      <main>
        <Shield />
        <h1>Hello World!</h1>
      </main>
    </div>
  )
}

export default Home
