import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';

class Chart extends Component {
	constructor(props) {
		super(props);

		this.state = {
         chartData: props.chartData
      };
	} // END OF CONSTRUCTOR METHOD

   static defaultProps = {
      displayTitle: true,
      fontSizeTitle: 36,
      fontColor: '#333',
      displayLegend: true,
      legendPosition: 'top',
      location: 'City',
      animationDuration: 2000,
      drawOnChartArea: false,
      yWinLossMin: 0,
      yWinLossMax: 16,
      yWinLossStep: 1,
      yFontSize: 14,
      xFontSize: 18,
      gridLinesColor: 'rgba(0,0,0,0.4)',
      chartTotalHeight: 125,
      titlePadding: 10,
   };

	render() {
      defaults.global.defaultFontFamily = 'monospace';
      defaults.global.defaultFontColor = this.props.fontColor;

		var chartContainerStyle = {
			width: '90%',
		   margin: 'auto',
		}

		return (
			<div style={ chartContainerStyle }>
				<Bar
               height={ this.props.chartTotalHeight }
					data={ this.state.chartData }
					options={
						{
                     animation: {
                        duration: this.props.animationDuration,
                     },
							title: {
                        display: this.props.displayTitle ,
								text: `NFL Team ${ this.props.measurement }`,
								fontSize: this.props.fontSizeTitle,
                        padding: this.props.titlePadding,
							},
							legend: {
                        display: this.props.displayLegend,
                        position: this.props.legendPosition,
							},
                     scales: {
                        yAxes: [{
                           display: true,
                           label: 'Wins',
                           ticks: {
                              fontSize: this.props.yFontSize,
                              min: this.props.yWinLossMin,
                              max: this.props.yWinLossMax,
                              stepSize: this.props.yWinLossStep,
                           },
                           gridLines: {
                              drawOnChartArea: this.props.drawOnChartArea,
                              color: this.props.gridLinesColor,
                           },
                        }],
                        xAxes: [{
                           //stacked: true,
                           ticks: {
                              fontSize: this.props.xFontSize,
                           },
                           gridLines: {
                              drawOnChartArea: this.props.drawOnChartArea,
                              color: this.props.gridLinesColor,
                           },
                        }]
                     }
						}
					}
				/>
			</div>
		);
	}
}

export default Chart;
