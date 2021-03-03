import React, { ChangeEventHandler, useEffect, useState } from 'react'
import styled from 'styled-components'
import Layout from './Layout'
import OtherRecommendations from './OtherRecommendations';
import TopRecommendations from './TopRecommendations';



const Home = () => {

	const [searchText, setSearchText] = useState("");
	const [searchInputHasText, setSearchInputHasText] = useState(false)
	const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		setSearchText(event.target.value)
	}

	useEffect(() => {
		setSearchInputHasText(searchText.length > 0)
	}, [searchText, searchInputHasText])



	return (
		<Layout>
			<h1>This is the main title</h1>
			<h3>This is a subtitle</h3>
			<form>
				<StyledInput value={searchText} onChange={handleInputChange} type="text" placeholder="Search for a movie" />
			</form>
			<div>
				<h5>Or maybe just look at our recommendations</h5>
				<a href="#top-five"><button>👇</button></a>
			</div>
			{ searchInputHasText ?
				<div>
					<h1>Results</h1>
				</div> :
				<div>
					<TopRecommendations />
					<OtherRecommendations />
				</div>}
			{
			}

		</Layout>
	)
}

const StyledInput = styled.input`
	font-size: 1rem;
	padding: .5rem 1rem;
	border: none;
	background: #F5F5F5;
	box-shadow: 0px 14px 31px -23px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
`

export default Home
