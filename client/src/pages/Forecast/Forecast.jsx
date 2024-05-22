"use client";
import React, { Fragment } from 'react';

import '../../App.css';
import '../Forecast/Forecast.css';

import Header from '../../components/Header/Header';
import ForecastForm from '../../components/ForecastForm/ForecastForm';
import GoogleMap from '../../components/Map/GoogleMap';
import SectionContainer from '../../components/SectionContainer/SectionContainer';

function Forecast() {

  return (
    <Fragment> 
        <Header></Header>
        <div className="flex relative">
          <ForecastForm></ForecastForm>
          <div className="flex flex-col w-[80vw] bg-slate-200">
            <GoogleMap></GoogleMap>
            <SectionContainer></SectionContainer>
          </div>
        </div>
    </Fragment>
  );
}

export default Forecast;