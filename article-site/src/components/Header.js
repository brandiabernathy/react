import React from 'react';
import logo from './../logo.svg';
import './Header.css';

class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<div className="wrapper">
					<img className="logo" src={logo} />
					<nav>
						<a href="#">Entertainment</a>
						<a href="#">Life</a>
						<a href="#">Travel</a>
					</nav>
				</div>
			</header>
		)
	}
}

export default Header;