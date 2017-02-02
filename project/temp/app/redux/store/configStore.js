import { createStore, combineReducers, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import createLogger from 'redux-logger'
import ReduxPromise from 'redux-promise'

export default () => (
    createStore(
        () => {},
        applyMiddleware(reduxThunk, ReduxPromise, logger)
    )
)