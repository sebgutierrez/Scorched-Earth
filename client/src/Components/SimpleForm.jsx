import React, { useState } from 'react';

const LocationForm = () => {
  const [formData, setFormData] = useState({
    Location: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="relative bg-white w-1/4">
      <h2 className="text-black text-xl font-semibold pt-6">Model Selection</h2>
      <form className="px-8 pt-4 flex flex-col h-5/6 justify-between" onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="location">
            <p className="text-black text-left">Location:</p>
          </label>
          <select
            type="text"
            className="bg-white px-1 py-1 w-full text-slate-500 hover:bg-slate-100 border-2 border-slate-200"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          >
            <option value="Austin">Austin, TX</option>
            <option value="Mongolia">Ulaanbaatar, Mongolia</option>
          </select>
        </div>
        <button type="submit" className="bg-[#2C74FF] absolute bottom-6 w-60 ml-0.5 rounded-md py-2 font-bold text-xl text-white">
          Forecast
        </button>
      </form>
    </div>
  );
};

export default LocationForm;