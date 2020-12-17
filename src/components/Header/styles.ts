import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  position: fixed;

  left: 0;
  right: 0;
  top: 0;

  display: flex;
  padding: 1.4em;

  border-width: 0.3em;
  border-color: #ffffff;
  border-style: none none solid none;

  outline: 0.5em solid ${props => props.theme.colors.secondary};

  background-color: ${props => props.theme.colors.primary};
`

export const Bar = styled.div``

export const TextHeader = styled.a`
  font: 700 1.25em Poppins, sans-serif;

  text-decoration: none;
  text-align: center;

  color: ${props => props.theme.colors.light_text};
`
export const TextHome = styled(TextHeader)`
  color: ${props => props.theme.colors.secondary};
`

export const Flag = styled.div`
  svg {
    width: 80px;
    height: 70px;
  }

  width: 100px;
  height: 100px;

  position: absolute;
  top: 0px;

  justify-content: center;

  display: grid;
  grid: auto / auto;

  background-color: ${props => props.theme.colors.box};

  box-shadow: 0px 4px 10px #262626;
  border-radius: 0 0 15px 15px;
`
