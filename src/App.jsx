import React from 'react'
import './App.css'
import Input from './InputEl'
import Geo from './Geo'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Sexagesimal DMS Location Converter Tool</h2>
      </div>
      <p className="App-intro">
        Put in your coordinates and have them converted.
      </p>
      <Input label="Coordinates" id="coords" prefix="coords" type="text" size="50" />
      {/* <Input label="Latitude" id="lat" prefix="lat" type="text" /> */}
      {/* <Input label="Longitude" id="lng" prefix="lng" type="text" /> */}
      <Geo />
      <a href="https://github.com/cape-io/geo">GitHub Code Here</a>
    </div>
  )
}

export default App
