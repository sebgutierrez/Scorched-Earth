import React, { useState, useRef } from "react";
import Chart from "react-apexcharts";
import './HistoricalChart.css';

const HistoricalChart = (props) => {
	const [options, setOptions] = useState({
		options: {
			chart: {
				id: "area",
				type: "area",
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
				},
				events: {
					mounted: (chart) => {
					  chart.windowResizeHandler();
					}
				},
				redrawOnParentResize: true
			},
			grid: {
				show: true, 
				yaxis: {
					lines: {
						show: false
					}
				},
				padding: {
					right: 24
				}
			},
			dataLabels: {
				enabled: true,
				formatter: function(value, options) { 
					/* For some reason, the state prop celsius doesn't change inside the function, need to use reference instead */
					if (isCelsiusRef.current){
						return `${value}°C`;
					}
					else{
						return `${value}°F`;
					}
				},
				offsetX: 0,
				offsetY: -6,
				style: {
					fontSize: '12px',
					fontFamily: 'Montserrat',
					fontWeight: '500',
					colors: ['#000000']
				},
				background: {
					enabled: false
				}
			},
			xaxis: {
				type: "datetime",
				tickPlacement: 'on',
				min: new Date("2023-12-24").getTime() - 5*3.6e+6,
				max: new Date("2023-12-30").getTime() + 0*3.6e+6,
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
				tooltip: {
					enabled: false
				}
			},
			yaxis: {
				labels: {
					show: false,
				}
			},
			tooltip: {
				enabled: false,
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
			  data: props.openWeatherData.f.slice(0,7).map((data, key) => {
						return ({
							x: data[0],
							y: data[1].toFixed(1)
						});
					})
			}
		  ]
	});
	const [prevIsCelsius, setPrevIsCelsius] = useState(props.isCelsius);
	const isCelsiusRef = useRef(props.isCelsius);
	function flipIsCelsius(){
		setOptions({
			options: {
				...options.options
			}
		});
		if(props.isCelsius){
			setSeries({
				series: [
					{
					  name: "OpenWeather Model",
					  data: props.openWeatherData.c.slice(0,7).map((data, key) => {
							return ({
								x: data[0],
								y: data[1].toFixed(1)
							});
						})
					}
				  ]
			});
		}
		else{
			setSeries({
				series: [
					{
					  name: "OpenWeather Model",
					  data: props.openWeatherData.f.slice(0,7).map((data, key) => {
							return ({
								x: data[0],
								y: data[1].toFixed(1)
							});
						})
					}
				  ]
			});
		}
	}
	if (props.isCelsius !== prevIsCelsius) {
	  setPrevIsCelsius(props.isCelsius);
	  isCelsiusRef.current = props.isCelsius;
	  flipIsCelsius();
	}

	return (
		<div className="w-full border-2 rounded-md">
			<Chart
				className=""
				options={options.options}
				series={series.series}
				type="area"
				width="100%"
				height="300px"
			/>
		</div>
  	);
}
export default HistoricalChart;