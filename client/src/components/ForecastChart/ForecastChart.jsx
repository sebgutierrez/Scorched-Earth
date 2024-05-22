import React, { useState } from "react";
import Chart from "react-apexcharts";
import './ForecastChart.css';

const ForecastChart = (props) => {
	const [options, setOptions] = useState({
		options: {
			chart: {
				id: "line",
				type: "line",
				toolbar: {
					show: false,
					tools: {
						download: false,
						selection: false,
						zoom: false,
						zoomin: false,
						zoomout: false,
						pan: false,
						reset: false
					}
				},
				zoom: false,
				animations: {
					enabled: false,
					dynamicAnimation: {
						enabled: true,
						speed: 350
					},
				},
				events: {
					mounted: function(chartContext, config){
						setTimeout(() => {
							this.width = '100%'
						}, 100) 
					}
				}
			},
			grid: {
				strokeDashArray: 2,
			},
			legend: {
				position: 'top',
				offsetX: 30,
				offsetY: 16
			},
			xaxis: {
				type: "datetime",
				tickPlacement: 'on',
				min: new Date("2023-12-24").getTime() - 0*3.6e+6,
				max: new Date("2024-01-05").getTime() + 6*3.6e+6,
				labels: {
					offsetX: 0,
         			offsetY: 0,
					datetimeUTC: true,
					datetimeFormatter: {
						year: 'yyyy',
						month: "MMM dd",
						day: 'MMM dd',
					},
				},
				axisTicks: {
					offsetX: 0,
         			offsetY: 0,
				},
			},
			yaxis: {
					title: {
						text: "Avg. Temperature (°F)",
						style: {
						color: "#000000",
						fontWeight: '500'
						}
					},
					labels: {
						formatter: (value) => { return `${value}°F` }
						},
			},
			tooltip: {
				enabled: true,
				shared: true,
				followCursor: false,
				x: {
					format: 'MMM dd'
				},
				fixed: {
					enabled: true,
					offsetX: 0,
					offsetY: 0,
				},
				custom: function({ series, seriesIndex, dataPointIndex, w }) { 
					const hoverXaxis = w.globals.seriesX[seriesIndex][dataPointIndex]; 
					const hoverIndexes = w.globals.seriesX.map((seriesX) => {
						return seriesX.findIndex((xData) => xData === hoverXaxis);
					});
		
					let hoverList = "";
					hoverIndexes.forEach((hoverIndex, seriesEachIndex) => {
						if (hoverIndex >= 0 && w.globals.collapsedSeriesIndices.includes(seriesEachIndex) === false) {
							hoverList += `
								<div class="apexcharts-tooltip-series-group apexcharts-active" style="order: 1; display: flex;">
									<span class="apexcharts-tooltip-marker" style="background-color: ${
										w.globals.markers.colors[seriesEachIndex]
									};"></span>
									<div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">
										<div class="apexcharts-tooltip-y-group">
											<span class="apexcharts-tooltip-text-y-label">${
												w.globals.seriesNames[seriesEachIndex]
											}: </span>
											<span class="apexcharts-tooltip-text-y-value">${w.globals.yLabelFormatters[0](
												series[seriesEachIndex][hoverIndex]
											)}</span>
										</div>
									</div>
								</div>`;
						}
					});
					const parsed = new Date(hoverXaxis)
						.toUTCString()
						.split(" ")
						.slice(1);
					return `<div class="apexcharts-tooltip-title" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">${
						parsed[1] + " " + parsed[0] + " " + parsed[2]
					}</div>${hoverList}`;
				},
			},
			stroke: {
				curve: 'smooth'
			}
		}
	});
	const [series, setSeries] = useState({
		series: [
			{
			  name: "OpenWeather Model",
			  data: props.openWeatherData.f.map((data, key) => {
					return ({
						x: data[0],
						y: data[1].toFixed(1)
					});
				})
			},
			{
			  name: "Model",
			  data: props.modelData.f.map((data, key) => {
					return ({
						x: data[0],
						y: data[1].toFixed(1)
					});
				})
			},
		  ]
	});

	const [prevIsCelsius, setPrevIsCelsius] = useState(props.isCelsius);
	function flipIsCelsius(){
		setOptions({
			options: {
				...options.options,
				dataLabels: {
					...options.options.dataLabels,
					formatter: (value) => { 
						if (props.isCelsius){
							return `${value}°C`;
						}
						else{
							return `${value}°F`;
						}
					}
				},
				yaxis: {
					title: {
						...options.options.yaxis.title,
						text: props.isCelsius ? "Avg. Temperature (°C)" : "Avg. Temperature (°F)",
					},
					labels: {
						...options.options.yaxis.labels,
						formatter: (value) => { 
							if (props.isCelsius){
								return `${value}°C`;
							}
							else{
								return `${value}°F`;
							}
						},
					}
				}
			}
		});
		if(props.isCelsius){
			setSeries({
				series: [
					{
					  name: "OpenWeather Model",
					  data: props.openWeatherData.c.map((data, key) => {
							return ({
								x: data[0],
								y: data[1].toFixed(1)
							});
						})
					},
					{
					  name: "Model",
					  data: props.modelData.c.map((data, key) => {
							return ({
								x: data[0],
								y: data[1].toFixed(1)
							});
						})
					},
				  ]
			});
		}
		else{
			setSeries({
				series: [
					{
					  name: "OpenWeather Model",
					  data: props.openWeatherData.f.map((data, key) => {
							return ({
								x: data[0],
								y: data[1].toFixed(1)
							});
						})
					},
					{
					  name: "Model",
					  data: props.modelData.f.map((data, key) => {
							return ({
								x: data[0],
								y: data[1].toFixed(1)
							});
						})
					},
				  ]
			});
		}
	}
	if (props.isCelsius !== prevIsCelsius) {
	  setPrevIsCelsius(props.isCelsius);
	  flipIsCelsius();
	}
	return (
		<div className="w-full border-2 px-2 rounded-md">
			<Chart
				className=""
				options={options.options}
				series={series.series}
				type="line"
				width="100%"
				height="250px"
			/>
		</div>
  	);
}
export default ForecastChart;