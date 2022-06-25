import React, {useState} from "react";
import Form from "./Components/Form.jsx";
import Content from "./Components/Content.jsx"
import getData from './Utils/getData.js'
import parse from "./Utils/parser.js";

const App = () => {
  const [weatherData, setWeatherData] = useState({})
  const [errorFeedback, setErrorFeedback] = useState('');

  const handleSubmitForm = (value, setStateCity) => {

    getData(value)
    .then((xml) => {
      const { contents } = xml.data;
      const { currentWeather, forecastWeather  } = parse(contents);
      const {region, country, localTime, wind, temp, icon } = currentWeather;

      setWeatherData({
        region,
        country,
        localTime,
        wind,
        temp,
        icon,
        forecastWeather
      })

      setErrorFeedback('')
      setStateCity('')
    })
    .catch((error) => {
      console.log(error)
      setWeatherData({})
      setErrorFeedback(`${value} city is not defined`)
    }
    )
  }
  
  return (
    <main className="d-flex min-vh-100 flex-column bg-dark">
      <div className="flex-grow-1 text-white">
        <Form weatherData={weatherData} errorFeedback={errorFeedback}  handleSubmitForm={handleSubmitForm} />
        <Content weatherData={weatherData} />
      </div>
    </main>
  )
}

export default App;