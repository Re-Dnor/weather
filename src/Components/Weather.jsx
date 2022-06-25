const Weather = (props) => {
  const {weatherData} = props;
  const { region, country, localTime, wind, temp, icon, forecastWeather } = weatherData;

  const styleIcon = {
    width: '75px',
    height: '75px'
  }

  const styleIconForecast = {
    width: '50px',
    height: '50px'
  }

  return (
    <>
    <div>
      <img style={styleIcon} src={icon} alt="icon weather" />
      <h3>{temp} </h3>
      <h2>{region}</h2>
      <h3>{country}</h3>
      <p>{localTime}</p>
      <p>Wind is {wind}</p>
    </div>
    <div className="d-flex justify-content-between m-5">
      {forecastWeather.map((item, index) =>
      <div key={index}>
        <img style={styleIconForecast} src={item.iconForecast} alt="icon weather" />
        <h5>Forecast: {item.date}</h5>
        <p>Average tmp: {item.avgTemp}</p>
        <p>Max tmp: {item.maxTemp} Min tmp: {item.minTemp}</p>
        <p>Chance rain: {item.chanceRain}</p>
      </div>
      )}
    </div>
    </>
  )
}

export default Weather;