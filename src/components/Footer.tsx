import React from 'react'
import styled from 'styled-components'

const Footer = () => {
	return (
		<StyledFooter>
			<p>Made with 💞 by <a href="https://github.com/juanzitelli" rel="noreferrer" target="_blank" >@juanzitelli</a></p>
		</StyledFooter>
	)
}

const StyledFooter = styled.footer`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	padding: 1rem;

`

export default Footer