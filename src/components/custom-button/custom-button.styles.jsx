import styled, { css } from 'styled-components'

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {  
    background-color: white;
    transition: 0.2s;
    color: black;
    border: 1px solid black;
  }
`

const invertedButtonStyles = css`
  background-color: white;
  transition: 0.2s;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`

const GoogleSignInStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
  background-color: white;
  transition: 0.2s;
  color: black;
  border: 1px solid black;
  }
`

const getButtonStyles = ({ isGoogleSignIn, inverted }) => {
  if( isGoogleSignIn ) return GoogleSignInStyles
  return inverted ? invertedButtonStyles : buttonStyles
}

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  
  ${getButtonStyles}
`