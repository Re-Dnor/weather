export default (data) => {
  const url = `http://api.weatherapi.com/v1/forecast.xml?key=8a438b18d6f74328842122020222306&q=${data}&days=3&aqi=no&alerts=no`;
  return url;
}