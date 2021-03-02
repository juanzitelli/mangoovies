import React from 'react'
import { useParams } from 'react-router-dom';
import Layout from './Layout';

const MovieDetails = () => {

	const { movieId } = useParams<{ movieId: string }>();

	return (
		<Layout>
			<h1>Movie details page. Movie requested: {movieId}</h1>
		</Layout>
	)
}

export default MovieDetails
