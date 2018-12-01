import { combineReducers } from 'redux'
import Card from './Card'
import Panel from './Panel'

export default combineReducers({
	cards : Card,
	panels: Panel
})