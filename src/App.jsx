import React, {useState} from "react";
import Form from "./Components/Form.jsx";
import Content from "./Components/Content.jsx"
import getData from './Utils/getData.js'
import parse from "./Utils/parser.js";
import ThemeContext from "./Components/Context/ThemeContext.js";


const themes = [
  {
    name: 'black',
    className: 'bg-dark',
    id: 0
  },
  {
    name: 'blue',
    className: 'bg-primary',
    id: 1,
  },
  {
    name: 'yellow',
    className: 'bg-warning',
    id: 2
  },
  {
    name: 'white',
    className: 'bg-light',
    id: 3
  }
];

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [errorFeedback, setErrorFeedback] = useState('');
  const [currentTheme, setStateTheme] = useState(themes[0]);

  const handleSubmitForm = (value, setStateCity) => {
    getData(value)
    .then((xml) => {
      const { contents } = xml.data;
      const { currentWeather, forecastWeather  } = parse(contents);
      const { region, country, localTime, wind, temp, icon } = currentWeather;

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
      setErrorFeedback(`"${value}" city is not defined`)
    }
    )
  }
  
  return (
    <main className="d-flex min-vh-100 flex-column bg-dark">
      <div className="flex-grow-1 text-white">
        <ThemeContext.Provider value={{themes, currentTheme, setStateTheme}}>
          <Form weatherData={weatherData} errorFeedback={errorFeedback} handleSubmitForm={handleSubmitForm} />
          <Content weatherData={weatherData} />
        </ThemeContext.Provider>
      </div>
    </main>
  )
}

export default App;