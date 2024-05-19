import React, { useState, useRef } from "react";
import Chart from "react-apexcharts";
import './ChartsDisplay.css';

const ChartDisplay = (props) => {
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
				}
			},
			legend: {
				position: 'top',
				offsetX: 30,
				offsetY: 16
			},
			xaxis: {
				type: "datetime",
				tickPlacement: 'on',
				min: new Date("12/24/2023").getTime() - 6*3.6e+6,
				max: new Date("01/05/2024").getTime() + 0,
				labels: {
					offsetX: 12,
         			offsetY: 0,
					datetimeFormatter: {
						year: 'yyyy',
						month: "MMM dd",
						day: 'MMM dd',
					},
				},
				axisTicks: {
					offsetX: 12, // -36.5
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
					offsetX: 170,
					offsetY: 0,
				}
				// custom: (props) => {
				// 	const seriesIndex = 0;
				// 	const left = props.w.globals.seriesXvalues[seriesIndex][props.dataPointIndex];
				// 	const top = props.w.globals.seriesYvalues[seriesIndex][props.dataPointIndex];
				// 	const div = props.w.globals
				// 	return `<div style="left: ${left}px; top: ${top}px;" className=" bg-white rounded-md shadow-[0px_2px_7px_rgba(0,0,0,0.1)] p-2 absolute transform translate-x-[50%] translate-y-[-50%]">Content</div>`;
				//   },
			}
		}
	});
	const [series, setSeries] = useState({
		series: [
			{
			  name: "OpenWeather Model",
			  data: props.openWeatherData.map((data, key) => {
						return ({
							x: data[0],
							y: data[1]
						});
					})
			},
			{
			  name: "Model",
			  data: props.modelData.map((data, key) => {
						return ({
							x: data[0],
							y: data[1]
						});
			  		})
			},
		  ]
	});
	const celsius = useRef(false);
	function toCelsius(){
		celsius.current = !celsius.current;
		setOptions({
			options: {
			...options.options,
				xaxis: {
					...options.options.xaxis,
					labels: {
						offsetX: 12,
						offsetY: 0,
						datetimeFormatter: {
							year: 'yyyy',
							month: "MMM dd",
							day: 'MMM dd',
						},
					},
					axisTicks: {
						offsetX: 12, // -36.5
						offsetY: 0,
					},
				},
				yaxis: {
					title: {
						...options.options.yaxis.title,
						text: celsius.current ? "Avg. Temperature (°C)" : "Avg. Temperature (°F)",
					},
					labels: {
						formatter: (value) => { 
							if (celsius.current){
								return `${value}°C`;
							}
							else{
								return `${value}°F`;
							}
						},
					}
				},
				tooltip: {
					...options.options.yaxis.tooltip,
					fixed: {
						enabled: true,
						offsetX: 0,
						offsetY: 0,
					}
				}
			}
		});
		setSeries({
			series: [
				{
				  name: "OpenWeather Model",
				  data: props.openWeatherData.map((data, key) => {
							if(celsius.current){
								let temp = (data[1] - 32) * 5/9;
								return ({
									x: data[0],
									y: temp.toFixed(1)
								});
							}
							else {
								return ({
									x: data[0],
									y: data[1]
								});
							}
						})
				},
				{
				  name: "Model",
				  data: props.modelData.map((data, key) => {
							if(celsius.current){
								let temp = (data[1] - 32) * 5/9;
								return ({
									x: data[0],
									y: temp.toFixed(1)
								});
							}
							else {
								return ({
									x: data[0],
									y: data[1]
								});
							}
				  })
				},
			  ]
		});
	}
	return (
		<div className="flex w-[80vw]">
			<div className="flex items-middle w-full">
				<div className="flex relative h-full items-center text-black border-slate-100">
					<Chart
						className="border-2 pr-4 h-fit rounded-md"
						options={options.options}
						series={series.series}
						type="line"
						width="640px"
						height="250px"
					/>
					<div className="flex absolute h-fit top-5 right-2" onClick={toCelsius}>
						{ celsius.current ? <button className="text-black bg-white border-2 px-2 py-1 rounded-md">&deg;F</button> : <button className="text-black bg-white border-2 px-2 py-1 rounded-md">&deg;C</button> }
					</div>
				</div>
        	</div>
		</div>
  	);
}
export default ChartDisplay;