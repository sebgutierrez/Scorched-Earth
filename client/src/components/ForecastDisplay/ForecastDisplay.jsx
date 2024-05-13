import React from 'react';

const ForecastDisplay = (props) => {
	let expected = props.expected;
	let predicted = props.predicted;
	return (
	<div className="relative bg-white w-full px-8 mt-36 flex flex-col justify-center"> 
		<h2 className="flex w-full justify-center text-[#306BF3] pb-3">Lag Time:</h2>
		<ol className="flex gap-x-2 w-64 overflow-x-scroll">
			<li className="flex flex-col px-4 py-2 border-blue-200 border-2 rounded-md bg-blue-100">
			<span className="text-blue-600 w-16">Dec 24, 2023</span>
			<span className="text-blue-800  pt-2 text-xl">0.9&deg;F</span>
			</li>
			<li className="flex flex-col px-4 py-2 border-blue-200 border-2 rounded-md bg-blue-100">
			<span className="text-blue-600 w-16">Dec 25, 2023</span>
			<span className="text-blue-800  pt-2 text-xl">-0.1&deg;F</span>
			</li>
			<li className="flex flex-col px-4 py-2 border-blue-200 border-2 rounded-md bg-blue-100">
			<span className="text-blue-600 w-16">Dec 26, 2023</span>
			<span className="text-blue-800  pt-2 text-xl">-3.5&deg;F</span>
			</li>
			<li className="flex flex-col px-4 py-2 border-blue-200 border-2 rounded-md bg-blue-100">
			<span className="text-blue-600 w-16">Dec 27, 2023</span>
			<span className="text-blue-800  pt-2 text-xl">4.3&deg;F</span>
			</li>
			<li className="flex flex-col px-4 py-2 border-blue-200 border-2 rounded-md bg-blue-100">
			<span className="text-blue-600 w-16">Dec 28, 2023</span>
			<span className="text-blue-800  pt-2 text-xl">7.2&deg;F</span>
			</li>
			<li className="flex flex-col px-4 py-2 border-blue-200 border-2 rounded-md bg-blue-100">
			<span className="text-blue-600 w-16">Dec 29, 2023</span>
			<span className="text-blue-800 pt-2 text-xl">10.9&deg;F</span>
			</li>
			<li className="flex flex-col px-4 py-2 border-blue-200 border-2 rounded-md bg-blue-100">
			<span className="text-blue-600 w-16">Dec 30, 2023</span>
			<span className="text-blue-800  pt-2 text-xl">4.7&deg;F</span>
			</li>
		</ol>
		<div className="flex flex-col mt-6">
			<span className="text-black flex justify-center">Dec 31, 2023</span>
			<div className="flex flex-col pt-4">
			<span className="text-[#306BF3]">Predicted: <span className="text-black">{predicted}&deg;F</span></span>
			<span className="text-[#306BF3]">Expected: <span className="text-black">{expected}&deg;F</span></span>
			</div>
		</div>
		</div>
  );
}
export default ForecastDisplay;