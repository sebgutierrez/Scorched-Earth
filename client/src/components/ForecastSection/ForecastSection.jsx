import React from 'react';

import ForecastChart from '../ForecastChart/ForecastChart'; 

const ForecastSection = (props) => {
	return ( 
	<div className="flex flex-col w-[80vw] px-2 overflow-y-auto">
		<div className="w-full my-2">
			<ForecastChart isCelsius={props.isCelsius} openWeatherData={props.openWeatherData} modelData={props.modelData}></ForecastChart>
		</div>
	<br></br>
	</div>
  );
}
export default ForecastSection;