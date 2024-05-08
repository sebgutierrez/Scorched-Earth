"use client";
import React, { Fragment } from 'react';

import '../Home/Home.css';
import { Link } from "react-router-dom";

function Home(){
    return (
        <Fragment>
            <div className="cover-content">
                <div className="team-name-container">
                    <h1 className="team-name">Weather Wizards</h1>
                </div>
                <div className="project-content">
                    <h2>Scorched Earth</h2>
                    <img src="./src/assets/cloud.svg" alt="cloud" />
                </div>
                <div className="project-nav">
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/forecast">FORECAST</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><Link to="/team">TEAM</Link></li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );

}

export default Home;