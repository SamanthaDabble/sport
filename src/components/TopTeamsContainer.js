import React, { Component } from 'react';
import TopTeam from './TopTeam';

class TopTeamsContainer extends Component {
	render() {

		var topTeamsContainerStyle = {
			width: '97.5%',
			margin: '2.5% 1.25%',
			display: 'flex',
		};

		return (
			<div className='topTeamsContainer' style={ topTeamsContainerStyle }>
				<TopTeam teamName={ this.props.teams[0] } logo={ this.props.logos[0] } />
				<TopTeam teamName={ this.props.teams[1] } logo={ this.props.logos[1] } />
				<TopTeam teamName={ this.props.teams[2] } logo={ this.props.logos[2] } />
				<TopTeam teamName={ this.props.teams[3] } logo={ this.props.logos[3] } />
				<TopTeam teamName={ this.props.teams[4] } logo={ this.props.logos[4] } />
			</div>
		);
	}
}

export default TopTeamsContainer;
