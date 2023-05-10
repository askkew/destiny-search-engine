import styled from '@emotion/styled';
import { TableCell } from '@mui/material';

export const ResultContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'top',
  height: '100vh',
  minWidth: '60%',
  marginTop: '10px',
})

export const StyledTableCell = styled(TableCell)({
  color: 'white',
})