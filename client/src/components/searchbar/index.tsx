import React, { useContext, CSSProperties, useState, useEffect  } from 'react';
import { DataContext } from '../../utils/DataContext'
import BarLoader from "react-spinners/BarLoader";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ButtonLabel, SearchBarContainer, StyledButton, StyledForm, StyledInputField } from './searchstyles';

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

  useEffect(() => {
    if(window.innerWidth !== barWidth) {
      setBarWidth(window.innerWidth);
    }
  }, [window.innerWidth]);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    toast('🦄 Wow so easy!', {
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

  return (
    <SearchBarContainer>
      <StyledForm onSubmit={handleSearch}>
        <StyledInputField type="text" placeholder="Enter search query" id="searchQuery" required />
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