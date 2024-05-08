// import React  from "react";
// import Header from "../../components/Header"

import React from 'react'

import logo from "../../assets/icons8-linkedin.svg"
const Card = (props) => {
    
  return (
    
    <div className="max-w-md mx-auto md:max-w-2xl sm:mt-6 min-w-md bg-white w-full mb-6 shadow-lg rounded-xl lg:mt-24 flex flex-col justify-between">
        <div className="relative px-6">
            <div className="flex flex-wrap justify-center align-center">
                <div className="w-full flex justify-center align-center">
                    <div className="relative">
                        <img src={props.data.image} className="shadow-lg rounded-full align-middle relative -m-16 lg:-ml-16 max-w-[150px]"/> {/*shadow-lg rounded-full align-middle relative -m-16 -ml-2 lg:-ml-16 max-w-[150px]*/}
                    </div>
                </div>
            </div>
            <div className="text-center mt-24">
                <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">{props.data.name}</h3>
                <div className="text-s mt-0 mb-2 text-slate-400 font-bold">
                    <i className="fas fa-map-marker-alt mr-2 text-slate-500 opacity-75">{props.data.year}</i>
                    
                </div>
            </div>
            <div className="mt-6 py-6 border-t border-slate-200 text-center">
                <div className="flex flex-wrap justify-center">
                    <div className="flex flex-col w-full px-4">
                        <p className="leading-relaxed text-slate-600 mb-4">{props.data.contribution}</p>
                        {/* <a href={props.data.profileLink} className="font-normal text-slate-700 hover:text-slate-400">
                        <img src={logo} alt="" className='align-middle inline relative'/>
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
        <div className="relative px-6 flex justify-center mb-6">
            <a href={props.data.profileLink} target="_blank" className="font-normal text-slate-700 hover:text-slate-400 flex justify-center">
                <img src={logo} alt="" className='align-middle inline relative'/>
            </a>
        </div>
    </div>
  )
}

export default Card