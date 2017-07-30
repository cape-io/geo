import React from 'react'
import PropTypes from 'prop-types'

// Simple example of input element.
function Geo({ hasError, lat, lon }) {
  if (hasError) return <p>Please enter valid coordinates</p>
  // console.log(lat, lng)
  return (
    <div>
      {lat && <h3>Latitude: {lat}</h3>}
      {lon && <h3>Longitude: {lon}</h3>}
    </div>
  )
}

Geo.propTypes = {
  hasError: PropTypes.bool,
  lat: PropTypes.number,
  lon: PropTypes.number,
}
Geo.defaultProps = {
  hasError: false,
  lat: null,
  lon: null,
  value: '',
}

export default Geo
