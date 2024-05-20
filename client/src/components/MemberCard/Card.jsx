// import React  from "react";
// import Header from "../../components/Header"

import React from 'react'

import logo from "../../assets/icons8-linkedin.svg"
const Card = (props) => {

if(props.isApiTeam|| props.isReactTeam||props.isTeamLead||props.isMlTeam) {

if(props.isMlTeam && props.isApiTeam && props.isReactTeam && props.isTeamLead){
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
                    <h3 className="rounded-lg bg-red-100 text-pink-600 font-bold mb-1">{props.infoMl}</h3>
                    <h3 className="rounded-lg bg-gray-200 text-purple-600 font-bold mb-1"> {props.infoApi}</h3>
                    <h3 className="rounded-lg bg-indigo-100 text-blue-600 font-bold mb-1"> {props.infoReact}</h3>
                    <h3 className="rounded-lg bg-green-200 text-green-700 font-bold mb-1"> {props.infoTeamLead}</h3>
 
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

else if(props.isReactTeam && !props.isApiTeam){
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
                      <h3 className="rounded-lg bg-indigo-100 text-blue-600 font-bold">{props.infoReact}</h3>
                      
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

else if(props.isReactTeam && props.isApiTeam){
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
                      <h3 className="rounded-lg bg-gray-200 text-purple-600 font-bold mb-1">{props.infoApi} </h3>
                      <h3 className="rounded-lg bg-indigo-100 text-blue-600 font-bold mb-1"> {props.infoReact}</h3>
                      
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

else if(props.isTeamLead && props.isMlTeam){
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
                      <h3 className="rounded-lg bg-green-200 text-green-700 font-bold mb-1">{props.isTeamLead}</h3>
                      <h3 className="rounded-lg bg-red-100 text-pink-600 font-bold mb-1">{props.infoMl}</h3>
                      
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




}

}

export default Card