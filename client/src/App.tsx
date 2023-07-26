import React, { useState } from 'react';
import { DataContext } from './utils/DataContext';
import Searchbar from './components/searchbar';
import { ToastContainer } from 'react-toastify';
import Results from './components/results';
import Filters from './components/filters';
import styled from '@emotion/styled';
import Actions from './components/actions';
import { Divider } from '@mui/material';

const Contentcontainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: 'rgb(26,29,34)',
})

const StyledDivider = styled(Divider)({
  margin: '5px',
  width: '0.1%',
  backgroundColor: 'rgb(26,29,34)',
});

function App() {
  const [data, setData] = useState(null);
  return (
    <DataContext.Provider value={{ data, setData }}>
      <ToastContainer />
      <Searchbar />
      <Contentcontainer>
        {/* <Actions />
        <StyledDivider orientation="vertical" flexItem /> */}
        <Results />
        {/* <StyledDivider orientation="vertical" flexItem />
        <Filters /> */}
      </Contentcontainer>
    </DataContext.Provider>
  );
}

export default App;
