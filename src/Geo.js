import { cond, constant, flow, get, lt, negate, overEvery, isEmpty, isString, size, stubTrue,
} from 'lodash/fp'
import { connect } from 'react-redux'
import { fieldSelector } from 'redux-field'
// import { createStructuredSelector } from 'reselect'
import parseDms from 'parse-dms'
import GeoEl from './GeoEl'

export const isSexagesimal = overEvery([
  isString,
  negate(isEmpty),
  flow(size, lt(5)),
])
export const getDecimal = cond([
  [isSexagesimal, parseDms],
  [stubTrue, constant({ hasError: true })],
])
// export const getState = createStructuredSelector({
//   lat: flow(fieldSelector('lat'), getDecimal),
//   lng: flow(fieldSelector('lng'), getDecimal),
// })
export const getState = flow(fieldSelector('coords'), get('value'), getDecimal)
export default connect(getState)(GeoEl)
