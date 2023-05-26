import React from "react";
import "./App.css";
import { useState } from "react";
import Display from "../Display/Display.tsx";
import Search from "../Search/Search.tsx";

function App() {
  // state goes here
  const [weather, setWeather] = useState<WeatherDataState | undefined>();

  type WeatherDataState = {
    name: string;
    country: string;
    temp: number;
    feels_like: number;
    main: string;
    icon: string;
  };

  //helper functions go here
  async function fetchBothAPIs(search: string) {
    // first API call
    // const url1 = `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=4bba526eeac67e7e53995debc7662040`;
    // const response1 = await fetch(url1);
    // const data1 = await response1.json();
    // // might need [0]
    // const name = data1[0].name;
    // const country = data1[0].country;
    // const lat = data1[0].lat;
    // const lon = data1[0].lon;
    // console.log(data1)

    // second API call
    const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=03eeaa1ba18c8cd073330aef774df3e8`;

    const response2 = await fetch(url2);
    const data2 = await response2.json();
    const temp = data2.main.temp;
    const feels_like = data2.main.feels_like;
    const main = data2.weather[0].main;
    const icon = data2.weather[0].icon;
    const name = data2.name;
    const country = data2.sys.country;
    console.log(data2);
    const weatherData = {
      name,
      country,
      temp,
      feels_like,
      main,
      icon,
    };

    setWeather(weatherData);
  }

  return (
    <div className="App">
      <main>
        <h1>Weather App</h1>
        <Search fetchBothAPIs={fetchBothAPIs} />
        {weather && <Display weather={weather} />}
        <section id="buttons">
          <button>Hourly</button>
          <button>Daily</button>
        </section>
      </main>
    </div>
  );
}

export default App;
