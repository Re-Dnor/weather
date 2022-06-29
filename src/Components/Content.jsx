import {isEmpty} from "lodash";
import Weather from "./Weather/Weather.jsx";

const Content = ({ weatherData }) => {

  return (
    <section className="container-fluid p-3 container-xxl">
      <div className="col-md-10 col-lg-10 order-1 mx-auto m-0 text-center">
      {isEmpty(weatherData) ? null : <Weather weatherData={weatherData} />}
      </div>
    </section>
  )
}

export default Content;