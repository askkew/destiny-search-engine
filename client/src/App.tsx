import React, { useState } from 'react';
import { DataContext } from './utils/DataContext';
import Searchbar from './components/searchbar';
import { ToastContainer } from 'react-toastify';
import Results from './components/results';
import Filters from './components/filters';
import styled from '@emotion/styled';
import Actions from './components/actions';

const Contentcontainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
})

function App() {
  const [data, setData] = useState(null);
  return (
    <DataContext.Provider value={{ data, setData }}>
      <ToastContainer />
      <Searchbar />
      <Contentcontainer>
        <Actions />
        <Results />
        <Filters />
      </Contentcontainer>
    </DataContext.Provider>
  );
}

export default App;
