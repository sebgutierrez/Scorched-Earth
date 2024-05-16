import React from 'react';

const ForecastDisplay = (props) => {
	let expected = props.expected;
	let predicted = props.predicted;
	return ( 
	<div className="flex flex-col w-[80vw] px-4 py-2 left-8">
		<div className="flex gap-x-5 absolute pl-0 top-6">
			<button className="text-[#0D99FF] font-bold text-xl active:text-[#145DA0]">Last Week</button> {/*bg-[#e0f2fe] text-[#0284c7]*/}
			<button className="text-slate-300 font-bold text-xl active:text-[#145DA0]">5-Day Forecast</button>
		</div>
		<p className="text-black mt-12 text-left">Last week's daily average temperatures for the city of Austin, TX, USA. Data collected using the <a className="text-[#22ccff]" href="https://openweathermap.org/city/4699066" target="_blank">OpenWeather API</a>.</p>
		<ol className="flex gap-x-3 mt-2 py-2 w-[75vw] overflow-x-auto">
			<li className="flex flex-col justify-center items-center relative px-10 py-10 w-36 rounded-md bg-[#2C74FF]">
			<span className="text-white absolute top-2 left-2 text-left">Dec 24</span>
			<span className="text-white font-bold text-2xl">0.9&deg;F</span>
			</li>
			<li className="flex flex-col justify-center items-center relative px-10 py-10 w-36 rounded-md bg-[#2C74FF]">
			<span className="text-white absolute top-2 left-2 text-left">Dec 25</span>
			<span className="text-white font-bold text-2xl">-0.1&deg;F</span>
			</li>
			<li className="flex flex-col justify-center items-center relative px-10 py-10 w-36 rounded-md bg-[#2C74FF]">
			<span className="text-white absolute top-2 left-2 text-left">Dec 26</span>
			<span className="text-white font-bold text-2xl">-3.5&deg;F</span>
			</li>
			<li className="flex flex-col justify-center items-center relative px-10 py-10 w-36 rounded-md bg-[#2C74FF]">
			<span className="text-white absolute top-2 left-2 text-left">Dec 27</span>
			<span className="text-white font-bold text-2xl">4.3&deg;F</span>
			</li>
			<li className="flex flex-col justify-center items-center relative px-10 py-10 w-36 rounded-md bg-[#2C74FF]">
			<span className="text-white absolute top-2 left-2 text-left">Dec 28</span>
			<span className="text-white font-bold text-2xl">7.2&deg;F</span>
			</li>
			<li className="flex flex-col justify-center items-center relative px-10 py-10 w-36 rounded-md bg-[#2C74FF]">
			<span className="text-white absolute top-2 left-2 text-left">Dec 29</span>
			<span className="text-white font-bold text-2xl">10.9&deg;F</span>
			</li>
			<li className="flex flex-col justify-center items-center relative px-10 py-10 w-36 rounded-md bg-[#2C74FF]">
			<span className="text-white absolute top-2 left-2 text-left">Dec 30</span>
			<span className="text-white font-bold text-2xl">4.7&deg;F</span>
			</li>
		</ol>
	<p className="text-black text-left pt-2">Last Updated: 5/15/2024</p>
	</div>
  );
}
export default ForecastDisplay;