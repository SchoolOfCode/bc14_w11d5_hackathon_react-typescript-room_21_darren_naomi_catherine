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
    | undefined;
};

export default function Display(props: WeatherDataState) {
  const { weather } = props;

  return (
    <div>
      <h1>Weather App</h1>
      <h2>
        {weather && weather.name}, {weather && weather.country}
      </h2>
      <img src={weather && weather.icon} alt="weather icon" />
      <h2>{weather && weather.temp}</h2>
      <h4>{weather && weather.feels_like}</h4>
      <h4>{weather && weather.main}</h4>
      <h3>TIME</h3>
    </div>
  );
}
