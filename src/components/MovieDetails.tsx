import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import useMovie from '../hooks/useMovie';
import Layout from './Layout';

const MovieDetails = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const { data: movie, isLoading, error } = useMovie({ movieId });

  return (
    <Layout>
      {error ? (
        <p>
          {`Whoops! 😅 Something went wrong trying to fetch the movie you requested.`}{' '}
          <Link to="/">Go Back and try again! </Link>
        </p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        movie && (
          <StyledMovieDetails>
            <StyledMovieData>
              <h1>{movie.title}</h1>
              <h3>Brief description</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <StyledGenresContainer>
                {movie.genres.map(genre => (
                  <StyledGenre>{genre.name}</StyledGenre>
                ))}
              </StyledGenresContainer>

              {movie.homepage && (
                <a href={`${movie.homepage}`} target="_blank" rel="noreferrer">
                  {movie.title}'s homepage
                </a>
              )}

              <Link to="/">Go Back</Link>
            </StyledMovieData>
          </StyledMovieDetails>
        )
      )}
    </Layout>
  );
};

const StyledGenresContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 1rem;
`;

const StyledGenre = styled.span`
  padding: 0.5rem 0.7rem;
  background-color: gray;
  color: white;
  margin: 1rem;
  padding: 1rem 1.2rem;
`;

const StyledMovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;
const StyledMovieData = styled.div`
  a {
    display: block;
  }
`;
export default MovieDetails;
