import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Home from '../components/Home';
import Layout from '../components/Layout';
import MovieDetails from '../components/MovieDetails';
const AppRouter = () => {
	return (
		<Layout>
			<Router>
				<>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/movie/:movieId" component={MovieDetails} />
						<Redirect to="/" />
					</Switch>
				</>
			</Router >
		</Layout>
	)
}

export default AppRouter
