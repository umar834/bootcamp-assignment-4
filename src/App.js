import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  let [isLit, setLit] = useState(true);
  let [temperature, setTemperature] = useState(22);
  return (
    <div className={`room ${isLit ? "lit" : "dark"}`}>
      The Room Light is {isLit ? "ON" : "OFF"}
      <br />
      <button onClick={() => {setLit(true); isLit = true;}}>
        ON
      </button>
      <button onClick={() => {setLit(false); isLit = false;}}>
        OFF
      </button>

      <div>
        Temperature = {temperature} C
        <br/>
        <button onClick={() => setTemperature(temperature - 1)}>
          -
        </button>
        <button onClick={() => setTemperature(temperature + 1)}>
          +
        </button>
      </div>
    </div>

    
    );
}

export default App;
