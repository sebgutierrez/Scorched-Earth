import React, { useState } from "react";
import Chart from "react-apexcharts";

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
				// dynamicAnimation: {
				// 	enabled: true,
				// 	speed: 350
				// }
			}
			},
			xaxis: {
				type: "datetime",
				tickPlacement: 'on',
				min: '12/23/2023',
				labels: {
					offsetX: -36.5,
         			offsetY: 0,
					datetimeFormatter: {
						year: 'yyyy',
						month: "dd MMM",
						day: 'dd MMM',
					},
				},
				axisTicks: {
					offsetX: -36.5,
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
					formatter: (value) => { return `${value}°F` },
				}
			},
			tooltip: {
				enabled: true,
				followCursor: false,
				fixed: {
					enabled: true,
					offsetX: 160,
					offsetY: 30,
				}
			}
		}
	});
	const [series, setSeries] = useState({
		series: [
			{
			  name: "OpenWeather",
			  data: [
				{
					x: '12/24/2023', 
					y: 0.9
				}, 
				{
					x: '12/25/2023', 
					y: -0.1
				},
				{
					x: '12/26/2023', 
					y: -3.5
				}, 
				{
					x: '12/27/2023', 
					y: 4.3
				}, 
				{
					x: '12/28/2023', 
					y: 7.2
				},
				{
					x: '12/29/2023', 
					y: 10.9
				},
				{
					x: '12/30/2023', 
					y: 4.7
				},
				{
					x: '12/31/2023', 
					y: 6.2
				},
				{
					x: '01/01/2024', 
					y: 4.1
				}, 
				{
					x: '01/02/2024', 
					y: 2.5
				}, 
				{
					x: '01/03/2024', 
					y: 7.4
				},
				{
					x: '01/04/2024', 
					y: 4.1
				},
				{
					x: '01/05/2024', 
					y: 5.0
				}
			  ]
			},
			{
			  name: "Model Forecast",
			  data: [
				{
					x: '12/30/2023', 
					y: 4.7
				},
				{
					x: '12/31/2023', 
					y: 3.9
				},
				{
					x: '01/01/2024', 
					y: 2.7
				}, 
				{
					x: '01/02/2024', 
					y: 5.2
				}, 
				{
					x: '01/03/2024', 
					y: 9.4
				},
				{
					x: '01/04/2024', 
					y: 10.4
				},
				{
					x: '01/05/2024', 
					y: 9.7
				}
			  ]
			},
		  ]
	});
	  
	return (
		<div className="flex w-[80vw]">
			<div className="flex w-full">
				<div className="flex text-black border-b-2 border-l-2 border-r-2 border-slate-100">
					<Chart
					options={options.options}
					series={series.series}
					type="line"
					width="650px"
					height="259px"
					/>
				</div>
        	</div>
		</div>
  	);
}
export default ChartDisplay;