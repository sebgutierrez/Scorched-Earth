import React, { useState, useEffect } from 'react';

const LocationForm = () => {
  const [formData, setFormData] = useState({
    Location: 'Austin, TX',
    Model: 'Linear Regression'
  });

  const [predictData, setPredictData] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/predict")
    .then(x => x.json())
    .then(x => {
      console.log(x);
      console.log(`${x.predictions[0]}`);
      setPredictData(`${x.predictions[0]}`)
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
            value={formData.Location}
            onChange={handleInputChange}
          >
            <option value="Austin">Austin, TX</option>
            <option value="Mongolia">Ulaanbaatar, Mongolia</option>
          </select>
          <label htmlFor="model">
            <p className="text-black text-left">Model Selection:</p>
          </label>
          <select
            type="text"
            className="bg-white px-1 py-1 w-full text-slate-500 hover:bg-slate-100 border-2 border-slate-200"
            id="model"
            name="model"
            value={formData.Model}
            onChange={handleInputChange}
          >
            <option value="Linear">Linear Regression</option>
            <option value="LSTM">LSTM</option>
          </select>
        </div>
        <button type="submit" className="bg-[#2C74FF] absolute bottom-6 w-60 ml-0.5 rounded-md py-2 font-bold text-xl text-white">
          Forecast
        </button>
      </form>
      <div className="relative bg-white w-full px-8 mt-44 flex flex-col justify-center"> 
        <h2 className="flex w-full justify-center text-[#306BF3] pb-3">Lag Time:</h2>
        <ol className="flex gap-x-4 w-64 overflow-x-scroll">
          <li className="flex flex-col">
            <span className="text-black">Dec 24</span>
            <span className="text-black">0.9&deg;F</span>
          </li>
          <li className="flex flex-col">
            <span className="text-black">Dec 25</span>
            <span className="text-black">-0.1&deg;F</span>
          </li>
          <li className="flex flex-col">
            <span className="text-black">Dec 26</span>
            <span className="text-black">-3.5&deg;F</span>
          </li>
          <li className="flex flex-col">
            <span className="text-black">Dec 27</span>
            <span className="text-black">4.3&deg;F</span>
          </li>
          <li className="flex flex-col">
            <span className="text-black">Dec 28</span>
            <span className="text-black">7.2&deg;F</span>
          </li>
          <li className="flex flex-col">
            <span className="text-black">Dec 29</span>
            <span className="text-black">10.9&deg;F</span>
          </li>
          <li className="flex flex-col">
            <span className="text-black">Dec 30</span>
            <span className="text-black">4.7&deg;F</span>
          </li>
        </ol>
        <div className="flex flex-col mt-6">
          <span className="text-black flex justify-center">Dec 31</span>
          <div className="flex flex-col pt-4">
            <span className="text-[#306BF3]">Predicted: <span className="text-black">{predictData}&deg;F</span></span>
            <span className="text-[#306BF3]">Real: <span className="text-black">7.7&deg;F</span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationForm;