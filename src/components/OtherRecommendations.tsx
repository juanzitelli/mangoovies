import React from 'react'
import useDiscoveryMovies from '../hooks/useDiscoveryMovies';
import Movies from './Movies'

interface Props {

}

const OtherRecommendations = (props: Props) => {
	const { data, isLoading, error } = useDiscoveryMovies();
	return (
		<>
			<h2>Other recommendations ✨✨✨</h2>
			{
				error ? <p>{error.message}</p> : isLoading ? <p>Loading...</p> : data && <Movies movies={data} />
			}
		</>
	)
}

export default OtherRecommendations
