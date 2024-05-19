import React from 'react';

const TempCard = (props) => {
	let listItems = []
	
	if(props.celsius){
		listItems = props.openWeatherData.map((temp, key) => {
			let newTemp = (temp[1] - 32) * 5/9;
			return (<li className="flex flex-col justify-center items-center relative px-10 py-10 rounded-md bg-[#2C74FF]" key={key}>
						<span className="text-white absolute top-2 left-2 text-left">{new Date(temp[0]).toDateString().slice(4, 10)}</span> {/*Date Format: MMM-DD; EX: "Dec 25"*/}
						<span className="text-white font-bold text-2xl">{newTemp.toFixed(1)}&deg;C</span>
					</li>);
		})
	}
	else {
		listItems = props.openWeatherData.map((temp, key) => {
			return (<li className="flex flex-col justify-center items-center relative px-10 py-10 rounded-md bg-[#2C74FF]" key={key}>
						<span className="text-white absolute top-2 left-2 text-left">{new Date(temp[0]).toDateString().slice(4, 10)}</span>
						<span className="text-white font-bold text-2xl">{temp[1].toFixed(1)}&deg;F</span>
					</li>);
		})
	}
	return (<ol className="grid grid-flow-col justify-stretch gap-x-2 mt-2 w-full overflow-x-auto">{listItems}</ol>);
}
export default TempCard;