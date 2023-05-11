import React, { useContext } from 'react';
import { ImageTableCell, ResultContainer, StyledTableCell } from './resultstyles';
import { DataContext } from '../../utils/DataContext';
import { Table, TableBody, TableCell, TableHead, TableRow, makeStyles } from '@mui/material';

const getDamageType = (raceHash: number): string => {
  switch (raceHash) {
    case 1847026933:
      return 'Solar';
    case 3373582085:
      return 'Kinetic';
    case 3454344768:
      return 'Void';
    case 2303181850:
      return 'Arc';
    case 151347233:
      return 'Stasis';
    case 3949783978:
      return 'Strand';
    default:
      return 'N/A';
  }
};

const getClassType = (classType: number): string => {
  switch (classType) {
    case 0:
      return 'N/A';
    case 1:
      return 'Hunter';
    case 2:
      return 'Titan';
    case 3:
      return 'Warlock';
    default:
      return 'N/A';
  }
};

const Results = () => {
  const { data } = useContext(DataContext);
  const test = data?.Response?.results;
  console.log(test)

  return (
    <ResultContainer>
      <Table sx={{borderRadius: '10px 0 0 10px',}}>
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
        {data && test.map((item: any, index: number) => (
          <TableRow key={item.hash} style={{backgroundColor: index % 2 === 0 ? 'rgb(51,56,66)' : 'rgb(32,36,43)'}}>
            <ImageTableCell>
              <img src={`https://www.bungie.net${item.displayProperties.icon}`} alt="" height="70" />
              {item.additionalData.iconWatermark && (
                <img style={{ position: 'absolute', top: 0, left: 0 }} src={`https://www.bungie.net${item.additionalData.iconWatermark}`} alt="" />
              )}
            </ImageTableCell>
            <StyledTableCell>{item.displayProperties.name}</StyledTableCell>
            <StyledTableCell>{item.additionalData.itemTypeAndTierDisplayName}</StyledTableCell>
            {item.additionalData.inventory.tierTypeName ? (
              <StyledTableCell>{item.additionalData.inventory.tierTypeName}</StyledTableCell>
            ) : (
              <StyledTableCell>N/A</StyledTableCell>
            )}
            {item.additionalData.itemTypeDisplayName ? (
              <StyledTableCell>{item.additionalData.itemTypeDisplayName}</StyledTableCell>
            ) : (
              <StyledTableCell>N/A</StyledTableCell>
            )}
            {item.additionalData.classType ? (
              <StyledTableCell>{getClassType(item.additionalData.classType)}</StyledTableCell>
            ) : (
              <StyledTableCell>N/A</StyledTableCell>
            )}
            {item.additionalData.damageTypeHashes ? (
              <StyledTableCell>{getDamageType(item.additionalData.damageTypeHashes[0])}</StyledTableCell>
            ) : (
              <StyledTableCell>N/A</StyledTableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </ResultContainer>
  );
}

export default Results