import React, {useState, useRef} from 'react';

import HistoricalSection from '../HistoricalSection/HistoricalSection';
import ModelSection from '../ModelSection/ModelSection';
import ForecastSection from '../ForecastSection/ForecastSection';

const SectionContainer = (props) => {
	const container = useRef(null);
	const xPosition = useRef(0);
	const [isCelsius, setIsCelsius] = useState(false);

	const openWeatherData = {
		c: [[new Date('2023-12-24').getTime(), -17.3], [new Date('2023-12-25').getTime(), -17.8], [new Date('2023-12-26').getTime(), -19.7], [new Date('2023-12-27').getTime(), -15.4], [new Date('2023-12-28').getTime(), -13.8], [new Date('2023-12-29').getTime(), -11.7], [new Date('2023-12-30').getTime(), -15.2],  [new Date('2023-12-31').getTime(), -14.3],  [new Date('2024-01-01').getTime(), -15.5], [new Date('2024-01-02').getTime(), -13.7], [new Date('2024-01-03').getTime(), -14.8], [new Date('2024-01-04').getTime(), -15.5],  [new Date('2024-01-05').getTime(), -15.0]],
		f: [[new Date('2023-12-24').getTime(), 0.9], [new Date('2023-12-25').getTime(), -0.1], [new Date('2023-12-26').getTime(), -3.5], [new Date('2023-12-27').getTime(), 4.3], [new Date('2023-12-28').getTime(), 7.2], [new Date('2023-12-29').getTime(), 10.9], [new Date('2023-12-30').getTime(), 4.7],  [new Date('2023-12-31').getTime(), 6.2],  [new Date('2024-01-01').getTime(), 4.1], [new Date('2024-01-02').getTime(), 7.4], [new Date('2024-01-03').getTime(), 5.4], [new Date('2024-01-04').getTime(), 4.1],  [new Date('2024-01-05').getTime(), 5.0]]
	}
	const modelData = {
		c: [[new Date('2023-12-30').getTime(), -15.2], [new Date('2023-12-31').getTime(), -15.6], [new Date('2024-01-01').getTime(), -16.3], [new Date('2024-01-02').getTime(), -14.9], [new Date('2024-01-03').getTime(), -12.6], [new Date('2024-01-04').getTime(), -12.0], [new Date('2024-01-05').getTime(), -12.4]],
		f: [[new Date('2023-12-30').getTime(), 4.7], [new Date('2023-12-31').getTime(), 3.9], [new Date('2024-01-01').getTime(), 2.7], [new Date('2024-01-02').getTime(), 5.2], [new Date('2024-01-03').getTime(), 9.4], [new Date('2024-01-04').getTime(), 10.4], [new Date('2024-01-05').getTime(), 9.7]]
	}

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

	function flipIsCelsius(){
		setIsCelsius((isCelsius) => !isCelsius);
	}
	
	return (
	<div className="flex flex-col bg-white w-full h-[50vh] overflow-x-hidden overflow-y-hidden z-100 border-2"> {/*calc(100vh - header height - map height)*/}
		<ol className="flex items-end justify-between top-0 left-0 w-full bg-slate-100 border-b-2 py-1 pl-2">
			<div className="flex gap-x-4">
				<li className="text-black">Historical</li>
				<li className="text-black">Forecast</li>
				<li className="text-black">Model</li>
			</div>
			<div className="flex pr-1" onClick={flipIsCelsius}>
				{ isCelsius ? <button className="text-black bg-white border-2 px-2 py-1 rounded-md">&deg;C</button> : <button className="text-black bg-white border-2 px-2 py-1 rounded-md">&deg;F</button> }
			</div>
		</ol>
		<div className="relative bg-white flex w-full h-full"
		 ref={container}
		 style={{
			transitionDuration: '0.25s',
			transform: `translateX(${xPosition}vw)`
		 }}>
			<div className="flex relative bg-white">
				<HistoricalSection className="" isCelsius={isCelsius} openWeatherData={openWeatherData}></HistoricalSection>
				<div className="flex flex-col justify-center right-2 top-24 h-full opacity-50 hover:opacity-100" onClick={onRightScroll}>
					<img src="/right-scroll.svg" className="text-black w-fill"/>
				</div>
			</div>
			<div className="flex relative bg-white">
				<div className="flex flex-col justify-center left-0 top-24 h-full opacity-50 hover:opacity-100" onClick={onLeftScroll}>
					<img src="/left-scroll.svg" className="text-black w-fill"/>
				</div>
				<ForecastSection className="" isCelsius={isCelsius} openWeatherData={openWeatherData} modelData={modelData}></ForecastSection>
				<div className="flex flex-col justify-center right-0 top-24 h-full opacity-50 hover:opacity-100" onClick={onRightScroll}>
					<img src="/right-scroll.svg" className="text-black w-fill"/>
				</div>
			</div>
			<div className="flex relative bg-white">
				<div className="flex flex-col justify-center left-0 top-24 h-full opacity-50 hover:opacity-100" onClick={onLeftScroll}>
					<img src="/left-scroll.svg" className="text-black w-fill"/>
				</div>
				<ModelSection className=""></ModelSection>
			</div>
		</div>
	</div>
  );
}
export default SectionContainer;