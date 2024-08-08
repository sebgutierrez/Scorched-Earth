import React, { useState, useRef, useEffect } from 'react';

const ForecastForm = (props) => {
  const [formRegion, setRegionData] = useState({
    fullRegionName: '',
    shortRegionName: ''
  });

  const [formModel, setModelData] = useState({
    fullModelName: '',
    shortModelName: ''
  });

  const [predictedData, setPredictedData] = useState('');
  const [expectedData, setExpectedData] = useState('');

  const handleInputChange = (e) => {
    if(e.target.name == "region"){
      setRegionData({
        fullRegionName: e.target.value,
        shortRegionName: e.target.name
      });
    }
    if(e.target.name == "model"){
      setModelData({
        fullModelName: e.target.value,
        shortModelName: e.target.name
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formRegion.fullRegionName !== '' && formModel.fullModelName !== ''){
      fetch("http://localhost:5000/predict", {
        method: "POST",
        body: JSON.stringify({
          "region": formRegion.shortRegionName,
          "model": formModel.shortModelName
        }),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors"
      })
      .then(data => data.json())
      .then(data => {
        setPredictedData(data.get('predicted'));
        setExpectedData(data.get('expected'));
      });
      props.setModelInfo({
        regionName: formRegion.fullRegionName,
        modelName: formModel.fullModelName
      });
    }
  };

  return (
    <div className="relative flex justify-center w-full bg-white min-h-[300px] lg:h-auto border-2 border-t-2 md:border-t-0 md:border-b-0 md:border-r-0 rounded-t-none rounded-b-lg md:rounded-br-lg md:rounded-l-none">
      <div className='flex w-full '>
        <form className="px-8 pt-8 w-full flex flex-col justify-between h-full" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="region">
              <p className="text-black text-left">Region</p>
            </label>
            <select
              type="text"
              className="bg-white px-1 py-1 mb-4 w-full text-slate-500 hover:bg-gray-50 border-2 border-slate-200"
              id="region"
              name="region"
              value={formRegion.fullRegionName}
              onChange={handleInputChange}
            >
              <option value=""></option>
              {/* <option value="Austin, TX, USA">Austin, TX, USA</option> */}
              <option value="Ulaanbaatar, Mongolia" name="mongolia">Ulaanbaatar, Mongolia</option>
            </select>
            <label htmlFor="model">
              <p className="text-black text-left">Model</p>
            </label>
            <select
              type="text"
              className="bg-white px-1 py-1 w-full text-slate-500 hover:bg-gray-50 border-2 border-slate-200"
              id="model"
              name="model"
              value={formModel.fullModelName}
              onChange={handleInputChange}
            >
              <option value=""></option>
              <option value="Long Short-Term Memory" name="lstm">Long Short-Term Memory (LSTM)</option>
            </select>
          </div>
          {
            (formRegion.fullRegionName === '' || formModel.fullModelName === '') 
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