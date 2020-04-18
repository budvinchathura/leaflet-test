import React from 'react';
import logo from './logo.svg';
import { Button } from '@material-ui/core';

import { MapComponent } from './components/map'
import { Checkboxes } from './components/checks'
import './App.css';
import { useDispatch } from 'react-redux';
import { set_center } from './redux/actions'
import { latLng } from 'leaflet';

function App() {
  const dispatch = useDispatch();
  const loc1 = {
    lat: -35.417656,
    lng: 149.2314343
  }

  const loc2 = {
    lat: -35.424103,
    lng: 149.2435207
  }

  function current_loc() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition);
    }
    function getPosition(position) {
      dispatch(set_center({lat:position.coords.latitude,lng:position.coords.longitude}))
    }
  }



  return (
    <div className="App">

      <div >
        <MapComponent />
        {/* -35.417656,149.2314343 */}



        <Button variant="outlined" onClick={() => { dispatch(set_center(loc1)) }}>1st location...</Button>
        <Button variant="outlined" onClick={() => { dispatch(set_center(loc2)) }}>2nd location</Button>
        <Button variant="outlined" onClick={current_loc}>current location...</Button>
        <Checkboxes />
      </div>
    </div>
  );
}

export default App;
