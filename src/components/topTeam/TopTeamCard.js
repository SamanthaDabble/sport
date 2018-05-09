import React from 'react';
import './TopTeamCard.css';
import StatsRow from './StatsRow';

export default function TopTeamCard({ team, chartId }) {

	const teamName = team.team_name;
	const logo = team.logo_path;

	return (
		<div className='teamContainer' >
			<div className='logoContainer' >
				<img className='logo' src={ logo } alt='logo' />
			</div>
			<div className='teamNameBadge'>
				{ teamName }
			</div>
			<StatsRow className='stats' team={ team } chart={ chartId } />
		</div>
	);

}