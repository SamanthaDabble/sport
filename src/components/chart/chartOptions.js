export const defaultProps = {
	paddingTop: 50,
	displayTitle: false,
	fontSizeTitle: 36,
	fontColor: '#333',
	displayLegend: true,
	legendPosition: 'right',
	location: 'City',
	animationDuration: 1000,
	drawOnChartArea: false,
	// yAxesMin: 0, //For Total Yards Chart
	// yAxesMax: 16, //For Total Yards Chart
	//yAxesStep: 1,
	datalabelsFontSize: 18,
	yFontSize: 16,
	xFontSize: 20,
	gridLinesColor: 'rgba(0,0,0,0.4)',
	chartTotalHeight: 150,
	titlePadding: 10,
};

export const dataOptions = {
	layout: {
		padding: {
			top: defaultProps.paddingTop,
		}
	},
	plugins: {
		datalabels: {
			anchor: 'end',
			align: 'top',
			font: {
				size: defaultProps.datalabelsFontSize,
			}
		}
	},
	tooltips: {
		mode: 'nearest'
	},
	animation: {
		duration: defaultProps.animationDuration,
	},
	legend: {
		display: defaultProps.displayLegend,
		position: defaultProps.legendPosition,
	},
	scales: {
		yAxes: [ {
			stacked: true,
			display: true,
			label: '',
			ticks: {
				fontSize: defaultProps.yFontSize,
				min: defaultProps.yAxesMin,
				max: defaultProps.yAxesMax,
				stepSize: defaultProps.yAxesStep,
			},
			gridLines: {
				drawOnChartArea: defaultProps.drawOnChartArea,
				color: defaultProps.gridLinesColor,
			},
		} ],
		xAxes: [ {
			stacked: true,
			ticks: {
				fontSize: defaultProps.xFontSize,
			},
			gridLines: {
				drawOnChartArea: defaultProps.drawOnChartArea,
				color: defaultProps.gridLinesColor,
			},
		} ],
	}
};

export const bgColors = [
	'rgba(54, 162, 235, 0.5)',
	'rgba(255,99,132, 0.5)',
	'rgba(255, 206, 86, 0.5)',
	'rgba(75, 192, 192, 0.5)',
	'rgba(153, 102, 255, 0.5)',
	'rgba(255, 159, 64, 0.5)',
	'rgba(75, 192, 192, 0.5)'
]

export const borderColors = [
	'rgba(54, 162, 235, 1)',
	'rgba(255,99,132, 1)',
	'rgba(255, 206, 86, 1)',
	'rgba(75, 192, 192, 1)',
	'rgba(153, 102, 255, 1)',
	'rgba(255, 159, 64, 1)',
]