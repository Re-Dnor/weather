const parse = (xml) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, 'application/xml');

  const region = doc.querySelector('region').textContent;
  const country = doc.querySelector('country').textContent;
  const localTime = doc.querySelector('localtime').textContent;
  const windKPH = doc.querySelector('wind_mph').textContent;
  const icon = doc.querySelector('icon').textContent;
  const tempC = doc.querySelector('temp_c').textContent;

  const temp = `${tempC} С`
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
    const maxTemp = forecast.querySelector('maxtemp_c').textContent;
    const minTemp = forecast.querySelector('mintemp_c').textContent;
    const avgTemp = forecast.querySelector('avgtemp_c').textContent;
    const chanceRain = forecast.querySelector('daily_chance_of_rain').textContent;
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