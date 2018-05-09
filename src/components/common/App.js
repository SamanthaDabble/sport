import React, { Component } from 'react';
import './App.css';
import Header from '../common/Header';
import Chart from '../Chart/Chart';
import TopTeamCard from '../TopTeam/TopTeamCard';
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
		if (this.state.chartId !== 'winloss') {

			const wins = sortingFunctions.wins();
			const losses = sortingFunctions.losses();

			this.setState({
				chartId: 'winloss',
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
	}

	handleTotalYardsChart = () => {
		if (this.state.chartId !== 'totalyards') {

			const totalYards = sortingFunctions.total_yards();

			this.setState({
				chartId: 'totalyards',
				data: totalYards
			});
		}
	}

	handle

	render() {

		let topFiveTeams;

		if (this.state.data) {
			topFiveTeams = this.state.data.objects.slice(0, 5);
			console.log(topFiveTeams);
		}


		return (
			<div className='App' >
				<Header
					handleWinLoss={ this.handleWinLossChart }
					handleTotalYards={ this.handleTotalYardsChart }
				/>
				{ this.state.data &&
					<Chart
						chartId={ this.state.chartId }
						data={ this.state.data }
					/>
				}
				<div className='topTeamsCardContainer'>
					{
						topFiveTeams ? (
							topFiveTeams.map(team =>
								<TopTeamCard
									key={ team.team_name }
									team={ team }
									chartId={ this.state.chartId }
								/>
							)
						) : null
					}
				</div>
			</div>
		);
	}
}