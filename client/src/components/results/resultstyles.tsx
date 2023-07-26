import styled from '@emotion/styled';
import { TableCell, TableHead, TableRow } from '@mui/material';

export const ResultContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'top',
  height: '100vh',
  minWidth: '100%',
  marginTop: '10px',
  backgroundColor: 'rgb(40,44,52)',
})

export const StyledTableCell = styled(TableCell)({
  color: 'white',
  borderBottom: "none",
  fontSize: '1.2rem',
  fontWeight: '300',
})

export const ImageTableCell = styled('div')({
  position: 'relative',
})
