import React from 'react'
import styled from 'styled-components'

const Footer = () => {
	return (
		<StyledFooter>
			<h1>Footer</h1>
		</StyledFooter>
	)
}

const StyledFooter = styled.footer`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	padding: 1rem;
	background-color: red;
`

export default Footer