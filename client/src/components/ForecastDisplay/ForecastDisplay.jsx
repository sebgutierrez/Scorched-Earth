import React, { setState } from 'react';

const ForecastDisplay = (props) => {
	let expected = props.expected;
	let predicted = props.predicted;


	return ( 
	<div className="flex flex-col w-[80vw] overflow-y-auto">
		<div className="flex w-full justify-between pt-2">
			<div className="flex gap-x-5">
				<button className="text-black font-bold text-xl active:text-[#145DA0]">LAST WEEK</button>
				<button className="text-slate-500 font-bold text-xl">5-DAY FORECAST</button>
			</div>
		</div>
		{/* <p className="text-black mt-12 text-left">Last week's daily average temperatures for the city of Austin, TX, USA. Data collected using the <a className="text-[#22ccff]" href="https://openweathermap.org/city/4699066" target="_blank">OpenWeather API</a>.</p> */}
		<ol className="grid grid-flow-col justify-stretch gap-x-2 mt-2 w-full overflow-x-auto">
			<li className="flex flex-col justify-center items-center relative px-10 py-10 rounded-md bg-[#2C74FF]">
			<span className="text-white absolute top-2 left-2 text-left">Dec 24</span>
			<span className="text-white font-bold text-2xl">0.9&deg;F</span>
			</li>
			<li className="flex flex-col justify-center items-center relative px-10 py-10 rounded-md bg-[#2C74FF]">
			<span className="text-white absolute top-2 left-2 text-left">Dec 25</span>
			<span className="text-white font-bold text-2xl">-0.1&deg;F</span>
			</li>
			<li className="flex flex-col justify-center items-center relative px-10 py-10 rounded-md bg-[#2C74FF]">
			<span className="text-white absolute top-2 left-2 text-left">Dec 26</span>
			<span className="text-white font-bold text-2xl">-3.5&deg;F</span>
			</li>
			<li className="flex flex-col justify-center items-center relative px-10 py-10 rounded-md bg-[#2C74FF]">
			<span className="text-white absolute top-2 left-2 text-left">Dec 27</span>
			<span className="text-white font-bold text-2xl">4.3&deg;F</span>
			</li>
			<li className="flex flex-col justify-center items-center relative px-10 py-10 rounded-md bg-[#2C74FF]">
			<span className="text-white absolute top-2 left-2 text-left">Dec 28</span>
			<span className="text-white font-bold text-2xl">7.2&deg;F</span>
			</li>
			<li className="flex flex-col justify-center items-center relative px-10 py-10 rounded-md bg-[#2C74FF]">
			<span className="text-white absolute top-2 left-2 text-left">Dec 29</span>
			<span className="text-white font-bold text-2xl">10.9&deg;F</span>
			</li>
			<li className="flex flex-col justify-center items-center relative px-10 py-10 rounded-md bg-[#2C74FF]">
			<span className="text-white absolute top-2 left-2 text-left">Today</span>
			<span className="text-white font-bold text-2xl">4.7&deg;F</span>
			</li>
		</ol>
	<p className="text-black italic text-left pt-2"><i>Last Updated: 5/15/2024</i></p>
	</div>
  );
}
export default ForecastDisplay;