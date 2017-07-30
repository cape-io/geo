import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import reducer from './reducer'

export default function initStore() {
  const initState = {}
  return createStore(reducer, initState, composeWithDevTools(applyMiddleware(thunk)))
}
