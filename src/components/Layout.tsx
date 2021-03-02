import React, { ReactNode } from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Navbar from './Navbar'

type Props = {
	children?: ReactNode
}

const StyledLayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
	width: 100vw;
`

const StyledMain = styled.main`
	min-height: 70vh;
`

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

export default Layout
