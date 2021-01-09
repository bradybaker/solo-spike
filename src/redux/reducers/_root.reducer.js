import { combineReducers } from 'redux'
import logoReducer from './logo.reducer'
import autocompleteReducer from './autocomplete.reducer'

const rootReducer = combineReducers({
    logoReducer,
    autocompleteReducer,
})

export default rootReducer;