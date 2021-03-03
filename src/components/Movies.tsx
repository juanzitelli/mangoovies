import React from 'react'
import styled from 'styled-components'
import { DiscoveryMovie } from '../types/DiscoveryMovie'
import MovieCard from './MovieCard'

type Props<T> = {
	movies: T
}
const TMDB_IMAGES_185PX_BASE_URL = "https://image.tmdb.org/t/p/w185/"

const Movies = <T extends DiscoveryMovie[]>(props: Props<T>) => {
	const { movies } = props;
	return (
		<StyledMoviesContainer>
			{
				movies.map(movie => <MovieCard key={movie.id} movie={movie} imageUrl={`${TMDB_IMAGES_185PX_BASE_URL}${movie.poster_path}`} />)
			}
		</StyledMoviesContainer>
	)
}

const StyledMoviesContainer = styled.div`
	display: grid;
	grid-row-gap: 1vh;
	grid-column-gap: 1vw;
	grid-template-columns: repeat(auto-fill, minmax(5rem, 10rem));
	grid-template-rows: minmax(20px, auto) 1fr 1fr;	
	justify-content: center;
	align-items: flex-start;
`

export default Movies
