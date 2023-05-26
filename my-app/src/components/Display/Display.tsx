type WeatherDataState = {
  weather:
    | {
        name: string;
        country: string;
        temp: number;
        feels_like: number;
        main: string;
        icon: string;
      }
};

export default function Display(props: WeatherDataState) {
  const { weather } = props;

  return (
    <div>
      <h1>Weather App</h1>
      <h2>
        {weather.name}, {weather.country}
      </h2>
      <img src={weather.icon} alt="weather icon" />
      <h2>{weather.temp}</h2>
      <h4>{weather.feels_like}</h4>
      <h4>{weather && weather.main}</h4>
      {/* conditional rendering above is optional - we have rendered in app*/}
      <h3>TIME</h3>
    </div>
  );
}
