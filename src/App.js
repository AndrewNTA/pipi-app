import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PostsContainer from './scenes/posts';
import Home from './scenes/home';
import UsersContainer from './scenes/users'

const App = () => (
	<Router>
		<div>
			<Route exact path='/' component={Home} />
			<Route path='/posts' component={PostsContainer} />
			<Route path='/users' component={UsersContainer} />
		</div>
	</Router>
)

export default App;