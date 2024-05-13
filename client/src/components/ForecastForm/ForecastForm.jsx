import React, { useState, useEffect } from 'react';
import ForecastDisplay from '../ForecastDisplay/ForecastDisplay';
const ForecastForm = () => {
  const [formLocation, setLocationData] = useState({
    location: ''
  });

  const [formModel, setModelData] = useState({
    model: ''
  });

  const [predictedData, setPredictedData] = useState('');
  const [expectedData, setExpectedData] = useState('');

  const handleInputChange = (e) => {
    if(e.target.name == "location"){
      setLocationData({
        [e.target.name]: e.target.value
      });
    }
    if(e.target.name == "model"){
      setModelData({
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/predict", {
      method: "POST",
      body: JSON.stringify({
        "Location": formLocation.location,
        "Model": formModel.model
      }),
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors"
    })
    .then(data => data.json())
    .then(data => {
      setPredictedData(data['predicted']);
      setExpectedData(data['expected']);
    })
  };

  return (
    <div className="relative bg-white w-1/4">
      <h2 className="text-black text-xl font-semibold pt-6"></h2>
      <form className="px-8 pt-4 flex flex-col justify-between" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="location">
            <p className="text-black text-left">Location:</p>
          </label>
          <select
            type="text"
            className="bg-white px-1 py-1 mb-4 w-full text-slate-500 hover:bg-slate-100 border-2 border-slate-200"
            id="location"
            name="location"
            value={formLocation.location}
            onChange={handleInputChange}
          >
            {/* <option value="Austin, TX, USA">Austin, TX, USA</option> */}
            <option value=""></option>
            <option value="Ulaanbaatar, Mongolia">Ulaanbaatar, Mongolia</option>
          </select>
          <label htmlFor="model">
            <p className="text-black text-left">Model Selection:</p>
          </label>
          <select
            type="text"
            className="bg-white px-1 py-1 w-full text-slate-500 hover:bg-slate-100 border-2 border-slate-200"
            id="model"
            name="model"
            value={formModel.model}
            onChange={handleInputChange}
          >
            <option value=""></option>
            <option value="Linear Regression">Linear Regression</option>
            <option value="LSTM">LSTM</option>
          </select>
        </div>
        <button type="submit" className="bg-[#2C74FF] absolute bottom-6 w-60 ml-0.5 rounded-md py-2 font-bold text-xl text-white">
          Forecast
        </button>
      </form>
      <ForecastDisplay expected={expectedData} predicted={predictedData}></ForecastDisplay>
    </div>
  );
};

export default ForecastForm;