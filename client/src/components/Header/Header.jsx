import React, { Fragment, useState } from 'react'
import '../../App.css';
import './Header.css';
import LogoIdeas from '../LogoIdeas/LogoIdeas';
import { Link } from 'react-router-dom'; // substitutes <a> tags

const Header = () => {
	return (
		<Fragment>
			<header className="header">
				<LogoIdeas></LogoIdeas>
				<nav className="navbar">
					<ul className="nav-list">
						<li className="menu-item-container">
							<Link to='/' className="menu-item">Home</Link>
						</li>
						<li className="menu-item-container">
							<Link to='/forecast' className="menu-item">Forecast</Link>
						</li>
						<li className="menu-item-container">  
							<Link to='/about' className="menu-item">About</Link>
						</li>
						<li className="menu-item-container">  
							<Link to='/team' className="menu-item">Team</Link>
						</li>
					</ul>
				</nav>
			</header>
		</Fragment>
	  );
};

export default Header;
