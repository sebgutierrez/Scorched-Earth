import React, { useState } from 'react'

const LocationForm = () => {
  const [formData, setFormData] = useState({
    latitude: '',
    longiture: '',
    years: '',
    ssp: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="container mt-4">
      <h2 className="form-heading">Parameters</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="latitude" className="form-label">
            Latitude:
          </label>
          <input
            type="text"
            className="form-control"
            id="latitude"
            name="latitude"
            value={formData.latitude}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="longitude" className="form-label">
            Longitude:
          </label>
          <input
            type="text"
            className="form-control"
            id="longitude"
            name="longitude"
            value={formData.longitude}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="years" className="form-label">
            Target Year (2023 - 2100):
          </label>
          <input
            type="text"
            className="form-control"
            id="years"
            name="years"
            value={formData.years}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ssp" className="form-label">
            Shared Socioeconomic Pathway (SSP):
          </label>
          <select
            type="text"
            className="form-control"
            id="ssp"
            name="ssp"
            value={formData.ssp}
            onChange={handleInputChange}
          >
            <option value="SSP126">SSP1-2.6</option>
            <option value="SSP245">SSP2-4.5</option>
            <option value="SSP460">SSP4-6.0</option>
            <option value="SSP585">SSP5-8.5</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LocationForm;