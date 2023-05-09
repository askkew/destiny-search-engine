import styled from '@emotion/styled';

export const SearchBarContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '10%',
  width: '100vw',
  color: 'white',
  margin: 'auto',
  // border: '3px solid red',
  backgroundColor: 'rgb(26,29,34)',
})

export const StyledInputField = styled('input')({
	fontFamily: 'Futura, sans-serif',
  display: 'block',
  padding: '10px',
  width: '90%',
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

export const StyledInputFieldTemp = styled('input')({
	fontFamily: 'Futura, sans-serif',
  display: 'block',
  padding: '10px',
  width: '6.1rem',
  font: 'inherit',
  margin: '2px',
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
  '@media (max-width: 560px)': {
    flexDirection: "column",
  },
})

export const StyledButton = styled('button')({
  fontFamily: 'Futura, sans-serif',
  display: 'block',
  padding: '10px',
  border: '3px solid white',
  color: 'white',
  font: 'inherit',
  margin: '10px',
  backgroundColor: 'rgb(68,115,68)',
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