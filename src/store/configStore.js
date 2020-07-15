import {getDefaultMiddleware} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import {applyMiddleware, createStore, compose} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {rootReducer} from './rootReducer'
import {rootSaga} from './rootSaga'
import logger from 'redux-logger'
const persistConfig = {
  key: 'root',
  storage,
}
const reducer = persistReducer(persistConfig, rootReducer)
const devMode = process.env.NODE_ENV === 'development';
const sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({thunk: false}), sagaMiddleware]

if (devMode) {
  middleware.push(logger)
}

const configStore = (preloadedState) => {
  const store = createStore(reducer, preloadedState, compose(applyMiddleware(...middleware)))

  sagaMiddleware.run(rootSaga)

  if (devMode && module.hot) {
    module.hot.accept('./rootReducer', () => store.replaceReducer(reducer))
  }

  return {
    persistor: persistStore(store),
    store,
  }
}

const {store, persistor} = configStore()

export {store, persistor}
