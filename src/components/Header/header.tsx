import React from 'react'
import Link from 'next/link'

import Shield from '../../assets/shield.svg'
import {
  Container,
  ContentLeft,
  ContentRight,
  Flag,
  TextHeader
} from './styles'

const Header: React.FC = ({ children }) => {
  return (
    <Container>
      <ContentLeft>
        <Link href="/casa" passHref>
          <TextHeader>A Casa</TextHeader>
        </Link>{' '}
        <Link href="/historia" passHref>
          <TextHeader>História</TextHeader>
        </Link>{' '}
        <Link href="/eventos" passHref>
          <TextHeader>Eventos</TextHeader>
        </Link>{' '}
      </ContentLeft>
      <Link href="/" passHref>
        <Flag>
          <Shield />
          <a>Home</a>
        </Flag>
      </Link>{' '}
      <ContentRight>
        <Link href="/moradores" passHref>
          <TextHeader>Moradores</TextHeader>
        </Link>{' '}
        <Link href="/ex-alunos" passHref>
          <TextHeader>Ex-Alunos</TextHeader>
        </Link>{' '}
        <Link href="/contato" passHref>
          <TextHeader>Contato</TextHeader>
        </Link>{' '}
        {children}
      </ContentRight>
    </Container>
  )
}

export default Header
