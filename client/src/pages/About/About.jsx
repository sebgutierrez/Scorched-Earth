"use client";
import React from 'react';
import './About.css';
import '../../App.css';
import Header from '../../components/Header/Header';

const About = () => {
  return (
    <>
      <Header />
      <div className="weather-wizard-container flex flex-col">
        {/* <h1 className="app-title">Weather Wizard</h1> */}
        <h2 className="section-title">Scorched Earth</h2>
        <p className="text-black mt-6">
          Scorched Earth is a machine learning web application for forecasting daily temperature. The main goal of Scorched Earth is to answer the question:
        </p>
        <div className="mt-24 relative">
          <img src="/earth art.png" alt="Clouds with sun rays" className="earth-image" />
          <p className="question text-[#306BF3] font-bold">
            How can we advocate ways to lower emissions and raise awareness of climate change?
          </p>
        </div>
        <p className="technology text-black">
          <b>Technologies:</b> React, Google Maps JavaScript API, Tailwind, Python, Flask, and TensorFlow
        </p>
      </div>
    </>
  );
};

export default About;
