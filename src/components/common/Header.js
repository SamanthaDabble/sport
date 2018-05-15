import React from 'react';
import './Header.css';

const Header = ({ handleWinLoss, handleTotalYards, handleTotalTouchdowns, handleTotalTurnovers }) => (
	<div className='header'>

		<div className='img-container'>
			<img src='images/nfl_logo.png' alt="NFL Logo" />
		</div>

		<nav className='navBar'>
			<input
				className='navButton'
				type='button'
				value='Win/Loss'
				onClick={ handleWinLoss }
			/>
			<input
				className='navButton'
				type='button'
				value='Yards'
				onClick={ handleTotalYards }
			/>
			<input
				className='navButton'
				type='button'
				value='Touchdowns'
				onClick={ handleTotalTouchdowns }
			/>
			<input
				className='navButton'
				type='button'
				value='Turnovers'
				onClick={ handleTotalTurnovers }
			/>
		</nav>
	</div>
);

export default Header;
