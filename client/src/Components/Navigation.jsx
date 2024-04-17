import React, { Fragment, useState } from 'react'

const navigationBar = () => {
	return (
		<Fragment>
			<div className="header">
					<span className="logo">Scorched Earth</span>
					<nav className="navbar">
						<ul className="nav-list">
							<li className="menu-item-container">
								<a href="#" className="menu-item">Home</a>
							</li>
							<li className="menu-item-container">
								<a href="#" className="menu-item">About</a>
							</li>
							<li className="menu-item-container">  
								<a href="#" className="menu-item">Team</a>
							</li>
						</ul>
					</nav>
			</div>
		</Fragment>
	  );
};

export default navigationBar;
