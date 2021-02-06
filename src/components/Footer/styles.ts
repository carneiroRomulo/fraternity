import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  padding: 0.5em;

  text-align: center;

  font: 700 1.25em Poppins, sans-serif;

  color: ${props => props.theme.colors.light_text};
  background-color: ${props => props.theme.colors.primary};
`
