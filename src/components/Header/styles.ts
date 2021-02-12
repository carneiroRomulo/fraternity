import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-around;

  padding: 1.4em;
  border-bottom: 0.3em solid #ffffff;
  outline: 0.5em solid ${props => props.theme.colors.secondary};

  background-color: ${props => props.theme.colors.primary};

  @media (max-width: 1280px) {
    background-color: lightblue;
  }
`

export const ContentLeft = styled.div`
  width: 25%;
  text-align: center;

  display: flex;
  justify-content: space-around;
  margin-left: 15%;
`
export const ContentRight = styled.div`
  width: 30%;
  text-align: center;

  display: flex;
  justify-content: space-around;

  margin-right: 10%;
`

export const TextHeader = styled.a`
  font: 700 20px Poppins, sans-serif;
  text-decoration: none;

  color: ${props => props.theme.colors.light_text};

  :hover {
    background: ${props => props.theme.colors.secondary};
    border-radius: 15px;
    box-shadow: 0 0 0 5px ${props => props.theme.colors.secondary};
  }
`
export const TextHome = styled(TextHeader)`
  color: ${props => props.theme.colors.secondary};
`

export const Flag = styled.a`
  svg {
    margin-top: 5px;
    margin-bottom: -5px;
    width: 80px;
    height: 70px;
  }

  font: 700 1.25em Poppins, sans-serif;
  text-decoration: none;
  text-align: center;
  color: ${props => props.theme.colors.secondary};

  width: 100px;
  height: 100px;

  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);

  justify-content: center;

  display: grid;
  grid: auto / auto;

  background-color: ${props => props.theme.colors.box};

  box-shadow: 0px 4px 10px #262626;
  border-radius: 0 0 15px 15px;

  :hover {
    color: ${props => props.theme.colors.light_text};
    background-color: ${props => props.theme.colors.secondary};
  }
`
