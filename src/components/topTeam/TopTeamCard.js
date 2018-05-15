import React from 'react';
import './TopTeamCard.css';
import StatsRow from './StatsRow';

const TopTeamCard = ({ team, chartId }) => (
	<div className='teamContainer'>
		<div className='logoContainer'>
			<img
				className='logo'
				src={ team.logo_path }
				alt='logo'
			/>
		</div>
		<div className='teamNameBadge'>
			{ team.team_name }
		</div>
		<StatsRow
			className='stats'
			team={ team }
			chart={ chartId }
		/>
	</div>
);

export default TopTeamCard;