import React, { Fragment, useState } from 'react'
import '../../App.css';
import './Header.css';
import { Link } from 'react-router-dom'; // substitutes <a> tags

const Header = () => {
	return (
		<Fragment>
			<header className="header">
				<span className="logo">Scorched Earth</span>
				<nav className="navbar">
					<ul className="nav-list">
						<li className="menu-item-container">
							<Link to='/' className="menu-item">Home</Link>
						</li>
						<li className="menu-item-container">
							<Link to='/' className="menu-item">Forecast</Link>
						</li>
						<li className="menu-item-container">  
							<Link to='/' className="menu-item">About</Link>
						</li>
						<li className="menu-item-container">  
							<Link to='/' className="menu-item">Team</Link>
						</li>
					</ul>
				</nav>
			</header>
		</Fragment>
	  );
};

export default Header;
