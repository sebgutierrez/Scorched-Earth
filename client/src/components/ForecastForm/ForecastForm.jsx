import React, { useState, useRef, useEffect } from 'react';

const ForecastForm = (props) => {
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
    if(formLocation.location !== '' && formModel.model !== ''){
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
      });
      props.setModelInfo({
        location: formLocation.location,
        model: formModel.model
      });
    }
  };

  return (
    <div className="relative flex justify-center bg-white w-full min-h-[300px] lg:h-auto z-1">
      <div className='flex w-full'>
        <form className="px-8 pt-8 w-full flex flex-col justify-between h-full border-2 border-t-2 md:border-t-0 md:border-b-0 rounded-t-none rounded-b-md md:rounded-br-md md:rounded-l-none border-slate-200" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="location">
              <p className="text-black text-left">Location</p>
            </label>
            <select
              type="text"
              className="bg-white px-1 py-1 mb-4 w-full text-slate-500 hover:bg-gray-50 border-2 border-slate-200"
              id="location"
              name="location"
              value={formLocation.location}
              onChange={handleInputChange}
            >
              <option value=""></option>
              <option value="Austin, TX, USA">Austin, TX, USA</option>
              {/* <option value="Ulaanbaatar, Mongolia">Ulaanbaatar, Mongolia</option> */}
            </select>
            <label htmlFor="model">
              <p className="text-black text-left">Model</p>
            </label>
            <select
              type="text"
              className="bg-white px-1 py-1 w-full text-slate-500 hover:bg-gray-50 border-2 border-slate-200"
              id="model"
              name="model"
              value={formModel.model}
              onChange={handleInputChange}
            >
              <option value=""></option>
              <option value="LSTM">LSTM</option>
            </select>
          </div>
          {
            (formLocation.location === '' || formModel.model === '') 
                        ? 
                        (<button type="submit" className="bg-slate-100 border-slate-200 border-2 mb-6 rounded-md py-2 font-bold text-xl text-slate-400 cursor-not-allowed">
                          Forecast
                        </button>)
                        :
                        (<button type="submit" className="bg-[#2C74FF] border-[#2C74FF] hover:bg-[#083999] hover:border-[#083999] border-2 mb-6 rounded-md py-2 font-bold text-xl text-white cursor-pointer">
                          Forecast
                        </button>)
          }
        </form>
      </div>
  
    </div>
  );
};

export default ForecastForm;