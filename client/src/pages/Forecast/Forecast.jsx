"use client";
import React, { Fragment } from 'react';

import '../../App.css';
import '../Forecast/Forecast.css';

import Header from '../../components/Header/Header';
import ForecastForm from '../../components/ForecastForm/ForecastForm';
import GoogleMap from '../../components/Map/GoogleMap';

function Forecast() {

  return (
    <Fragment> 
        <Header></Header>
        <div className="map-form-container">
          <ForecastForm></ForecastForm>
          <div className="map-container">
            <GoogleMap></GoogleMap>
          </div>
        </div>
    </Fragment>
  );
}

export default Forecast;