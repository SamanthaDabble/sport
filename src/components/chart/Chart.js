import React from 'react';
import './Chart.css';
import { Bar } from 'react-chartjs-2';
import { dataOptions } from './ChartConfig';
import 'chartjs-plugin-datalabels';

const Chart = ({ chartId, data }) => {

	let datasets;

	if (chartId === 'Win / Loss') {
		datasets = {
			labels: data.names.slice(0, 10),
			datasets: [
				{
					label: 'Wins',
					data: data.stats.wins.slice(0, 10),
					backgroundColor: 'rgba(75, 192, 192, 0.5)',
					borderColor: 'rgba(75, 192, 192, 1)'
				},
				{
					label: 'Losses',
					data: data.stats.losses.slice(0, 10),
					backgroundColor: 'rgba(255,99,132,0.5)',
					borderColor: 'rgba(255,99,132,1)',
				}
			]
		}
	} else {
		datasets = {
			labels: data.names.slice(0, 10),
			datasets: [ {
				label: chartId,
				data: data.stats.slice(0, 10),
				backgroundColor: 'rgba(75, 192, 192, 0.5)',
				borderColor: 'rgba(75, 192, 192, 1)'
			} ]
		}
	}

	switch (chartId) {
		case 'Win / Loss':
			dataOptions.scales.yAxes[ 0 ].ticks.min = 0;
			dataOptions.scales.yAxes[ 0 ].ticks.max = 16;
			dataOptions.scales.yAxes[ 0 ].ticks.stepSize = 1;
			break;
		case 'Total Yards':
			dataOptions.scales.yAxes[ 0 ].ticks.min = 5750;
			dataOptions.scales.yAxes[ 0 ].ticks.max = 6350;
			dataOptions.scales.yAxes[ 0 ].ticks.stepSize = 50;
			break;
		case 'Total Touchdowns':
			dataOptions.scales.yAxes[ 0 ].ticks.min = 37;
			dataOptions.scales.yAxes[ 0 ].ticks.max = 49;
			dataOptions.scales.yAxes[ 0 ].ticks.stepSize = 1;
			break;
		case 'Turnovers':
			dataOptions.scales.yAxes[ 0 ].ticks.min = 6;
			dataOptions.scales.yAxes[ 0 ].ticks.max = 18;
			dataOptions.scales.yAxes[ 0 ].ticks.stepSize = 1;
			break
		default:
			break;
	}

	return (
		<div id='Chart'>
			{
				<Bar
					height={ 100 }
					data={ datasets }
					options={ dataOptions }
				/>
			}
		</div>
	);
}

export default Chart;

