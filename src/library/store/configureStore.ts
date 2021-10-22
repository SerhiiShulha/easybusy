import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import { homeAPI } from '../../features/home/homeAPI'

const rootReducer = combineReducers({
  [homeAPI.reducerPath]: homeAPI.reducer,
})

const logger = createLogger({
  predicate: (getState, action) => !!action.type,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    if (process.env.NODE_ENV !== 'production') {
      return getDefaultMiddleware().concat(logger)
    }

    return getDefaultMiddleware()
  },
})
