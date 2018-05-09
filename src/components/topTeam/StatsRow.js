import React from 'react';
import './StatsRow.css';

export default function StatsRow({ team, chart }) {
	switch (chart) {
		case 'winloss':
			return (
				<div className='StatsRow'>
					<h5 className='mainStats'>
						Wins: { team.wins }
					</h5>
					<hr />
					<h5 className='mainStats'>
						Losses: { team.losses }
					</h5>
				</div>
			);
		case 'totalyards':
			return (
				<div className='StatsRow'>
					<h5 className='mainStats'>
						{ team.total_yards }
						<br />
						Total Yards
					</h5>
					<hr />
					<div className='subStats'>
						Passing: { team.passing.total_passing_yards }
						<br />
						Rushing: { team.rushing.total_rushing_yards }
						<br />
						Penalty: { team.total_penalty_yards }
					</div>
				</div>
			);
		default:
			return (
				<div>
					Error getting stats
				</div>
			);
	}
}
