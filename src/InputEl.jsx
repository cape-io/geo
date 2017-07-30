import React from 'react'
import PropTypes from 'prop-types'
import { connectInput } from 'redux-field-connect'

// Simple example of input element.
function InputEl({ id, label, value, ...props }) {
  return (
    <label htmlFor={id}>
      {label}
      <input id={id} value={value || ''} {...props} />
    </label>
  )
}

InputEl.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
}
InputEl.defaultProps = {
  value: '',
}
export default connectInput(InputEl)
