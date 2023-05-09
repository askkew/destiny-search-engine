import styled from '@emotion/styled';

export const SearchBarContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  height: '70px',
  width: '400px',
  color: 'white',
  margin: 'auto',
})

export const StyledInputField = styled('input')({
	fontFamily: 'Futura, sans-serif',
  display: 'block',
  padding: '10px',
  font: 'inherit',
  margin: '10px',
  '::placeholder': {
    transition: 'opacity 0.25s',
    color: 'white',
    fontWeight: 500,
  },
  ':focus::placeholder': {
    opacity: 0,
  },
  border: '3px solid white',
  color: 'white',
  backgroundColor: 'rgb(194,187,178)',
  outline: "2px solid gainsboro",
  transitionProperty: "outline-offset, outline-color, background-color",
  transitionDuration: "0.25s",
  '&:hover': {
    outlineOffset: "2px",
  },
})

export const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
})

export const StyledButton = styled('button')({
  fontFamily: 'Futura, sans-serif',
  display: 'block',
  padding: '10px',
  border: '3px solid white',
  color: 'white',
  font: 'inherit',
  margin: '10px',
  backgroundColor: 'rgb(194,187,178)',
  cursor: 'pointer',
  outline: "2px solid gainsboro",
  transitionProperty: "outline-offset, outline-color, background-color",
  transitionDuration: "0.25s",
  '&:hover': {
    outlineOffset: "2px",
  },
})

export const ButtonLabel = styled('span')({
  fontFamily: 'Futura, sans-serif',
  fontWeight: 500,
})