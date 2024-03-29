import React, { useContext, CSSProperties, useState, useEffect  } from 'react';
import { DataContext } from '../../utils/DataContext'
import BarLoader from "react-spinners/BarLoader";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ButtonLabel, SearchBarContainer, StyledButton, StyledForm, StyledInputField, StyledInputFieldTemp } from './searchstyles';
import axios from 'axios';

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  color: "white",
  position: "absolute",
  left: "0%",
  top: "70px",
};

const Searchbar = () => {
  const { setData } = useContext(DataContext);
  let [loading, setLoading] = useState(false);
  const [barWidth, setBarWidth] = useState(window.innerWidth);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  const handleSearch = async (event: { preventDefault: () => void; }) => {
    setLoading(true);
    event.preventDefault();
    
    if (!searchQuery) {
      setLoading(false);
      toast.error('Please fill out the search field.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    
    try {
      // const endpoint = `http://localhost:5000/search?searchQuery=${searchQuery}`;
      const endpoint = `https://ec2-3-17-167-220.us-east-2.compute.amazonaws.com/search?searchQuery=${searchQuery}`;
      const response = await axios.get(endpoint);
      setData(response.data);
      setLoading(false);
  
      if (response.data.length === 0) {
        toast.error('Couldn\'t find any items.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
      toast.error('Error fetching data. Please try again later.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  useEffect(() => {
    if(window.innerWidth !== barWidth) {
      setBarWidth(window.innerWidth);
    }
  }, [window.innerWidth]);


  return (
    <SearchBarContainer>
      <StyledForm onSubmit={handleSearch}>
        <StyledInputField type="text" placeholder="Enter search query" id="searchQuery" required onChange={(e) => setSearchQuery(e.target.value)} />
        {/* <StyledInputFieldTemp type="number" placeholder="Enter page" id="page" required onChange={(e) => setPage(Number(e.target.value))} /> */}
        <StyledButton type="submit"><ButtonLabel>Search</ButtonLabel></StyledButton>
      </StyledForm>
      <BarLoader
        loading={loading}
        cssOverride={override}
        height={4}
        width={barWidth}
        color={"#fff"}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </SearchBarContainer>
  )
}

export default Searchbar