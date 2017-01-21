import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import MainPage from './components/MainPage';
import Contact from './components/Contact';


export default (
	<Route path="/" component={App}>
		<IndexRoute component={MainPage} />
		<Route component={Contact} />
	</Route>
);