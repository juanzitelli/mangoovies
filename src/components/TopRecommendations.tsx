import React from 'react'
import { DiscoveryMovie } from '../types/DiscoveryMovie';
import Movies from './Movies';

type Props = {
	movies: DiscoveryMovie[] | undefined;
	error: Error | null;
	isLoading: boolean;
}
const TopRecommendations = (props: Props) => {
	const { movies, error, isLoading } = props
	return (
		<div>
			<h2>Top 5 recommendations 🔥</h2>
			{
				error ? <p>{error.message}</p> : isLoading ? <p>Loading...</p> : movies && <Movies movies={movies} />
			}
		</div>
	)
}

export default TopRecommendations
