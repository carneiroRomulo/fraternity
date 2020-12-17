import React from 'react'
import Link from 'next/link'

import Shield from '../../assets/shield.svg'
import { Content, Bar, Flag, TextHeader, TextHome } from './styles'

const Header: React.FC = ({ children }) => {
  return (
    <Content>
      <Bar>
        <nav>
          <Link href="/casa" passHref>
            <TextHeader>A Casa</TextHeader>
          </Link>{' '}
          <Link href="/historia" passHref>
            <TextHeader>História</TextHeader>
          </Link>{' '}
          <Link href="/eventos" passHref>
            <TextHeader>Eventos</TextHeader>
          </Link>{' '}
        </nav>
      </Bar>
      <Flag>
        <Shield />
        <Link href="/" passHref>
          <TextHome>Home</TextHome>
        </Link>{' '}
      </Flag>
      <Bar>
        <Link href="/moradores" passHref>
          <TextHeader>Moradores</TextHeader>
        </Link>{' '}
        <Link href="/ex-alunos" passHref>
          <TextHeader>Ex-Alunos</TextHeader>
        </Link>{' '}
        <Link href="/contato" passHref>
          <TextHeader>Contato</TextHeader>
        </Link>{' '}
      </Bar>
      {children}
    </Content>
  )
}

export default Header
