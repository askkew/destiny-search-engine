import styled from '@emotion/styled';

export const FiltersContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  // border: '3px solid red',
  minWidth: '25%',
  padding: '15px',
})

export const Filtercategorylabel = styled('h1')({
  fontSize: '2rem',
  fontWeight: 500,
  color: 'white',
})

export const FilterCategory = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '5px',
  marginRight: '20px',
})

export const FilterButton = styled('div')({
  display: 'flex',
  width: 'fit-content',
  cursor: 'pointer',
  flexDirection: 'row',
  alignItems: 'center',
  color: 'white',
  borderRadius: '15px',
  padding: '5px 10px 5px 10px', 
  backgroundColor: 'rgb(26,29,34)',
  '&:hover': {
    backgroundColor: 'rgb(51,56,66)',
  }
})

export const FilterLabel = styled('h1')({
  fontSize: '1rem',
  fontWeight: 500,
})
