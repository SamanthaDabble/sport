import React from 'react';
import './Chart.css';
import { Bar } from 'react-chartjs-2';
import { dataOptions } from './chartOptions';
import 'chartjs-plugin-datalabels';

const Chart = ({ chartId, data }) => {
	console.log(data);
	console.log(chartId);

	let datasets;

	if (chartId === 'winloss') {
		datasets = {
			labels: data.names.slice(0, 10),
			datasets: [
				{
					label: 'wins',
					data: data.stats.wins.slice(0, 10),
					backgroundColor: 'rgba(75, 192, 192, 0.5)',
					borderColor: 'rgba(75, 192, 192, 1)'
				},
				{
					label: 'losses',
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
		case 'winloss':
			dataOptions.scales.yAxes[ 0 ].ticks.min = 0;
			dataOptions.scales.yAxes[ 0 ].ticks.max = 16;
			break;
		case 'totalyards':
			dataOptions.scales.yAxes[ 0 ].ticks.min = 5700;
			dataOptions.scales.yAxes[ 0 ].ticks.max = 6400;
			break;
		default:
			break;
	}

	return (
		<div id='Chart'>
			{
				<Bar
					height={ 125 }
					data={ datasets }
					options={ dataOptions }
				/>
			}
		</div>
	);
}

export default Chart;

