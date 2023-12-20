import React, { useState } from 'react';

const LocationForm = () => {
  const [formData, setFormData] = useState({
    latitude: '',
    longiture: '',
    years: '',
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
      <h2>Parameters</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="laditude" className="form-label">
            Laditude:
          </label>
          <input
            type="text"
            className="form-control"
            id="laditude"
            name="laditude"
            value={formData.laditude}
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
            Years:
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LocationForm;