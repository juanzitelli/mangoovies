import React, { ChangeEventHandler, useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from './Layout';
import Reccomendations from './Reccomendations';
import Results from './Results';

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const [searchInputHasText, setSearchInputHasText] = useState(false);
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = event => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    setSearchInputHasText(searchText.length > 0);
  }, [searchText, searchInputHasText]);

  return (
    <Layout>
      <StyledHero>
        <StyledHeader>
          <h1>Welcome to Mangoovies!</h1>
          <h3>
            Who needs the outside world? When you can watch a great movie! 🍿🤏
          </h3>
        </StyledHeader>

        <StyledForm>
          <StyledInput
            value={searchText}
            onChange={handleInputChange}
            type="text"
            placeholder="Search for a movie"
          />
        </StyledForm>

        {!searchInputHasText && (
          <StyledRecommendations>
            <h5>Or maybe just scroll down and look at our recommendations!</h5>
          </StyledRecommendations>
        )}
      </StyledHero>

      {searchInputHasText ? (
        <Results query={searchText} />
      ) : (
        <Reccomendations />
      )}
    </Layout>
  );
};

const StyledInput = styled.input`
  font-size: 1rem;
  padding: 1rem;
  margin-left: 2rem;
  margin-right: 2rem;
  border: none;
  background: #f5f5f5;
  box-shadow: 0px 14px 31px -23px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  &::placeholder {
    font-family: 'Fira Code', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
  }
  transition: all 0.2s;
  animation: fadeInBottom 500ms ease-out;
  @keyframes fadeInBottom {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }
    70% {
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const StyledHero = styled.div`
  display: grid;
  grid-template-areas:
    '. header .'
    '. search-bar .'
    '. recommendations .';
  color: white;
  min-height: 70vh;
  background-size: cover;
  background-position: bottom;
  background-image: linear-gradient(
      to right bottom,
      rgba(146, 146, 146, 0.8),
      rgba(65, 65, 65, 0.8)
    ),
    url('https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80');
  background-repeat: no-repeat;
`;

const StyledHeader = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1,
  h3 {
    text-align: center;
  }
`;
const StyledForm = styled.form`
  grid-area: search-bar;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledRecommendations = styled.div`
  grid-area: recommendations;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h5 {
    text-align: center;
  }
`;

export default Home;
