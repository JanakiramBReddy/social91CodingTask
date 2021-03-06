import React from 'react'
import { render } from 'react-dom'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker';
import { store } from './store/configStore';

//const renderApp = () => {
render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
)
//}

// if (process.env.NODE_ENV !== 'production' && module.hot) {
//   module.hot.accept('./App', renderApp)
// }
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
