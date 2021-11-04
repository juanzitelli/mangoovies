import React from 'react';
import styled from 'styled-components';
import { DiscoveryMovie } from '../types/DiscoveryMovie';
import { SearchMovie } from '../types/SearchMovie';
import MovieCard from './MovieCard';

type Props = {
  movies: DiscoveryMovie[] | SearchMovie[] | undefined;
};
const TMDB_IMAGES_185PX_BASE_URL = 'https://image.tmdb.org/t/p/w185/';

const Movies = (props: Props) => {
  const { movies } = props;
  return (
    <StyledMoviesContainer>
      {movies && movies.length === 0 ? (
        <p>There are no movies available matching those parameters</p>
      ) : (
        movies &&
        movies.map(movie => {
          const fullMoviePosterPath = `${TMDB_IMAGES_185PX_BASE_URL}${movie.poster_path}`;
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              imageUrl={fullMoviePosterPath}
            />
          );
        })
      )}
    </StyledMoviesContainer>
  );
};

const StyledMoviesContainer = styled.div`
  display: grid;
  grid-row-gap: 1vh;
  grid-column-gap: 1vw;
  grid-template-columns: repeat(auto-fill, minmax(5rem, 10rem));
  grid-template-rows: minmax(20px, auto);
  justify-content: center;
  align-items: flex-start;
`;

export default Movies;
