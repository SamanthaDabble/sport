import React, { Component } from 'react';
import './TopTeam.css';

class TopTeamsContainer extends Component {
	render() {

		return (
			<div className='teamContainer' >
				<div className='logoContainer' >
					<img className='logo' src={ this.props.logo } alt='logo' />
				</div>
				<div className='teamNameBadge'>
					{ this.props.teamName }
				</div>
				<div className='stats'>
					<h4> Stats </h4>
				</div>
			</div>
		);
	}
}

export default TopTeamsContainer;
