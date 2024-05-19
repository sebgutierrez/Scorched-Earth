import React, { useState } from 'react';

import TempCard from '../TempCard/TempCard';
const ForecastDisplay = (props) => {
	let expected = props.expected;
	let predicted = props.predicted;
	const [celsius, setCelsius] = useState(false);
	function toCelsius(){
		setCelsius((celsius) => !celsius);
	}
	return ( 
	<div className="flex flex-col w-[80vw] overflow-y-auto">
		<div className="flex w-full justify-between pt-2">
			<div className="flex justify-between w-full">
				<div className='flex gap-x-5'>
					<button className="text-black font-bold text-xl active:text-[#145DA0]">LAST WEEK</button>
					<button className="text-slate-500 font-bold text-xl">5-DAY FORECAST</button>
				</div>
				<div className="flex pr-1" onClick={toCelsius}>
					{ celsius ? <button className="text-black bg-white border-2 px-2.5 py-1 rounded-md">&deg;F</button> : <button className="text-black bg-white border-2 px-2.5 py-1 rounded-md">&deg;C</button> }
				</div>
			</div>
		</div>
		<TempCard celsius={celsius} openWeatherData={props.openWeatherData}></TempCard>
	{/* <p className="text-black italic text-left pt-2"><i>Last Updated: 5/15/2024</i></p> */}
	</div>
  );
}
export default ForecastDisplay;