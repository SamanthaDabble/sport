import React from 'react';
import './StatsRow.css';

export default function StatsRow({ team, chart }) {
	switch (chart) {
		case 'Win / Loss':
			return (
				<div className='StatsRow'>
					<h5 className='mainStats'>
						Wins: { team.wins }
					</h5>
					<h5 className='mainStats'>
						Losses: { team.losses }
					</h5>
				</div>
			);
		case 'Total Yards':
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
		case 'Total Touchdowns':
			return (
				<div className='StatsRow'>
					<h5 className='mainStats'>
						{ team.rushing.total_rushing_touchdowns + team.passing.total_passing_touchdowns }
						<br />
						Total Touchdowns
					</h5>

					<hr />

					<div className='subStats'>
						Passing: { team.passing.total_passing_touchdowns }
						<br />
						Rushing: { team.rushing.total_rushing_touchdowns }
					</div>
				</div>
			)
		case 'Turnovers':
			const interceptionL = team.turnovers.giveaways.interceptions;
			const fumbleL = team.turnovers.giveaways.fumble_losses;

			const interceptionW = team.turnovers.takeaways.interceptions;
			const fumbleW = team.turnovers.takeaways.fumble_recoveries;

			return (
				<div className='StatsRow'>
					<h5 className='mainStats'>
						{ (interceptionW + fumbleW) - (interceptionL + fumbleL) }
						<br />
						+ / -
					</h5>

					<hr />

					<div className='subStats'>
						( + ) Interceptions: { interceptionW }
						<br />
						( + ) Fumbles: { fumbleW }
						<hr />
						( - ) Interceptions: { interceptionL }
						<br />
						( - ) Fumbles: { fumbleL }
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
