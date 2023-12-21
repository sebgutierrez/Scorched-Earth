"use client";
import React, { Fragment } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import SimpleForm from './Components/SimpleForm';
import Map from './Components/Map';
import './App.css';

function App() {
  
  return (
    <Fragment> 
      <div className="main-container">
        <Navigation></Navigation>
        <div className="map-form-container">
          <SimpleForm></SimpleForm>
          <div className="map-container">
            <Map></Map>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
