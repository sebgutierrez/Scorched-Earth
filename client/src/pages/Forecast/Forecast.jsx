"use client";
import React, { Fragment } from 'react';

import '../../App.css';
import '../Forecast/Forecast.css';

import Navigation from '../../components/Navbar/Navigation';
import SimpleForm from '../../components/ForecastForm/SimpleForm';
import GoogleMap from '../../components/Map/GoogleMap';

function Forecast() {
  return (
    <Fragment> 
        <Navigation></Navigation>
        <div className="map-form-container">
          <SimpleForm></SimpleForm>
          <div className="map-container">
            <GoogleMap></GoogleMap>
          </div>
        </div>
    </Fragment>
  );
}

export default Forecast;