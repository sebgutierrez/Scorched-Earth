import React, {useState, useRef} from 'react';

import ForecastDisplay from '../ForecastDisplay/ForecastDisplay';
import ModelDisplay from '../ModelDisplay/ModelDisplay';
import ChartDisplay from '../ChartsDisplay/ChartsDisplay';
const ContainerDisplay = (props) => {
	const container = useRef(null);
	const xPosition = useRef(0);

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
	<div className="flex flex-col bg-white w-full h-[44vh] border-b-2"> {/*calc(100vh - header height - map height)*/}
		<ol className="flex items-end justify-between top-0 left-0 w-full bg-slate-100 border-2 rounded-t-lg py-1 pl-2">
			<div className="flex gap-x-4">
				<li className="text-black">Forecast</li>
				<li className="text-black">Charts</li>
				<li className="text-black">Model</li>
			</div>
			<div className="flex pr-1">
				<button className="text-black border-2 px-2.5 py-1 rounded-md">&deg;F</button>
			</div>
		</ol>
		<div className="relative bg-white flex w-full h-full border-l-2 pl-2"
		 ref={container}
		 style={{
			transitionDuration: '0.25s',
			transform: `translateX(${xPosition}vw)`
		 }}>
			<div className="flex relative bg-white">
				<ForecastDisplay className=""></ForecastDisplay>
				<div className="flex flex-col justify-center right-0 top-24 h-full opacity-50 hover:opacity-100" onClick={onRightScroll}>
					<img src="/right-scroll.svg" className="text-black w-fill"/>
				</div>
			</div>
			<div className="flex relative bg-white">
				<div className="flex flex-col justify-center left-0 top-24 h-full opacity-50 hover:opacity-100" onClick={onLeftScroll}>
					<img src="/left-scroll.svg" className="text-black w-fill"/>
				</div>
				<ChartDisplay className=""></ChartDisplay>
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