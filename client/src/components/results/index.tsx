import React, { useContext } from 'react';
import { ResultContainer } from './resultstyles';
import { DataContext } from '../../utils/DataContext';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const Results = () => {
  const { data } = useContext(DataContext);
  const test = data?.Response?.results;
  console.log(test)

  if (!test || !test.length) {
    return null;
  }

  return (
    <ResultContainer>
      <Table>
      <TableHead>
        <TableRow>
          <TableCell>Item Icon</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Description</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {test.map((item: any) => (
          <TableRow key={item.hash}>
            <img src={`https://www.bungie.net${item.displayProperties.icon}`} alt="" height="50" />
            <TableCell>{item.displayProperties.name}</TableCell>
            <TableCell>{item.displayProperties.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </ResultContainer>
  );
}

export default Results