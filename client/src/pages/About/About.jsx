import React from 'react';
import './About.css';
import '../../App.css';
import Header from '../../components/Header/Header';

const About = () => {
  return (
    <>
      <Header />
      <div className="weather-wizard-container">
        <h1 className="app-title">Weather Wizard</h1>
        <h2 className="section-title">Scorched Earth</h2>
        <p className="lorem-ipsum">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img src="clouds-sun-rays.png" alt="Clouds with sun rays" className="clouds-image" />
      </div>
    </>
  );
};

export default About;
