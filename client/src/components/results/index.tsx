import React, { useContext } from 'react';
import { ResultContainer, StyledTableCell } from './resultstyles';
import { DataContext } from '../../utils/DataContext';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const Results = () => {
  const { data } = useContext(DataContext);
  const test = data?.Response?.results;
  console.log(test)

  const dummydata = [
    {
      hash: 1,
      name: 'nebula rose',
      description: 'description',
      rarity: 'legendary',
      itemtype: 'shader',
      class: 'any',
      damagetype: 'none',
      icon: 'https://www.bungie.net/common/destiny2_content/icons/ccd037c16dcd61f1bf35f91e739c9c58.jpg',
    },
    {
      hash: 2,
      name: 'ship',
      description: 'description',
      rarity: 'exotic',
      itemtype: 'ship',
      class: 'any',
      damagetype: 'none',
      icon: 'https://www.bungie.net/common/destiny2_content/icons/38aeb633f1a035a73a1ee04176564342.jpg',
    },
    {
      hash: 3,
      name: 'nebula rose',
      description: 'description',
      rarity: 'legendary',
      itemtype: 'shader',
      class: 'any',
      damagetype: 'none',
      icon: 'https://www.bungie.net/common/destiny2_content/icons/ccd037c16dcd61f1bf35f91e739c9c58.jpg',
    },
    {
      hash: 4,
      name: 'ship',
      description: 'description',
      rarity: 'exotic',
      itemtype: 'ship',
      class: 'any',
      damagetype: 'none',
      icon: 'https://www.bungie.net/common/destiny2_content/icons/38aeb633f1a035a73a1ee04176564342.jpg',
    },
  ]

  return (
    <ResultContainer>
      <Table>
      <TableHead sx={{backgroundColor: 'rgb(32,36,43)'}}> 
        <TableRow>
          <StyledTableCell>Item Icon</StyledTableCell>
          <StyledTableCell>Name</StyledTableCell>
          <StyledTableCell>Description</StyledTableCell>
          <StyledTableCell>Rarity</StyledTableCell>
          <StyledTableCell>Item Type</StyledTableCell>
          <StyledTableCell>Class</StyledTableCell>
          <StyledTableCell>Damage Type</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {dummydata && dummydata.map((item: any, index: number) => (
          <TableRow key={item.hash} style={{backgroundColor: index % 2 === 0 ? 'rgb(51,56,66)' : 'rgb(32,36,43)'}}>
            <img src={`${item.icon}`} alt="" height="50" />
            <StyledTableCell>{item.name}</StyledTableCell>
            <StyledTableCell>{item.description}</StyledTableCell>
            <StyledTableCell>{item.rarity}</StyledTableCell>
            <StyledTableCell>{item.itemtype}</StyledTableCell>
            <StyledTableCell>{item.class}</StyledTableCell>
            <StyledTableCell>{item.damagetype}</StyledTableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableBody>
        {data && test.map((item: any, index: number) => (
          <TableRow key={item.hash} style={{backgroundColor: index % 2 === 0 ? 'rgb(26,29,34)' : 'rgb(51,56,66)'}}>
            <img src={`https://www.bungie.net${item.displayProperties.icon}`} alt="" height="50" />
            <TableCell>{item.displayProperties.name}</TableCell>
            <TableCell>{item.displayProperties.description}</TableCell>
          </TableRow>
        ))}
      </TableBody> */}
    </Table>
    </ResultContainer>
  );
}

export default Results


{/* <TableRow>
          <img src={dummyimage} alt="" height="50" />
          <TableCell>nebula rose</TableCell>
          <TableCell>description</TableCell>
          <TableCell>rare</TableCell>
          <TableCell>shader</TableCell>
          <TableCell>any</TableCell>
          <TableCell>none</TableCell>
        </TableRow>
        <TableRow>
          <img src={secondimage} alt="" height="50" />
          <TableCell>nebula rose</TableCell>
          <TableCell>description</TableCell>
          <TableCell>rare</TableCell>
          <TableCell>shader</TableCell>
          <TableCell>any</TableCell>
          <TableCell>none</TableCell>
        </TableRow>
        <TableRow>
          <img src={dummyimage} alt="" height="50" />
          <TableCell>nebula rose</TableCell>
          <TableCell>description</TableCell>
          <TableCell>rare</TableCell>
          <TableCell>shader</TableCell>
          <TableCell>any</TableCell>
          <TableCell>none</TableCell>
        </TableRow>
        <TableRow>
          <img src={dummyimage} alt="" height="50" />
          <TableCell>nebula rose</TableCell>
          <TableCell>description</TableCell>
          <TableCell>rare</TableCell>
          <TableCell>shader</TableCell>
          <TableCell>any</TableCell>
          <TableCell>none</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>nebula rose</TableCell>
          <TableCell>description</TableCell>
          <TableCell>rare</TableCell>
          <TableCell>shader</TableCell>
          <TableCell>any</TableCell>
          <TableCell>none</TableCell>
        </TableRow> */}