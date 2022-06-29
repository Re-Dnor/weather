import cn from "classnames";
import React, {useEffect, useState} from "react";
import "./Weather.css";

const Weather = ({ weatherData }) => {
  const { region, country, localTime, wind, temp, icon, forecastWeather } = weatherData;
  const [width, setStateWidth] = useState(window.innerWidth);
  const wrapperForecast = cn(width < 625 ? "m-5": "d-flex justify-content-between align-items-center m-5 col-md-");

  const getWidth = () => {
    setStateWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', getWidth)
    
    return () => {
      window.removeEventListener('resize', getWidth)
    }
  })
  
  return (
    <>
    <div>
      <img className="styleIcon" src={icon} alt="icon weather" />
      <h3>{temp} </h3>
      <h2>{region}</h2>
      <h3>{country}</h3>
      <p>{localTime}</p>
      <p>Wind is {wind}</p>
    </div>
    <div className={wrapperForecast}>
      {forecastWeather.map((item, index) =>
      <div key={index}>
        <img className='styleIconForecast' src={item.iconForecast} alt="icon weather" />
        <h5>Forecast: {item.date}</h5>
        <p>Average: {item.avgTemp}</p>
        <p>Max: {item.maxTemp} / Min: {item.minTemp}</p>
        <p>Chance rain: {item.chanceRain}</p>
      </div>
      )}
    </div>
    </>
  )
}

export default Weather;