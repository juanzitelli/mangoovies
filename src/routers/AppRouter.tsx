import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Home from '../components/Home';
import MovieDetails from '../components/MovieDetails';
const AppRouter = () => {
	return (
		<Router>
			<>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/movie/:movieId" component={MovieDetails} />
					<Redirect to="/" />
				</Switch>
			</>
		</Router >
	)
}

export default AppRouter
