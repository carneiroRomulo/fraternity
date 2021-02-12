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
        <Link href="/house" passHref>
          <TextHeader>A Casa</TextHeader>
        </Link>{' '}
        <Link href="/history" passHref>
          <TextHeader>História</TextHeader>
        </Link>{' '}
        <Link href="/events" passHref>
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
        <Link href="/residents" passHref>
          <TextHeader>Moradores</TextHeader>
        </Link>{' '}
        <Link href="/ex-students" passHref>
          <TextHeader>Ex-Alunos</TextHeader>
        </Link>{' '}
        <Link href="/contact" passHref>
          <TextHeader>Contato</TextHeader>
        </Link>{' '}
        {children}
      </ContentRight>
    </Container>
  )
}

export default Header
