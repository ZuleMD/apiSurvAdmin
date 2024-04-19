import { combineReducers } from 'redux'

import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'
import { getAllApiariesReducer } from './reducers/apiaryReducer'
import { createUserReducer, loginUserReducer, getAllUsersReducer, getUserByIdReducer, editUserReducer } from './reducers/userReducer'
 


const finalReducer = combineReducers({
    loginUserReducer: loginUserReducer,
    getAllApiariesReducer : getAllApiariesReducer,
    createUserReducer: createUserReducer,
    getUserByIdReducer: getUserByIdReducer,
    editUserReducer: editUserReducer,
    getAllUsersReducer: getAllUsersReducer,



})

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {
    loginUserReducer: {
        currentUser: currentUser
    }
}

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store