import getUrl from "./getUrl.js"
import axios from "axios";

const getData = async (city) => {
  const toLowerCaseCity = city.toLowerCase().trim();
  const api = getUrl(toLowerCaseCity);
  const uri = encodeURIComponent(api);
  const proxy = `https://allorigins.hexlet.app/get?disableCache=true&url=${uri}`;
  const data = await axios.get(proxy);
  return data;
}

export default getData;