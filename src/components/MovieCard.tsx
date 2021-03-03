import React from 'react'
import styled from 'styled-components'
import { DiscoveryMovie } from '../types/DiscoveryMovie'

interface Props {
	movie: DiscoveryMovie,
	imageUrl: string;
}

const MovieCard = (props: Props) => {
	const { movie, imageUrl } = props;
	return (
		<StyledMovieCard>
			<StyledPoster imageUrl={imageUrl} />
			<span>{movie.original_title}</span>
		</StyledMovieCard>
	)
}
const StyledMovieCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-family: "Fira Code";	
	text-align: center;
	max-width: 10rem;
	span {
		font-size: 1.1rem;
		font-weight: 600;
	}
`

const StyledPoster = styled.div<{ imageUrl: string }>`
	background-image: url("${props => props.imageUrl}");
  	height: 12rem;
  	width: 8rem;
  	margin: .5rem;
  	border-radius: 10px;
  	background-repeat: no-repeat; 
  	background-size: cover;
`
export default MovieCard
