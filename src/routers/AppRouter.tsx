import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
const AppRouter = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/" />
					<Route path="/movie/:movieId" />
				</Switch>
			</div>
		</Router >
	)
}

export default AppRouter
