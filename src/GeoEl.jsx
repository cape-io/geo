import React from 'react'
import PropTypes from 'prop-types'

function GeoError({ example }) {
  return (
    <div>
      <p>Please enter valid coordinates</p>
      <p>Example: {example}</p>
    </div>
  )
}
GeoError.propTypes = {
  example: PropTypes.string.isRequired,
}

// Simple example of input element.
function Geo({ example, hasError, lat, lon }) {
  if (hasError || (!lat && !lon)) return <GeoError example={example} />
  // console.log(lat, lng)
  return (
    <div>
      {lat && <h3>Latitude: {lat}</h3>}
      {lon && <h3>Longitude: {lon}</h3>}
    </div>
  )
}

Geo.propTypes = {
  example: PropTypes.string,
  hasError: PropTypes.bool,
  lat: PropTypes.number,
  lon: PropTypes.number,
}
Geo.defaultProps = {
  example: '45 05.4653\'N, 69 05\'41.96"',
  hasError: false,
  lat: null,
  lon: null,
  value: '',
}

export default Geo
