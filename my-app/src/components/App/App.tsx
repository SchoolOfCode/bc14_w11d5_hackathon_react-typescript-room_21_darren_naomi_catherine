import React from 'react';
import './App.css';
import {useState} from 'react'
import Display from '../Display/Display.tsx'
import Search from '../Search/Search.tsx'

function App() {
  // state goes here
  type WeatherDataState  = {
    data1[0].name: string,
    data1[0].country: string,
    data2.current.temp: number, 
    data2.current.feels_like: number,
    data2.weather.main: string,
    data2.weather.icon: string,
  }
  const [weather, setWeather] = useState<WeatherDataState>({})


  //helper functions go here
  async function fetchBothAPIs(search: string) {
    // first API call
    const url1 = `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=03eeaa1ba18c8cd073330aef774df3e8`
    const response1 = await fetch(url1)
    const data1 = await response1.json()
    const name = data1.name
    const lat = data1.lat
    const lon = data1.lon
    
    // second API call
    const url2 = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=03eeaa1ba18c8cd073330aef774df3e8`
    
    const response2 = await fetch(url2)
    const data2 = await response2.json()
    const weatherData = {
    // if fails, try no [0]
    data1[0].name, 
    data1[0].country,
    data2.current.temp, 
    data2.current.feels_like,
    data2.weather.main,
    data2.weather.icon,
    }
    // what does the ... do here?
    setWeather(...weatherData)
    }
  
  return (
    <div className="App">
      <main>
<Search fetchBothAPIs={fetchBothAPIs} />
<Display weather={weather}  />
<section>
<button></button>
<button></button>
</section>
</main>
    </div>
  );
}

export default App;
