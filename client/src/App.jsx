"use client";
import React, { Fragment } from 'react';
import './App.css';

import Navigation from './components/Navigation';
import SimpleForm from './components/SimpleForm';
import GoogleMap from './components/GoogleMap';

function App() {
  
  return (
    <Fragment> 
      <div className="main-container">
        <Navigation></Navigation>
        <div className="map-form-container">
          <SimpleForm></SimpleForm>
          <div className="map-container">
            <GoogleMap></GoogleMap>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
