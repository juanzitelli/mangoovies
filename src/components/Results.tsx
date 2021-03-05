import React, { useEffect } from 'react'
import Movies from './Movies'
import useSearchedMovies from './../hooks/useSearchedMovies'
type Props = {
	query: string;
}

const Results = ({ query }: Props) => {

	const { data: movies, isLoading, error, refetch } = useSearchedMovies({ query })

	useEffect(() => {
		refetch()
	}, [query, refetch])

	return (
		<div>
			<h1>{`Results matching "${query}"`}</h1>

			{
				error ? <p>{error.message}</p> : isLoading ? <p>Loading...</p> : movies && <Movies movies={movies} />
			}
		</div>
	)
}

export default Results
