import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import createStore from './createStore'

/* global window */

const store = createStore()

ReactDOM.render(
  React.createElement(Provider, { store },
    React.createElement(App, null)
  ),
  window.document.getElementById('root')
)
registerServiceWorker()
