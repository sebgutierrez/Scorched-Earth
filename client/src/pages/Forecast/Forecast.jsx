"use client";
import React, { Fragment } from 'react';

import '../../App.css';
import '../Forecast/Forecast.css';

import Header from '../../components/Header/Header';
import SimpleForm from '../../components/ForecastForm/SimpleForm';
import GoogleMap from '../../components/Map/GoogleMap';

function Forecast() {
  // test commit
  return (
    <Fragment> 
        <Header></Header>
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