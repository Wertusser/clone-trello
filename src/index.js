import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { Router } from 'react-router';
import Localforage from 'localforage';

import App from './containers/App';

import cfg from './store';
import './index.scss';

const db = Localforage.createInstance({
	name: 'trello_react',
	driver: Localforage.INDEXEDDB,
	description: 'Used to store panels and cards',
	version: 1.0
})

db.getItem('trello')
	.then(value => value || undefined)
	.then(value => cfg.configStore(value))
	.then((store) => {
		ReactDOM.render(
			<Provider store={store}>
				<Router history={cfg.history} >
					<Route exact path="/" component={App} />
				</Router>
			</Provider>, document.getElementById('root'))

		store.subscribe(() => db.setItem('trello', store.getState()))
	});