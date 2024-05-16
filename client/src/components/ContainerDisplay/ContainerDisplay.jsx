import React, {useState, useRef} from 'react';

import ForecastDisplay from '../ForecastDisplay/ForecastDisplay';
import ModelDisplay from '../ModelDisplay/ModelDisplay';
import ChartDisplay from '../ChartDisplay/ChartDisplay';
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
	<div className="flex flex-col bg-white w-full h-[42vh]"> {/*calc(100vh - header height - map height)*/}
		<ol className="flex gap-x-4 top-0 left-0">
			<li className="text-black">Forecast</li>
			<li className="text-black">Chart</li>
			<li className="text-black">Model</li>
		</ol>
		<div className="relative bg-white flex w-full"
		 ref={container}
		 style={{
			transitionDuration: '0.25s',
			transform: `translateX(${xPosition}vw)`
		 }}>
			<div className="flex relative bg-white">
				<ForecastDisplay className=""></ForecastDisplay>
				<img src="/right-scroll.svg" className="absolute right-0 top-24 text-black w-fit opacity-50 hover:opacity-100" onClick={onRightScroll}/>
			</div>
			<div className="flex relative bg-white">
				<img src="/left-scroll.svg" className="absolute bg-white left-0 top-24 text-black w-fit opacity-50 hover:opacity-100" onClick={onLeftScroll}/>
				<ChartDisplay className=""></ChartDisplay>
				<img src="/right-scroll.svg" className="absolute right-0 top-24 text-black w-fit opacity-50 hover:opacity-100" onClick={onRightScroll}/>
			</div>
			<div className="flex relative bg-white">
				<img src="/left-scroll.svg" className="absolute bg-white left-0 top-24 text-black w-fit opacity-50 hover:opacity-100" onClick={onLeftScroll}/>
				<ModelDisplay className=""></ModelDisplay>
			</div>
		</div>
	</div>
  );
}
export default ContainerDisplay;