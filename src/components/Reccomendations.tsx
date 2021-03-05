import React from 'react'
import useDiscoveryMovies from '../hooks/useDiscoveryMovies';
import OtherRecommendations from './OtherRecommendations'
import TopRecommendations from './TopRecommendations'

interface Props {

}

const Reccomendations = (props: Props) => {
	const { data, isLoading, error } = useDiscoveryMovies();
	return (
		<div>
			<TopRecommendations error={error} isLoading={isLoading} movies={data && data.filter((_, i) => i < 5)} />
			<OtherRecommendations error={error} isLoading={isLoading} movies={data && data.filter((_, i) => i > 5)} />
		</div>
	)
}

export default Reccomendations
