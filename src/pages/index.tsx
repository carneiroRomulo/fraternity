import React from 'react'

import Shield from '../assets/shield.svg'
import Layout from '../components/Layout/layout'

const Home: React.FC = () => {
  return (
    <Layout>
      <Shield />
      <h1>Hello World!</h1>
    </Layout>
  )
}

export default Home
