import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor } from './store/configStore';
import Home from './Home'


const App = ({ store }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className='container'>
          <Home />
        </div>
      </PersistGate>
    </Provider>
  )
}

export default App
