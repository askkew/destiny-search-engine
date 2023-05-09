import React, { useState } from 'react';
import { DataContext } from './utils/DataContext';
import Searchbar from './components/searchbar';
import { ToastContainer } from 'react-toastify';

function App() {
  const [data, setData] = useState(null);
  return (
    <DataContext.Provider value={{ data, setData }}>
      <ToastContainer />
      <Searchbar />
      {/* other components that need access to the data */}
    </DataContext.Provider>
  );
}

export default App;
