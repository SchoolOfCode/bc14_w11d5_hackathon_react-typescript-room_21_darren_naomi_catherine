type WeatherDataState = {
  weather: {
    name: string;
    country: string;
    temp: number;
    feels_like: number;
    main: string;
    icon: string;
  };
};

export default function Display(props: WeatherDataState) {
  const { weather } = props;

  return (
    <div id="weather-widget">
      <h2>
        {weather.name}, {weather.country}
      </h2>
      <div id="weather-image">
        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt="weather icon"
        />{" "}
        <h4>{weather.main}</h4>
      </div>
      <h2>Temperature {weather.temp}°C</h2>
      <h4>Feels Like {weather.feels_like}°C</h4>

      {/* conditional rendering above is optional - we have rendered in app*/}
    </div>
  );
}
