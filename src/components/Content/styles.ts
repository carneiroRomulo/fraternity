import styled from 'styled-components'

export const Container = styled.div`
  width: 87.5rem;

  display: flex;
  justify-content: center;

  font-size: 50px;

  position: absolute;
  top: 200px;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);

  background-color: ${props => props.theme.colors.box};
  border-radius: 15px;
`
