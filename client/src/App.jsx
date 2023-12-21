"use client";
import React, { Fragment, useState, useEffect } from 'react'
import './App.css'
import SimpleForm from './Components/SimpleForm';

import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindowF
} from "@react-google-maps/api"

import './App.css';

const markers = [
  {
    id: 1,
    name: 'Houston',
    position: { lat: 29.749907, lng: -95.358421 }
  }
]

function App() {

  const [data, setData] = useState([{}]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_API_KEY
  })

  useEffect(() => {
    fetch('http://127.0.0.1:5000/welcome') /* change fetch url to the url the flask server is running on + /welcome */
    .then(response => response.json())
    .then(data => {
          setData(data)
          console.log(data.message)
        }
      )
    }, []);

  return (
    <Fragment> 

        {
          /*
          <div className="container">
            { (typeof data === 'undefined') 
            ? ( <h1>Loading...</h1> ) 
            : ( <h1>{data.message}</h1> ) 
            } 
          </div>
          */
        }

        <div className="container-box">
          <SimpleForm></SimpleForm>
          <div className="map-container">
            {
              isLoaded ? (
              <GoogleMap
                center={{ lat: 29.749907, lng: -95.358421 }}
                zoom={7}
                mapContainerStyle={{
                  width: "100%",
                  height: "100vh",
                }}>
              </GoogleMap>
              ) : null 
            }
          </div>
        </div>

    </Fragment>
  );
}

export default App;
