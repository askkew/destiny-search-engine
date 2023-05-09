import React, { useState } from 'react';
import { DataContext } from './utils/DataContext';
import Searchbar from './components/searchbar';
import { ToastContainer } from 'react-toastify';
import Results from './components/results';

function App() {
  const [data, setData] = useState(null);
  return (
    <DataContext.Provider value={{ data, setData }}>
      <ToastContainer />
      <Searchbar />
      <Results />
      {/* other components that need access to the data */}
    </DataContext.Provider>
  );
}

export default App;
