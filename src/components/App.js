import React, { Component } from 'react';
import Chart from './Chart';
import logo from './../images/nfl-logo.png';
import TopTeamsContainer from './TopTeamsContainer';
import './App.css';
var fileData = require('../data.json');

var patsLogo = require('../images/newengland_patriots.png');
var eaglesLogo = require('../images/philadelphia_eagles.png');
var vikingLogo = require('../images/minnesota_vikings.png');
var steelersLogo = require('../images/pittsburgh_steelers.png');
var ramsLogo = require('../images/losangeles_rams.png');

var saintsLogo = require('../images/neworleans_saints.png');
var panthersLogo = require('../images/carolina_panthers.png');

var logoArr = [ patsLogo, eaglesLogo, vikingLogo, steelersLogo, ramsLogo, saintsLogo, panthersLogo]

console.log(fileData);

class App extends Component {
	state = {
		charData: {}
	}

	componentWillMount() {
		this.getChartData();
	}

	getChartData = () => {
		// MAKE AJAX CALL IN HERE
		this.setState({
			chartData: fileData
		});
	}

	render() {
		return (
			<div className='App'>
				<div className='header'>
					<div className='img-container'>
						<img src={ logo } alt="NFL Logo" />
					</div>
				</div>
				<Chart
					chartData={ this.state.chartData }
					measurement='Standings'
				/>
				<TopTeamsContainer teams={ fileData.labels } logos={ logoArr } />
			</div>
		);
	}
}

export default App;
