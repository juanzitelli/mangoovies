import React, { ReactNode } from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Navbar from './Navbar'

type Props = {
	children?: ReactNode
}

const Layout = ({ children }: Props) => {
	return (
		<StyledLayoutContainer>
			<Navbar />
			<StyledMain>
				{children}
			</StyledMain>
			<Footer />
		</StyledLayoutContainer>
	)
}

const StyledLayoutContainer = styled.div`
	display: grid;
	grid-template-rows: 1fr 10fr 1fr;
	grid-template-columns: 1fr;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
	width: 100vw;
`

const StyledMain = styled.main`
	padding: 5vw;
`

export default Layout
