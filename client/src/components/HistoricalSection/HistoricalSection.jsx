import React, { useState } from 'react';

import TempCard from '../TempCard/TempCard';
import HistoricalChart from '../HistoricalChart/HistoricalChart'; 

const HistoricalSection = (props) => {
	return ( 
	<div className="flex flex-col w-[80vw] px-2 overflow-y-auto">
		<div className="flex w-full justify-between pt-2">
			<div className="flex justify-between w-full">
				<div className='flex gap-x-5'>
					<button className="text-black font-bold text-xl active:text-[#145DA0]">LAST WEEK'S DAILY AVERAGE TEMPERATURE</button>
				</div>
			</div>
		</div>
		<TempCard isCelsius={props.isCelsius} openWeatherData={props.openWeatherData}></TempCard>
		<div className="w-full my-2">
			<HistoricalChart isCelsius={props.isCelsius} openWeatherData={props.openWeatherData}></HistoricalChart>
		</div>
	<p className="text-black italic text-left pt-2">Source: OpenWeather API</p>
	{/* <span className='text-black italic text-right pt-2'><i>Last Updated: 5/15/2024</i></span> */}
	<br></br>
	</div>
  );
}
export default HistoricalSection;