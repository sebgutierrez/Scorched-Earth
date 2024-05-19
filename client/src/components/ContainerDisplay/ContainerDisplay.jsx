import React, {useState, useRef} from 'react';

import ForecastDisplay from '../ForecastDisplay/ForecastDisplay';
import ModelDisplay from '../ModelDisplay/ModelDisplay';
import ChartDisplay from '../ChartsDisplay/ChartsDisplay';

const ContainerDisplay = (props) => {
	const container = useRef(null);
	const xPosition = useRef(0);
	const [celsius, setCelsius] = useState(false);

	let openWeatherData = [['12/24/2023', 0.9], ['12/25/2023', -0.1], ['12/26/2023', -3.5], ['12/27/2023', 4.3], ['12/28/2023', 7.2], ['12/29/2023', 10.9], ['12/30/2023', 4.7],  ['12/31/2023', 6.2],  ['01/01/2024', 4.1], ['01/02/2024', 7.4], ['01/03/2024', 5.4], ['01/04/2024', 4.1],  ['01/05/2024', 5.0]]
	let modelData = [['12/30/2023', 4.7], ['12/31/2023', 3.9], ['01/01/2024', 2.7], ['01/02/2024', 5.2], ['01/03/2024', 9.4], ['01/04/2024', 10.4], ['01/05/2024', 9.7]]

	function onRightScroll(){
		let style = container.current.style;
		if(xPosition.current == -160){
			xPosition.current = 0;
		}
		else {
			xPosition.current -= 80;
		}
		style.transform = `translateX(${xPosition.current}vw)`;
		console.log(style.transform);
	}

	function onLeftScroll(){
		let style = container.current.style;
		xPosition.current = (xPosition.current + 80) % 240;
		style.transform = `translateX(${xPosition.current}vw)`;
	}
	
	return (
	<div className="flex flex-col bg-white w-full h-[44vh]"> {/*calc(100vh - header height - map height)*/}
		<ol className="flex items-end justify-between top-0 left-0 w-full bg-slate-100 border-2 py-1 pl-2">
			<div className="flex gap-x-4">
				<li className="text-black">Forecast</li>
				<li className="text-black">Charts</li>
				<li className="text-black">Model</li>
			</div>
		</ol>
		<div className="relative bg-white flex w-full h-full pl-2"
		 ref={container}
		 style={{
			transitionDuration: '0.25s',
			transform: `translateX(${xPosition}vw)`
		 }}>
			<div className="flex relative bg-white">
				<ForecastDisplay className="" openWeatherData={openWeatherData}></ForecastDisplay>
				<div className="flex flex-col justify-center right-0 top-24 h-full opacity-50 hover:opacity-100" onClick={onRightScroll}>
					<img src="/right-scroll.svg" className="text-black w-fill"/>
				</div>
			</div>
			<div className="flex relative bg-white">
				<div className="flex flex-col justify-center left-0 top-24 h-full opacity-50 hover:opacity-100" onClick={onLeftScroll}>
					<img src="/left-scroll.svg" className="text-black w-fill"/>
				</div>
				<ChartDisplay className="" openWeatherData={openWeatherData} modelData={modelData}></ChartDisplay>
				<div className="flex flex-col justify-center right-0 top-24 h-full opacity-50 hover:opacity-100" onClick={onRightScroll}>
					<img src="/right-scroll.svg" className="text-black w-fill"/>
				</div>
			</div>
			<div className="flex relative bg-white">
				<div className="flex flex-col justify-center left-0 top-24 h-full opacity-50 hover:opacity-100" onClick={onLeftScroll}>
					<img src="/left-scroll.svg" className="text-black w-fill"/>
				</div>
				<ModelDisplay className=""></ModelDisplay>
			</div>
		</div>
	</div>
  );
}
export default ContainerDisplay;