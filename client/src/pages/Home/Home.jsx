"use client";
import React, { Fragment } from 'react';

import '../../App.css';
import '../Home/Home.css';
import { Link } from "react-router-dom";

function Home(){
    return (
        <Fragment>
            <div className="cover-content">
                <div className="team-name-container">
                    <h1>Team 8</h1>
                </div>
                <div className="project-content">
                    <h2>Weather Wizard</h2>
                    <img src="./src/assets/cloud.jpg" alt="cloud" />
                </div>
                <div className="project-nav">
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="about">ABOUT</Link></li>
                        <li><Link to="contact">CONTACT</Link></li>
                        <li><Link to="app">APP</Link></li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );

}

export default Home;