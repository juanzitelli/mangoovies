import React from 'react'
import { useParams } from 'react-router-dom';

type Props = {
	
}

const MovieDetails = (props: Props) => {

	const { movieId } = useParams<{ movieId: string }>();

	return (
		<div>
			<h1>Movie details page. Movie requested: {movieId}</h1>
		</div>
	)
}

export default MovieDetails
