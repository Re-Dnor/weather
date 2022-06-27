const parse = (xml) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, 'application/xml');

  const region = doc.querySelector('region').textContent;
  const country = doc.querySelector('country').textContent;
  const localTime = doc.querySelector('localtime').textContent;
  const windKPH = doc.querySelector('wind_mph').textContent;
  const icon = doc.querySelector('icon').textContent;
  const tempC = doc.querySelector('temp_c').textContent;


  const temp = `${tempC} \xB0C`
  const wind = `${(windKPH / 3.6).toFixed(2)} m/s`;

  const currentWeather = {
    region,
    country,
    localTime,
    wind,
    temp,
    icon
  }
  const forecastWeather = [];

  const forecastDays = doc.querySelectorAll('forecastday');
  forecastDays.forEach((forecast) => {
    const iconForecast = forecast.querySelector('icon').textContent;
    const dateForecast = forecast.querySelector('date').textContent;
    const maxTempC = forecast.querySelector('maxtemp_c').textContent;
    const minTempC = forecast.querySelector('mintemp_c').textContent;
    const avgTempC = forecast.querySelector('avgtemp_c').textContent;
    const chanceRain = forecast.querySelector('daily_chance_of_rain').textContent;

    const maxTemp = `${maxTempC} \xB0C`;
    const minTemp = `${minTempC} \xB0C`;
    const avgTemp = `${avgTempC} \xB0C`;
    const [year, month, day] = dateForecast.split('-');
    const date = `${day}/${month}`;

    const dataForecasts = {
      iconForecast,
      date,
      maxTemp,
      minTemp,
      avgTemp,
      chanceRain
    }
    forecastWeather.push(dataForecasts)
  })


  return { currentWeather, forecastWeather };
}

export default (xml) => {
  try {
    return parse(xml);
  } catch (error) {
    throw new Error('error')
  }
};