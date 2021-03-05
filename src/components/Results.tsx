import React, { useEffect, useState } from 'react'
import Movies from './Movies'
import useSearchedMovies from './../hooks/useSearchedMovies'
import StarRating from './StarRating'
import styled from 'styled-components'

type Props = {
	query: string;
}

const Results = ({ query }: Props) => {

	const [isStarRatingFilterActive, setIsStarRatingFilterActive] = useState(false);
	const [currentRating, setCurrentRating] = useState(0);
	const { data: movies, isLoading, error, refetch } = useSearchedMovies({ query })

	const filteredMovies = isStarRatingFilterActive ? movies?.filter(movie => movie.vote_average <= currentRating && movie.vote_average > currentRating - 2) : movies

	useEffect(() => {
		refetch()
	}, [query, refetch])

	return (
		<div>
			<h2>{`Results matching "${query}"`}</h2>
			{isStarRatingFilterActive ? <h3>{` and with an average score between ${(currentRating - 2)} and ${currentRating}`}</h3> : null}
			<StyledFilters>
				<StarRating
					currentRating={currentRating}
					setCurrentRating={setCurrentRating}
					active={isStarRatingFilterActive}
					setActive={setIsStarRatingFilterActive}
				/>
			</StyledFilters>
			{
				error ? <p>{error.message}</p> : isLoading ? <p>Loading...</p> : movies && <Movies movies={filteredMovies} />
			}
		</div>
	)
}

const StyledFilters = styled.div`

				`

export default Results
