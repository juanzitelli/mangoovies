import React from 'react'
import { DiscoveryMovie } from '../types/DiscoveryMovie';
import Movies from './Movies'

type Props = {
	movies: DiscoveryMovie[] | undefined;
	error: Error | null;
	isLoading: boolean;
}

const OtherRecommendations = (props: Props) => {

	const { movies, error, isLoading } = props;
	return (
		<>
			<h2>Other recommendations ✨</h2>
			{
				error ? <p>{error.message}</p> : isLoading ? <p>Loading...</p> : movies && <Movies movies={movies} />
			}
		</>
	)
}


export default OtherRecommendations
