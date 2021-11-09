import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createLogger } from 'redux-logger'
import { homeAPI } from '../../features/home/homeAPI'
import authSlice from '../../features/auth/authSlice'
import userSlice from '../../features/profile/userSlice'

const rootReducer = combineReducers({
  auth: authSlice,
  user: userSlice,
  [homeAPI.reducerPath]: homeAPI.reducer,
  // [userAPI.reducerPath]: userAPI.reducer,
})

const persistConfig = {
  key: 'easyBusyRoot',
  version: 1,
  storage,
  whitelist: ['auth', 'user'],
  blacklist: [homeAPI.reducerPath],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const logger = createLogger({
  predicate: (getState, action) => !!action.type,
})

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    if (process.env.NODE_ENV !== 'production') {
      return getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(logger)
    }

    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
  },
})

export let persistor = persistStore(store)

export default store
