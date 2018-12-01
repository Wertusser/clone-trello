import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'
import reducers from './reducers'

const history = createHistory()

const configStore = (initalState) => {
	return createStore(
		reducers,
		initalState,
		applyMiddleware(thunk)
	)
}

export default { configStore, history }