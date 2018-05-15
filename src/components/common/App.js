import React, { Component } from 'react';
import './App.css';
import Header from '../common/Header';
import Chart from '../chart/Chart';
import TopTeamCard from '../topTeam/TopTeamCard';
import sortingFunctions from '../sortingFunctions.js';

export default class App extends Component {

	state = {
		chartId: '',
		data: null
	}

	componentDidMount() {
		this.handleWinLossChart();
	}

	handleWinLossChart = () => {
		if (this.state.chartId === 'Win / Loss') return;

		const wins = sortingFunctions.wins();
		const losses = sortingFunctions.losses();

		this.setState({
			chartId: 'Win / Loss',
			data: {
				names: wins.names,
				objects: wins.objects,
				stats: {
					wins: wins.stats,
					losses: losses.stats
				}
			}
		});
	}

	handleTotalYardsChart = () => {
		if (this.state.chartId === 'Total Yards') return;

		const totalYards = sortingFunctions.total_yards();

		this.setState({
			chartId: 'Total Yards',
			data: totalYards
		});
	}

	handleTotalTouchdownsChart = () => {
		if (this.state.chartId === 'Total Touchdowns') return;

		const totalTouchdowns = sortingFunctions.total_touchdowns();

		this.setState({
			chartId: 'Total Touchdowns',
			data: totalTouchdowns
		});
	}

	handleTurnoversChart = () => {
		if (this.state.chartId === 'Turnovers') return;

		const turnovers = sortingFunctions.plus_minus();

		this.setState({
			chartId: 'Turnovers',
			data: turnovers
		});
	}

	render() {
		return (
			<div className='App' >
				<Header
					handleWinLoss={ this.handleWinLossChart }
					handleTotalYards={ this.handleTotalYardsChart }
					handleTotalTouchdowns={ this.handleTotalTouchdownsChart }
					handleTotalTurnovers={ this.handleTurnoversChart }
				/>
				{ this.state.data &&
					<Chart
						chartId={ this.state.chartId }
						data={ this.state.data }
					/>
				}
				<div className='topTeamsCardContainer'>
					{ this.state.data &&
						this.state.data.objects.slice(0, 5).map(team =>
							<TopTeamCard
								key={ team.team_name }
								team={ team }
								chartId={ this.state.chartId }
							/>
						)
					}
				</div>
			</div>
		);
	}
}