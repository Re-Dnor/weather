import React, {useState, useContext} from "react";
import cn from "classnames";
import ThemeContext from "./Context/ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher.jsx";

const Form = (props) => {
  const {handleSubmitForm, errorFeedback} = props;
  const [city, setStateCity] = useState('');
  const {currentTheme} = useContext(ThemeContext);
  const classNamaFeedback = cn('feedback m-0 position-absolute medium', errorFeedback? 'text-danger' :'text-success')

  const submitForm = (e) => {
    e.preventDefault();

    handleSubmitForm(city, setStateCity);
  }

  const handleInputChange = (e) => {
    setStateCity(e.target.value);
  }

  const {className} = currentTheme;

  const classNameTheme = cn("container-fluid p-5", className)

  return (
    <section className={classNameTheme}>
      <ThemeSwitcher />
      <div className="row">
        <div className="col-md-10 col-lg-5 mx-auto text-white">
          <h1 className="display-5 text-center m-4">Weather</h1>
          <form action="" id="form" onSubmit={submitForm}>
            <div className="row">
              <div className="col">
                <div className="form-floating">
                  <input
                    type="text"
                    name="rss-input"
                    id="rss-input"
                    aria-label="city"
                    className="form-control"
                    autoFocus
                    required
                    placeholder="RSS Ссылка"
                    autoComplete="off"
                    value={city}
                    onChange={handleInputChange}
                  />
                  <label className="text-dark" htmlFor="input_1">City</label>
                </div>
              </div>
              <button type="submit" id="btn-submit" className="col-auto btn btn-lg btn-info px-5 ms-2 text-white">
                Find
              </button>
            </div>
          </form>
          <p className={classNamaFeedback}>{errorFeedback}</p>
        </div>
      </div>
    </section>
  )
}

export default Form;