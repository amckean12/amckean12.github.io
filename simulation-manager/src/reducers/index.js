import { combineReducers } from 'redux'
import routes from './routes'
import processors from './processors'


const rootReducer = combineReducers({
    routes,
    processors})


export default rootReducer