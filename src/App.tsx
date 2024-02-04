import React, { useState } from 'react';
import './App.css';

function App() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [reamur, setReamur] = useState('');
  const [kelvin, setKelvin] = useState('');

  const handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCelsius(value);
    if (value.trim() === '') {
      clearAll();
      return;
    }
    const celsiusValue = parseFloat(value);
    setFahrenheit(((celsiusValue * 9) / 5 + 32).toFixed(2));
    setReamur((celsiusValue * 0.8).toFixed(2));
    setKelvin((celsiusValue + 273.15).toFixed(2));
  };

  const handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFahrenheit(value);
    if (value.trim() === '') {
      clearAll();
      return;
    }
    const fahrenheitValue = parseFloat(value);
    setCelsius((((fahrenheitValue - 32) * 5) / 9).toFixed(2));
    setReamur((((fahrenheitValue - 32) * 4) / 9).toFixed(2));
    setKelvin((((fahrenheitValue - 32) * 5) / 9 + 273.15).toFixed(2));
  };

  const handleReamurChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setReamur(value);
    if (value.trim() === '') {
      clearAll();
      return;
    }
    const reamurValue = parseFloat(value);
    setCelsius((reamurValue * 1.25).toFixed(2));
    setFahrenheit(((reamurValue * 2.25) + 32).toFixed(2));
    setKelvin(((reamurValue * 1.25) + 273.15).toFixed(2));
  };

  const handleKelvinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKelvin(value);
    if (value.trim() === '') {
      clearAll();
      return;
    }
    const kelvinValue = parseFloat(value);
    setCelsius((kelvinValue - 273.15).toFixed(2));
    setFahrenheit((((kelvinValue - 273.15) * 9 / 5) + 32).toFixed(2));
    setReamur(((kelvinValue - 273.15) * 0.8).toFixed(2));
  };

  const clearAll = () => {
    setCelsius('');
    setFahrenheit('');
    setReamur('');
    setKelvin('');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Temperature Converter</h1>
      <div className="flex items-center justify-center space-x-4">
        <input
          type="number"
          className="border border-gray-300 rounded-md p-2 w-32"
          placeholder="Enter Celsius"
          value={celsius}
          onChange={handleCelsiusChange}
        />
        <span className="text-xl">°C</span>
      </div>
      <div className="flex items-center justify-center space-x-4 mt-4">
        <input
          type="number"
          className="border border-gray-300 rounded-md p-2 w-32"
          placeholder="Enter Fahrenheit"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
        <span className="text-xl">°F</span>
      </div>
      <div className="flex items-center justify-center space-x-4 mt-4">
        <input
          type="number"
          className="border border-gray-300 rounded-md p-2 w-32"
          placeholder="Enter Reamur"
          value={reamur}
          onChange={handleReamurChange}
        />
        <span className="text-xl">°Ré</span>
      </div>
      <div className="flex items-center justify-center space-x-4 mt-4">
        <input
          type="number"
          className="border border-gray-300 rounded-md p-2 w-32"
          placeholder="Enter Kelvin"
          value={kelvin}
          onChange={handleKelvinChange}
        />
        <span className="text-xl">K</span>
      </div>
    </div>
  );
}

export default App;
