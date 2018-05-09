import React from 'react';
import './Header.css';

const Header = ({ handleWinLoss, handleTotalYards }) => {

	return (
		<div className='header'>
			<div className='img-container'>
				<img src='images/nfl_logo.png' alt="NFL Logo" />
			</div>
			<nav className='navBar'>
				<input
					className='navButton'
					type='button'
					value='Win Loss'
					onClick={ handleWinLoss }
				/>
				<input
					className='navButton'
					type='button'
					value='Total Yards'
					onClick={ handleTotalYards }
				/>
			</nav>
		</div>
	);
}

export default Header;
