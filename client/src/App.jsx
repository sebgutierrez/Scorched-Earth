import React, { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch('http://localhost/welcome') /* change fetch url to the url the flask server is running on + /welcome */
    .then(response => response.json())
    .then(data => {
          setData(data)
          console.log(data.message)
        }
      )
    }, []);

  return (
    <div>

        { (typeof data === 'undefined') 
        ? ( <h1>Loading...</h1> ) 
        : ( <h1>{data.message}</h1> ) 
        } 
      
    </div>
  );
}

export default App;
